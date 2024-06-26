import { StyleSheet, Text, View } from "react-native"
import Button, { ToggleButton } from "../../../components/ui/Button"
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import { audioType } from "../../../app/music-player";
import { backgroundColor, primaryColor, secondaryColor } from "../../../constants/colors";




interface LowerControlsProps {
    playSound: () => void,
    pauseSound: () => void,
    playNext: () => void,
    playPrevious: () => void
    isPlaying: boolean
}

export const LowerControls = (props: LowerControlsProps) => {
    const { isPlaying, playSound, pauseSound, playNext, playPrevious } = props

    return <View style={styles.layout}>
        <ToggleButton variant="shuffle" />

        <View style={styles.innerLayout}>
            <Button onPress={playNext}>
                <Icon name="play-skip-back-sharp" size={24} color={"white"} />
            </Button>
            <PlayPauseButton playSound={playSound} pauseSound={pauseSound} />
            <Button onPress={playPrevious}>
                <Icon name="play-skip-forward-sharp" size={24} color={"white"} />
            </Button>
        </View>
        <ToggleButton variant="repeat" />
    </View>
}






export const PlayPauseButton = (props: any) => {

    const { isPlaying, playSound, pauseSound } = props

    const pressHandler = () => {
        if (isPlaying) {
            pauseSound()
        } else {
            playSound()
        }
    }

    return <Button style={[styles.playPauseButton, isPlaying && { paddingLeft: 5 }]} onPress={pressHandler}>
        {isPlaying ?
            <FontAwesome name="pause" size={40} color={backgroundColor} />
            :
            <FontAwesome name="play" size={40} color={backgroundColor} />
        }
    </Button>

}



const styles = StyleSheet.create({
    layout: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40
    }, text: {
        color: 'white',
        fontSize: 18
    }, songInfos: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, playPauseButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 75,
        aspectRatio: 1,
        borderRadius: 40,
        backgroundColor: primaryColor,
    }

})