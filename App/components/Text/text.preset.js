import typography from "../../theme/typography";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

const BASE = {
    fontFamily: typography.primary,
    fontSize: spacing[4],
    color: colors.white
};
const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: spacing[4],
    color: colors.white
};
const BOLD = {
    fontFamily: typography.secondary,
    color: colors.white
}
export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: spacing[8]
    },
    h2: {
        ...BOLD,
        fontSize: spacing[7]
    },
    h3: {
        ...BASE_BOLD,
        fontSize: spacing[6]
    },
    h4: {
        ...BASE_BOLD,
        fontSize: spacing[4]
    },
    h5: {
        ...BASE,
        fontSize: spacing[3]
    }
}