import {StyleSheet} from "react-native";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    item: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing[4],
    },
    list: {
        padding: spacing[2],
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[2]
    },
    separator: {
        borderBottomWidth: .2,
        borderBottomColor: colors.grey
    }
});

export default styles;