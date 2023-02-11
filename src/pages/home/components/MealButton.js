import React from 'react';

import { Box, Typography } from '@mui/material';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  hex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: theme.spacing(17),
    width: theme.spacing(17),
    background: theme.colors.primary['gradient-300-400'],
    WebkitClipPath:
      'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
    clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
    cursor: 'pointer',
  },
}));

function MealButton(props) {
  const { label, icon, onClick } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.hex} onClick={onClick}>
      {icon}
      <Typography color='white' fontSize='20px' fontWeight={300}>
        {label}
      </Typography>
    </Box>
  );
}

export default MealButton;
