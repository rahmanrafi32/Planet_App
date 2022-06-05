import React from 'react';
import {View} from 'react-native';

import Text from "../Text";
import styles from "./styles";

const HeaderText = () => {
    return (
        <View style={styles.container}>
            <Text preset={"h2"} style={{textTransform: "uppercase"}}>
                The Planets
            </Text>
        </View>
    );
};

export default HeaderText;
