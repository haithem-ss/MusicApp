import Progress from '@react-native-community/slider';
import { Platform, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import Text from '../../../components/ui/Text';
import { formatTime } from '../../../utils/date-time';
import { primaryColor } from '../../../constants/colors';

interface SliderProps {
    currentTime: number | undefined,
    duration: number | undefined,
    seekHandler: (progress: number) => void
}

export const Slider = (props: SliderProps) => {
    const { currentTime, duration, seekHandler } = props;
    const [value, setValue] = useState(currentTime ?? 0);

    useEffect(() => {
        setValue(currentTime ?? 0 / (duration ?? Infinity));
    }, [currentTime, duration]);
    const min = 0;
    const max = 1;

    return (
        <View
            style={styles.container}
        >
            <Progress
                value={value}
                minimumValue={min}
                maximumValue={max}
                onValueChange={seekHandler}
                style={styles.slider}
                minimumTrackTintColor={primaryColor}
                maximumTrackTintColor="#000000"
                thumbTintColor={primaryColor}
            />
            <View style={styles.timeContainer}>
                <View style={styles.time}>
                    <Text fontSize={12} color='#ABABAB' fontWeight='semibold'>
                        {formatTime(value * (duration ?? 0))}
                    </Text>
                </View>
                <View style={styles.time}>
                    <Text fontSize={12} color='#ABABAB' fontWeight='semibold'>
                        {formatTime(duration ?? 0)}
                    </Text>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0
    }, slider: {
        color: 'white',
        // hard coded value
        width: '109%',
    }, timeContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, time: {}

})