import {AntDesign} from "@expo/vector-icons";
import {FlatList, View} from "react-native";

import {PLANET_LIST} from "../../data/planetList";
import Text from "../Text";
import colors from "../../theme/colors";
import styles from "./styles";

const PlanetDetails = () => {
    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={PLANET_LIST}
            keyExtractor={item => item.name}
            renderItem={({item}) =>
                <View style={styles.item}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <View style={[styles.circle, {backgroundColor: item.color}]}/>
                        <Text preset={"h4"} style={styles.itemName}>{item.name}</Text>
                    </View>
                    <AntDesign name="right" size={18} color={colors.grey}/>
                </View>
            }
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    );
};

export default PlanetDetails;
