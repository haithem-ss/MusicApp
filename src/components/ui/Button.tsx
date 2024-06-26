import { useState } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { primaryColor, secondaryColor } from "../../constants/colors";
import Icon from 'react-native-vector-icons/AntDesign';

interface ButtonProps extends TouchableOpacityProps {
    children?: React.ReactElement;
}

export default function Button({ children, ...props }: ButtonProps) {
    return (
        <TouchableOpacity {...props}>
            <Text>
                {children}
            </Text>
        </TouchableOpacity>
    );
}


export const ToggleButton = (props: any) => {

    const { variant } = props
    const [state, setState] = useState(true)

    const handleSwitchState = () => {
        setState(!state)
    }
    return <Button onPress={handleSwitchState}>
        <View>
            {state ? (
                <View style={{
                    position: 'absolute',
                    backgroundColor: primaryColor,
                    width: 7,
                    height: 7,
                    borderRadius: 10,
                    top: 0,
                    right: 0,
                    zIndex: 100
                }}>
                </View>
            ) : null}
            <Icon name={variant} size={24} color={secondaryColor} />
        </View>
    </Button>
}

export const ToggleLikeButton = (props: any) => {

    const { variant } = props
    const [state, setState] = useState(false)

    const handleSwitchState = () => {
        setState(!state)
    }
    return <Button onPress={handleSwitchState}>
        <View>
            {state ? (
                <Icon name={variant} size={24} color={secondaryColor} />
            ) :
                <Icon name={`${variant}o`} size={24} color={secondaryColor} />

            }
        </View>
    </Button>
}