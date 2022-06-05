import {StyleSheet} from "react-native";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container:{
        padding:spacing[3],
        borderBottomWidth:0.2,
        borderBottomColor:colors.grey,
        flexDirection:'row',
        alignItems:'center',
    }
});

export default styles;