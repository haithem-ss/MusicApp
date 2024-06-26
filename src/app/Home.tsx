import { StyleSheet, View } from "react-native";
import { Header, SearchBar, TracksList } from "../sections/Home";
import { Layout } from "./Layout";

export default function MusicPlayer() {

    return <Layout>
        <View style={styles.layout}>
            <Header />
            <SearchBar />
            <TracksList />
        </View>
    </Layout>
}


const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'flex-start',
        gap: 20,
        alignItems: 'center',
    }
})