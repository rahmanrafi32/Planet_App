import {StyleSheet} from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        marginHorizontal:spacing[4],
    },
    search:{
        width:'95%',
        height:30,
        marginTop:15,
        borderBottomWidth:2,
        borderBottomColor:colors.white,
        color: colors.white,
        fontFamily: typography.primary
    }
});

export default styles;