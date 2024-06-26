import { ScrollView, StyleSheet, View } from "react-native";
import { Track } from "../../../components/ui/Track";
import useTracks from "../../../hooks/useTracks";
import Text from "../../../components/ui/Text";

export const TracksList = () => {
    const { tracks } = useTracks()
    return (
        <>
            {tracks.length === 0 ?
                <View style={styles.mainContainer}>
                    <Text fontSize={20} fontWeight="semibold" >There are no tracks</Text>
                </View> :
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                    {tracks.map((track) => (<Track key={track.url} {...track} />))}
                </ScrollView>
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 26,
    }, mainContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


