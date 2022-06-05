import {View, StyleSheet, StatusBar} from 'react-native';

import colors from "../../theme/colors";
import HeaderText from "../../components/HeaderText";
import PlanetDetails from "../../components/PlanetDetails";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
});

const Homescreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar animated={true} hidden={true}/>
            <HeaderText/>
            <PlanetDetails/>
        </View>
    );
};

export default Homescreen;
