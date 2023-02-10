import React from 'react';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  hex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.colors.primary['gradient-300-400'],
    '-webkit-clip-path':
      'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
    'clip-path': 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
  },
}));

function Menu({ children }) {
  const { classes } = useStyles();
  return <div className={classes.hex}>{children}</div>;
}

export default Menu;
