import React from 'react';
import {Linking, Pressable, ScrollView, View} from "react-native";

import styles from "../DetailsScreen/styles";
import HeaderText from "../../components/HeaderText";
import renderImage from "../../utils/renderImage";
import Text from "../../components/Text";
import {FontAwesome} from "@expo/vector-icons";
import colors from "../../theme/colors";
import PlanetDetails from "../../components/PlanetDetails";

const DetailsScreen = ({route}) => {
    const {
        name,
        description,
        rotationTime,
        revolutionTime,
        radius,
        avgTemp,
        wikiLink,
    } = route.params.planet;

    return (
        <View style={styles.container}>
            <HeaderText backButton={true}/>
            <ScrollView contentContainerStyle={{paddingBottom: 50}}>
                <View style={styles.planetImageView}>{renderImage(name)}</View>
                <View style={styles.detailsView}>
                    <Text preset={"h1"} style={styles.name}>{name}</Text>
                    <Text style={styles.descriptionText}>{description}</Text>
                    <Pressable style={styles.source} onPress={() => Linking.openURL(wikiLink)}>
                        <Text>Source: </Text>
                        <Text preset={"h4"} style={styles.wiki}>Wikipedia</Text>
                        <FontAwesome style={styles.icon} name="external-link" size={16} color={colors.grey}/>
                    </Pressable>
                    <View style={{height: '5%'}}/>
                    <PlanetDetails title={"Rotation Time"} value={rotationTime}/>
                    <PlanetDetails title={"Revolution Time"} value={revolutionTime}/>
                    <PlanetDetails title={"Radius"} value={radius}/>
                    <PlanetDetails title={"Avg. Temp."} value={avgTemp}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailsScreen;
