import { StyleSheet, View } from "react-native"
import Button, { ToggleLikeButton } from "../../../components/ui/Button"
import Icon from "react-native-vector-icons/AntDesign"
import Text from "../../../components/ui/Text"


interface UpperControlsProps {
    title: string,
    artist: string,
    duration: number | undefined
}

export const UpperControls = (props: UpperControlsProps) => {
    const { title, artist } = props
    return <View style={styles.layout}>
        <View style={styles.songInfos}>
            <Text fontSize={20} numberOfLines={1}>{title}</Text>
            <Text fontSize={14} color="#ABABAB" numberOfLines={1}>{artist}</Text>
        </View>
        <ToggleLikeButton variant="heart" />
    </View>
}




const styles = StyleSheet.create({
    layout: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18
    }, songInfos: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 5
    }

})