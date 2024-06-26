import { createContext, useEffect, useMemo, useState } from "react";
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";
import SoundPlayer from "react-native-sound"
import useTracks from "../hooks/useTracks";


interface TracksPlayerContextProps {
    playSound: () => void,
    pauseSound: () => void,
    onSeekHandler: (progress: number) => void,
    audio: audioType | null,
    playingOrder: Song[],
    playNext: () => void,
    playPrevious: () => void,
    setCurrentTrack: (track: Song) => void
}

export type audioType = {
    isPlaying: boolean,
    sound: SoundPlayer | null,
    currentTime: number,
    duration: number,
    title: string,
    cover: string,
    artist: string,
}

const TracksPlayerContext = createContext<TracksPlayerContextProps>({
    playSound: () => { },
    pauseSound: () => { },
    onSeekHandler: () => { },
    audio: null,
    playingOrder: [],
    playNext: () => { },
    playPrevious: () => { },
    setCurrentTrack: () => { }

});

export const TracksPlayerProvider = ({ children }: { children: any }) => {

    const { tracks } = useTracks()

    const shuffleTracks = (tracks: Song[]) => {
        const shuffledTracks = [...tracks];
        for (let i = shuffledTracks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledTracks[i], shuffledTracks[j]] = [shuffledTracks[j], shuffledTracks[i]];
        }
        return shuffledTracks
    }
    const [playingOrder, setPlayingOrder] = useState<Song[]>(shuffleTracks(tracks));



    const [currentTrack, setCurrentTrack] = useState<Song>(playingOrder[0])

    const { title, cover, artist, duration: initDuration, url } = currentTrack
    const [audio, setAudio] = useState<audioType>({ title, cover, artist, isPlaying: false, sound: null, currentTime: 0, duration: initDuration / 1000 })

    useEffect(() => {
        setCurrentTrack(playingOrder[0])
    }, [playingOrder])

    useEffect(() => {
        const sound = new SoundPlayer(url, SoundPlayer.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            setAudio((audio) => { return { ...audio, sound: sound } })
        });
        return () => {
            sound.release()
        }
    }, [currentTrack])

    const playSound = () => {
        console.log("Playing sound")
        audio.sound?.play()
        setAudio((audio) => { return { ...audio, isPlaying: true } })
    }

    const pauseSound = () => {
        console.log("Pausing sound")
        audio.sound?.pause()
        setAudio((audio) => { return { ...audio, isPlaying: false } })
    }

    const getCurrentTime = () => {
        audio.sound?.getCurrentTime((seconds) => {
            setAudio((audio) => { return { ...audio, currentTime: seconds, isPlaying: audio.sound?.isPlaying()! } })
        })
    }

    const onSeekHandler = (progress: number) => {
        audio.sound?.setCurrentTime(progress * audio.duration)
        getCurrentTime()
    }

    const playNext = () => {
        const nextTrack = playingOrder.shift()
        if (!nextTrack) return;
        setPlayingOrder([...playingOrder, nextTrack])
    }

    const playPrevious = () => {
        const previousTrack = playingOrder.pop()
        if (!previousTrack) return;
        setPlayingOrder([previousTrack, ...playingOrder])
    }

    useEffect(() => {
        if (!audio.sound) return;
        if (audio?.isPlaying) {
            const interval = setInterval(() => {
                getCurrentTime()
            }, 500);
            return () => {
                clearInterval(interval);
            };
        }
    }, [audio]);



    const value = useMemo(() => {
        return {
            playSound,
            pauseSound,
            onSeekHandler,
            audio,
            playingOrder,
            playNext,
            playPrevious,
            setCurrentTrack
        }
    }, [])

    return (
        <TracksPlayerContext.Provider value={value}>
            {children}
        </TracksPlayerContext.Provider>
    );
};

export default TracksPlayerContext;