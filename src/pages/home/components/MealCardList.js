import React from 'react';

import { Grid } from '@mui/material';

import MealCard from './MealCard';

function MealCardList(props) {
  const { history } = props;
  return (
    <Grid container spacing={1}>
      {history.length > 0 &&
        history.map((item) => (
          <Grid key={item.id} item xs={2} md={3} lg={2}>
            <MealCard meal={item} width={234} height={234} />
          </Grid>
        ))}
    </Grid>
  );
}

export default MealCardList;
