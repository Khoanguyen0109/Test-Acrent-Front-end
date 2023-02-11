import React from 'react';

import { Box, Grid } from '@mui/material';

import TChart from 'components/TChart';

import { useTheme } from '@emotion/react';

import MealHistory from './container/MealHistory';
import WeightProgress from './container/WeightProgress';

function HomePage() {
  const theme = useTheme();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid sx={{ height: theme.spacing(39) }} item xs={5}>
          <WeightProgress />
        </Grid>
        <Grid
          sx={{
            height: theme.spacing(39),
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: theme.colors.dark[600],
            pt: 1,
            pb: 2,
          }}
          item
          xs={7}
        >
          <TChart />
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 3,
          padding: theme.spacing(0, 20),
        }}
      >
        <MealHistory />
      </Box>
    </div>
  );
}

export default HomePage;
