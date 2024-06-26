import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import BottomSheet, { BottomSheetView, TouchableOpacity } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from "../Home";
import Button from '../../components/ui/Button';
import { BottomBar } from '../../sections/Bottom-bar';
import MusicPlayer from '../music-player/index';

const BottomSheetPlayer = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    useEffect(() => {
        const backAction = () => {
            console.log('backAction');
            bottomSheetRef?.current?.close()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);


    // renders
    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <HomeScreen />
                    <BottomBar action={() => bottomSheetRef.current?.expand()} />
                    <BottomSheet
                        index={-1}
                        ref={bottomSheetRef}
                        onChange={handleSheetChanges}
                        snapPoints={["100%"]}
                        handleStyle={{ backgroundColor: 'white', display: 'none' }}
                        handleIndicatorStyle={{ display: 'none' }}
                        containerStyle={{ borderRadius: 0 }}
                        backgroundStyle={{ borderRadius: 0 }}
                    >

                        <BottomSheetView
                            style={styles.contentContainer}>
                            <MusicPlayer goBack={() => bottomSheetRef?.current?.close()} />
                        </BottomSheetView>

                    </BottomSheet>

                </View>

            </GestureHandlerRootView>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default BottomSheetPlayer;
