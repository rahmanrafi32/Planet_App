import {AntDesign} from "@expo/vector-icons";
import {FlatList, TouchableOpacity, View} from "react-native";

import {PLANET_LIST} from "../../data/planetList";
import Text from "../Text";
import colors from "../../theme/colors";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

const PlanetLists = ({list,setList}) => {
    const navigation = useNavigation();
    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.name}
            renderItem={({item}) =>
                <TouchableOpacity onPress={() => navigation.navigate('Details', {planet: item})} style={styles.item}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <View style={[styles.circle, {backgroundColor: item.color}]}/>
                        <Text preset={"h4"} style={styles.itemName}>{item.name}</Text>
                    </View>
                    <AntDesign name="right" size={18} color={colors.grey}/>
                </TouchableOpacity>
            }
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    );
};

export default PlanetLists;
