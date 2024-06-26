import { TextInput, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { primaryColor } from "../../../constants/colors";
import { useAlbums } from "../../../hooks/useAlbums";
import useTracks from "../../../hooks/useTracks";
export function SearchBar() {

    const { search } = useTracks()

    return <View style={styles.layout}>
        <Icon name="search" size={24} color="rgb(255, 255, 255)" />
        <TextInput
            onChangeText={search}
            style={styles.input}
            placeholder="Search song, playlist, artist..."
            placeholderTextColor="rgb(255, 255, 255)"
        />
    </View>
}


let styles = StyleSheet.create({
    layout: {
        paddingLeft: 16,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
        backgroundColor: primaryColor
    }, input: {
        flex: 1,
        color: "white",
    }
})