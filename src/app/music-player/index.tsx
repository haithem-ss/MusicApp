
import { AlbumCover, UpperControls, TopBar, LowerControls } from '../../sections/PlayScreen';
import SoundPlayer from "react-native-sound"
import { Slider } from '../../sections/PlayScreen/components/Slider';
import { StyleSheet, View } from 'react-native';
import { Layout } from '../Layout';
import usePlayer from '../../hooks/usePlayer';

export type audioType = {
    isPlaying: boolean,
    sound: SoundPlayer | null,
    currentTime: number,
    duration: number
}

export default function Page(props: any) {

    const { goBack } = props
    const { audio, onSeekHandler, pauseSound, playSound, playNext, playPrevious } = usePlayer()
    const { title, artist, cover, currentTime, sound, duration, isPlaying } = audio || { artist: "", title: "" }

    return <Layout>
        <View style={styles.layout}>
            <TopBar title={title} goBack={goBack} />
            <AlbumCover cover={cover} />
            <UpperControls title={title} artist={artist} duration={duration} />
            <Slider currentTime={currentTime} duration={duration} seekHandler={onSeekHandler} />
            <LowerControls playSound={playSound} pauseSound={pauseSound} isPlaying={isPlaying!} playNext={playNext} playPrevious={playPrevious} />
        </View>
    </Layout>
}


const styles = StyleSheet.create({
    layout: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingBottom: 100,
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
    }
})

