import { MEAL } from 'constants';

import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import capitalize from 'lodash/capitalize';

import { Box, Typography, useTheme } from '@mui/material';

import { format } from 'date-fns';

function MealCard(props) {
  const theme = useTheme();
  const { meal, width, height, scrollPosition } = props;
  const { image, date, type } = meal;
  const mealValue = capitalize(
    Object.keys(MEAL).find((index) => MEAL[index] === type)
  );
  return (
    <Box position='relative' width={width} height={height}>
      <LazyLoadImage
        alt={image?.name}
        height={height}
        scrollPosition={scrollPosition}
        src={image?.src}
        width={width}
      />
      <Box
        sx={{
          padding: '7px 25px 7px 8px  ',
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: theme.colors.primary[300],
        }}
      >
        <Typography fontSize='15px' fontWeight={400}>{`${format(
          new Date(date),
          'MM.dd'
        )}.${mealValue}`}</Typography>
      </Box>
    </Box>
  );
}

export default MealCard;
