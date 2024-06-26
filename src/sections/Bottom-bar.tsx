import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AlbumCover } from "./PlayScreen/components/Album-cover";
import Icon from 'react-native-vector-icons/Ionicons';
import Text from "../components/ui/Text";
import Button from "../components/ui/Button";
import { primaryColor } from "../constants/colors";
import usePlayer from "../hooks/usePlayer";
import useBottomSheet from "../hooks/useBottomSheet";

export function BottomBar() {
    const { audio } = usePlayer()
    const { title, artist } = audio || { artist: "", title: "" }
    const { closeBottomSheet } = useBottomSheet()
    return (
        <TouchableOpacity style={styles.layout} onPress={closeBottomSheet}>
            <AlbumCover width={58} />
            <View style={styles.content}>
                <Text fontSize={16} fontWeight="semibold" numberOfLines={1}>{title}</Text>
                <Text fontSize={12} color="#ABABAB" numberOfLines={1}>{artist}</Text>
            </View>
            <View style={styles.innerLayout}>
                <Button>
                    <Icon name="play-skip-back-sharp" size={20} color={"white"} />
                </Button>
                {/* <PlayPauseButton audio={null} playSound={null} pauseSound={null} /> */}
                <Button>
                    <Icon name="play-skip-forward-sharp" size={20} color={"white"} />
                </Button>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    layout: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 20,
        gap: 15,
        backgroundColor: primaryColor
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 4
    }, innerLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40
    }

})