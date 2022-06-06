import {StyleSheet} from "react-native";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    planetDetails:{
        width:'100%',
        height:'10%',
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between",
        borderWidth:1,
        borderColor:colors.grey,
        marginBottom:spacing[2],
        marginTop:spacing[2],
        padding:spacing[3]
    }
});

export default styles;