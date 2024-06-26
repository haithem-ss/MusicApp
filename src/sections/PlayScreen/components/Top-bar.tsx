import { StyleSheet, View } from "react-native"
import Button from "../../../components/ui/Button"
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native"
import Text from "../../../components/ui/Text"

export const TopBar = ({ title, goBack }: { title: string, goBack: any }) => {
    // const { goBack } = useNavigation()
    return <View style={styles.layout}>
        <Button onPress={goBack}>
            <Entypo name="chevron-down" size={24} color="white" />
        </Button>
        <View style={styles.header}>
            <Text color="#ABABAB" fontSize={13} fontWeight="semibold">
                Now playing
            </Text>
            <Text fontSize={15} numberOfLines={1} >
                {title}
            </Text>
        </View>
        <Button>
            <Entypo name="dots-three-vertical" size={20} color="white" />
        </Button>
    </View>
}


const styles = StyleSheet.create({
    layout: {
        width: '100%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, header: {
        alignItems: 'center',
        width: '70%',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 4
    }

})