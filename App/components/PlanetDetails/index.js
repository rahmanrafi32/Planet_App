import {View} from "react-native";
import Text from "../Text";
import styles from "./styles";

const PlanetDetails = ({title,value}) => {
    return (
        <View style={styles.planetDetails}>
            <Text preset={"h5"} style={{textTransform:"uppercase"}}>{title}</Text>
            <Text preset={"h2"}>{value}</Text>
        </View>
    );
};

export default PlanetDetails;
