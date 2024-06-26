import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Text from "./Text"
import { Song } from "react-native-get-music-files/lib/typescript/src/NativeTurboSongs"
import { useNavigation } from "@react-navigation/native"
import { formatTime } from "../../utils/date-time"
import { AlbumCover } from "../../sections/PlayScreen"
import useBottomSheet from "../../hooks/useBottomSheet"
import usePlayer from "../../hooks/usePlayer"

export const Track = (props: Song) => {
    const { title, artist: originalArtistName, cover, duration } = props
    const artist = originalArtistName === "<unknown>" ? "Unknown artist" : originalArtistName
    const { setCurrentTrack } = usePlayer()
    const { openBottomSheet } = useBottomSheet()
    const navigateToPlayScreen = () => {
        setCurrentTrack(props)
        openBottomSheet()
    }

    return <>
        <TouchableOpacity onPress={navigateToPlayScreen} style={styles.layout}>
            <AlbumCover cover={cover} width={58} />
            <View style={styles.content}>
                <Text fontSize={16} fontWeight="semibold" numberOfLines={1}>{title}</Text>
                <Text fontSize={12} color="#ABABAB" numberOfLines={1}>{artist}</Text>
            </View>
            <Text fontSize={16} >
                {formatTime(duration / 1000)}
            </Text>
        </TouchableOpacity>
    </>
}


const styles = StyleSheet.create({
    layout: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 25
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4
    },

})