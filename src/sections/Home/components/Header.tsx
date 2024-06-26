import { View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import Text from "../../../components/ui/Text";
import Button from "../../../components/ui/Button";
export function Header() {
    return <View style={styles.layout}>
        <View>
            <Text fontWeight="bold" fontSize={24}>Welcome back!</Text>
            <Text fontWeight="semibold" fontSize={14} color="#ABABAB">What do you feel like today?</Text>
        </View>
        <Button>
            <Icon name="settings" size={24} color="white" />
        </Button>
    </ View>
}


const styles = StyleSheet.create({
    layout: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})