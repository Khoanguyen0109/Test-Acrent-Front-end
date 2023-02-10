import { createTheme } from '@mui/material/styles';

import colors from './themes/colors.json';
let theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans Japanese"', 'Inter'].join(','),
    allVariants: {
      color: colors.dark[500],
    },
    // h1: {
    //   fontSize: fontSize.xxLarge,
    //   fontWeight: fontWeight.bold,
    // },
    // h2: {
    //   fontSize: fontSize.xLarge,
    //   fontWeight: fontWeight.semi,
    // },
    // h3: {
    //   fontSize: fontSize.large,
    //   fontWeight: fontWeight.semi,
    // },
    // h4: {
    //   fontSize: fontSize.xMedium,
    //   fontWeight: fontWeight.normal,
    // },
    // h5: {
    //   fontSize: fontSize.medium,
    //   fontWeight: fontWeight.semi,
    // },
    // h6: {
    //   fontSize: fontSize.medium,
    //   fontWeight: fontWeight.normal,
    // },
    // subtitle1: {
    //   fontSize: fontSize.normal,
    // },
    // subtitle2: {
    //   fontSize: fontSize.small,
    // },
    // body1: {
    //   fontSize: fontSize.normal,
    //   fontWeight: fontWeight.normal,
    //   lineHeight: '24px',
    // },
    // body2: {
    //   fontSize: fontSize.normal,
    //   fontWeight: fontWeight.normal,
    //   lineHeight: '20px',
    // },
  },
  spacing: 8,

  components: {
    MuiTypography: {
      defaultProps: {
        component: 'div',
      },
    },
  },
  colors,
  breakpoints: {
    // Define custom breakpoint values.
    // These will apply to Material-UI components that use responsive
    // breakpoints, such as `Grid` and `Hidden`. You can also use the
    // theme breakpoint functions `up`, `down`, and `between` to create
    // media queries for these breakpoints
    values: {
      xs: 480,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
});

export default theme;
