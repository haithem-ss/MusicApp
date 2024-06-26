import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { LoadTracksProvider } from '../Context/Load-tracks-context';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { backgroundColor } from "../constants/colors";
import { TracksPlayerProvider } from "../Context/Track-player-context";
import BottomSheetPlayer from "../Context/Player-context";

export default function HomeLayout(props: any) {
    const queryClient = new QueryClient()
    return <QueryClientProvider client={queryClient}>
        <LoadTracksProvider>
            <TracksPlayerProvider>
                <BottomSheetPlayer>
                    {props.children}
                </BottomSheetPlayer>
            </TracksPlayerProvider>
        </LoadTracksProvider>
    </QueryClientProvider>
}


export function Layout({ ...props }) {

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                translucent={true}
                barStyle="light-content"
            />
            <View
                style={styles.layout}
                {...props}
            >
                {props.children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: backgroundColor
    },
    layout: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 25,
    },
    background: {
        flex: 1,
        position: 'absolute',
    },
});

