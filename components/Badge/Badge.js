import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from "react-native";
import style from "./style";
import {horizontalScale} from "../../assets/styles/scaling";

const Badge = ({onPress, isInactive, title}) => {

    const [width, setWidth] = useState(0)
    const textRef = useRef(null);
    const paddingHorizontal = 10;
    const tabWidth = {
        width: horizontalScale(paddingHorizontal * 2 + width)
    }

    return (
        <View style={[style.badge, tabWidth]}>
            <Text
                onTextLayout={(event) => {
                    setWidth(event.nativeEvent.lines[0].width)
                }}
                ref={textRef}
                style={[style.title, isInactive && style.inactiveTitle]}
            >{title}</Text>
        </View>
    );
};

Badge.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Badge;
