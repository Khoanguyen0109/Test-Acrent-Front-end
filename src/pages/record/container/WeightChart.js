import { TIME } from 'constants';

import React, { useState } from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import TChart from 'components/TChart';

import { format } from 'date-fns';

import FilterButton from '../components/FilterButton';

function WeightChart() {
  const theme = useTheme();
  const [filter, setFilter] = useState('day');

  const date = format(new Date(), 'yyyy.MM.dd');
  const onFilter = () => {};
  const filterButtons = [
    { label: '日', value: TIME.DAY },
    { label: '週', value: TIME.WEEK },
    { label: '月', value: TIME.MONTH },
    { label: '年', value: TIME.YEAR },
  ];
  return (
    <Box
      sx={{
        mt: 7,

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
          Body Record
        </Typography>
        <Typography color='white' fontSize='22px' fontWeight='400'>
          {date}
        </Typography>
      </Box>
      <Box>
        <TChart />
      </Box>
      <Box display='flex' mt={1}>
        {filterButtons.map((btn) => (
          <FilterButton
            key={btn.value}
            label={btn.label}
            value={btn.value}
            isActive={filter === btn.value}
          />
        ))}
      </Box>
    </Box>
  );
}

export default WeightChart;
