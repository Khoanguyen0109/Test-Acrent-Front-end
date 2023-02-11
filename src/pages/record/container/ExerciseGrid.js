import React, { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { Box, Grid, Typography } from '@mui/material';

import { useTheme } from '@emotion/react';
import axios from 'axios';
import { format } from 'date-fns';
import { makeStyles } from 'tss-react/mui';

import Exercise from '../components/Exercise';

const useStyles = makeStyles()((theme) => ({
  gridContainer: {
    height: theme.spacing(24),
    marginTop: theme.spacing(0.5),
    overflow: 'hidden',
  },
}));
function ExerciseGrid() {
  const theme = useTheme();
  const { classes } = useStyles();
  const date = format(new Date(), 'yyyy.MM.dd');
  const [data, setData] = useState([]);
  const fetchExercise = async () => {
    try {
      const api = `${process.env.REACT_APP_API_ENDPOINT}/exercises`;

      const res = await axios.get(api);
      setData(res.data.exercises);
    } catch (error) {}
  };
  useEffect(() => {
    fetchExercise();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: theme.colors.dark[600],
        padding: theme.spacing(2, 3),
      }}
    >
      <Box display='flex' alignItems='center'>
        <Typography
          color='white'
          fontSize='22px'
          fontWeight='400'
          width={theme.spacing(12)}
          sx={{ mr: 2 }}
        >
          My Exercise
        </Typography>
        <Typography color='white' fontSize='22px' fontWeight='400'>
          {date}
        </Typography>
      </Box>
      <Box className={classes.gridContainer}>
        <PerfectScrollbar>
          <Grid container spacing={3}>
            {data.map((item) => (
              <Grid key={item.id} paddingLeft={0} item xs={6}>
                <Exercise
                  name={item.name}
                  calories={item.calories}
                  time={item.time}
                />
              </Grid>
            ))}
          </Grid>
        </PerfectScrollbar>
      </Box>
    </Box>
  );
}

export default ExerciseGrid;
