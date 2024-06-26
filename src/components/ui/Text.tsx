import { Text as Txt, StyleSheet, TextProps as TxtProps } from "react-native";

interface TextProps extends TxtProps {
    children: string;
    fontWeight?: "light" | "regular" | "semibold" | "bold" | "extrabold";
    fontSize?: number;
    color?: "white" | "#ABABAB";
    style?: any;
}

export default function Text({ children, ...props }: TextProps) {
    const { fontWeight, fontSize, color } = props;

    const styles = StyleSheet.create({
        text: {
            color: color ?? "white",
            fontFamily: getFontFamily(fontWeight ?? "regular"),
            fontSize: fontSize ?? 14,
        },
    });

    return (
        <Txt style={[styles.text, props.style]} {...props}>
            {children}
        </Txt>
    );
}

const getFontFamily = (
    fontWeight: "light" | "regular" | "semibold" | "bold" | "extrabold"
) => {
    switch (fontWeight) {
        case "light":
            return "OpenSans-Light";
        case "regular":
            return "OpenSans-Regular";
        case "semibold":
            return "OpenSans-SemiBold";
        case "bold":
            return "OpenSans-Bold";
        case "extrabold":
            return "OpenSans-ExtraBold";
        default:
            return "OpenSans-Regular";
    }
}
