import {StyleSheet} from "react-native";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    planetImageView:{
        padding:spacing[8],
        alignItems:'center',
        justifyContent:'center'
    },
    detailsView:{
        marginTop: spacing[10],
        marginHorizontal: spacing[6],
        alignItems:"center"
    },
    name:{
        textAlign:'center',
        textTransform:'uppercase'
    },
    descriptionText:{
        textAlign:"center" ,
        marginTop:spacing[3],
        lineHeight:spacing[5]
    },
    source:{
        flexDirection:'row',
        marginTop:spacing[3],
        alignItems:'center'
    },
    wiki:{
        textDecorationLine:'underline',
        marginRight: spacing[1],
    },
    icon:{
        marginTop:spacing[2]
    }
});

export default styles;