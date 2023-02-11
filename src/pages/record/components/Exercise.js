import React from 'react';

import { Box, Typography } from '@mui/material';

import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',

    height: theme.spacing(5),
    borderBottom: `1px solid ${theme.colors.gray[400]}`,
  },
  dot: {
    height: '5px',
    width: '5px',
    marginRight: theme.spacing(2),
    backgroundColor: 'white',
    borderRadius: '50%',
  },
  name: {
    color: 'white',
    fontSize: '15px',
    fontWeight: 300,
    lineHeight: '22px',
  },
  calories: {
    fontSize: '15px',
    fontWeight: 300,
    color: theme.colors.primary[300],
    lineHeight: '18px',
  },
  time: {
    fontSize: '18px',
    fontWeight: 300,
    color: theme.colors.primary[300],
  },
}));
function Exercise(props) {
  const { name, calories, time } = props;
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      <Box display='flex' alignItems='baseline'>
        <Box className={classes.dot} />
        <Box>
          <Typography className={classes.name} component='div'>
            {name}
          </Typography>
          <Typography className={classes.calories} component='div'>
            {calories}kcal
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography className={classes.time}>{time} min</Typography>
      </Box>
    </Box>
  );
}

export default Exercise;
