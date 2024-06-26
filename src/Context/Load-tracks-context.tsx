import { Dispatch, SetStateAction, createContext, useMemo, useState } from "react";
import { useAlbums } from "../hooks/useAlbums";
import Text from "../components/ui/Text";
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs";




interface LoadTracksContextProps {
    tracks: Array<Song>,
    searchKeyWords: string,
    search: Dispatch<string>,
}


const LoadTracksContext = createContext<LoadTracksContextProps>({
    searchKeyWords: "",
    search: (text: string) => { },
    tracks: []
});

export const LoadTracksProvider = ({ children }: { children: any }) => {

    const [searchKeyWords, setSearchKeyWords] = useState<string>('')
    const { data, isLoading, isError } = useAlbums()

    const filterTracks = (tracks: Song[], searchKeyWords: string) => {
        if (isLoading) return []
        let res = tracks.filter((track: Song) => {
            return track.title.toLowerCase().includes(searchKeyWords)
        })
        console.log({ res })
        return res
    }

    const value = useMemo(() => {
        return {
            searchKeyWords,
            search: setSearchKeyWords,
            tracks: filterTracks(data!, searchKeyWords)
        }
    }, [searchKeyWords, isLoading])

    return (
        <LoadTracksContext.Provider value={value}>
            {isLoading ? <Text>Loading</Text> : children}
        </LoadTracksContext.Provider>
    );
};

export default LoadTracksContext;