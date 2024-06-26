import React, { createContext, useCallback, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import BottomSheet, { BottomSheetView, TouchableOpacity } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomBar } from '../sections/Bottom-bar';
import MusicPlayer from '../app/music-player';


interface BottomSheetPlayerProps {
    openBottomSheet: () => void;
    closeBottomSheet: () => void;
}


export const BottomSheetContext = createContext<BottomSheetPlayerProps>({
    openBottomSheet: () => { },
    closeBottomSheet: () => { },
})

export const BottomSheetPlayer = ({ children }: any) => {

    const bottomSheetRef = useRef<BottomSheet>(null);


    const openBottomSheet = useCallback(() => {
        bottomSheetRef.current?.expand()
    }, [])

    const closeBottomSheet = useCallback(() => {
        bottomSheetRef.current?.close()
    }, [])

    useEffect(() => {
        const backAction = () => {
            bottomSheetRef?.current?.close()
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    const value = useMemo(() => ({
        openBottomSheet,
        closeBottomSheet
    }), [openBottomSheet, closeBottomSheet])

    return (
        <BottomSheetContext.Provider value={value}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <View style={styles.container}>
                    {children}
                    <BottomBar action={() => bottomSheetRef.current?.expand()} />
                    <BottomSheet
                        index={-1}
                        ref={bottomSheetRef}
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
        </BottomSheetContext.Provider>
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
