import React from "react";
import { StyleSheet, Image } from "react-native";

interface AlbumCoverProps {
    cover?: string;
    width?: number;

}

export const AlbumCover: React.FC<AlbumCoverProps> = (props) => {

    const { cover, width } = props
    const styles = StyleSheet.create({
        albumCover: {
            width: width ?? "100%",
            aspectRatio: 1,
            borderRadius: width ? 8 : 16,
            resizeMode: "cover"
        },
    });
    return <Image source={cover ? { uri: cover } : require("../../../../assets/Album-cover.png")} style={styles.albumCover} />;
};

