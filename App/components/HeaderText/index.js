import React from 'react';
import {Pressable, View} from 'react-native';

import Text from "../Text";
import styles from "./styles";
import {AntDesign} from "@expo/vector-icons";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import {useNavigation} from "@react-navigation/native";

const HeaderText = ({backButton, title="the planets"}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                backButton && <Pressable onPress={()=>navigation.goBack()}>
                    <AntDesign name="left" size={20} color={colors.white}/>
                </Pressable>

            }
            <Text preset={"h1"} style={{textTransform: "uppercase", marginLeft:spacing[3]}}>
                {title}
            </Text>
        </View>
    );
};

export default HeaderText;
