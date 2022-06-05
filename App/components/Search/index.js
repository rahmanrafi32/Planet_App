import {TextInput, View} from "react-native";

import styles from "./styles";
import colors from "../../theme/colors";
import {PLANET_LIST} from "../../data/planetList";

const Search = ({setList}) => {
    const searchFilterList = text => {
        const filteredList = PLANET_LIST.filter(item => {
            const itemName = item.name.toLowerCase();
            const userInput = text.toLowerCase();
            return itemName.indexOf(userInput) > -1;
        });

        setList(filteredList);
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={colors.white}
                placeholder={"Search A Planet"}
                style={styles.search}
                onChangeText={(text) => searchFilterList(text)}
            />
        </View>
    );
};

export default Search;
