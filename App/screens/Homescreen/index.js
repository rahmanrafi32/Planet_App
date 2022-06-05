import {View, StatusBar} from 'react-native';

import styles from "./styles";
import HeaderText from "../../components/HeaderText";
import PlanetList from "../../components/PlanetList";
import Search from "../../components/Search";
import {useState} from "react";
import {PLANET_LIST} from "../../data/planetList";

const Homescreen = () => {
    const [list, setList] = useState(PLANET_LIST);
    return (
        <View style={styles.container}>
            <StatusBar animated={true} hidden={true}/>
            <HeaderText/>
            <Search list={list} setList={setList}/>
            <PlanetList list={list}/>
        </View>
    );
};

export default Homescreen;
