import React, { useRef } from 'react';

import { Box, useTheme } from '@mui/material';

import img1 from 'assets/images/record_1.jpg';
import img2 from 'assets/images/record_2.jpg';
import img3 from 'assets/images/record_3.jpg';

import RecordItem from './components/RecordItem';
import DiaryGrid from './container/DiaryGrid';
import ExerciseGrid from './container/ExerciseGrid';
import WeightChart from './container/WeightChart';

function Record() {
  const theme = useTheme();
  const chartRef = useRef();
  const exerciseRef = useRef();
  const diaryRef = useRef();
  const recordItems = [
    {
      label: 'BODY RECORD',
      subLabel: '自分のカラダの記録F',
      image: img1,
      refScroll: chartRef,
    },
    {
      label: 'MY EXERCISE',
      subLabel: '自分の運動の記録',
      image: img2,
      refScroll: exerciseRef,
    },
    {
      label: 'MY DIARY',
      subLabel: '自分の日記',
      image: img3,
      refScroll: diaryRef,
    },
  ];

  return (
    <Box sx={{ padding: theme.spacing(0, 20), mt: 7 }}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        {recordItems.map((item, index) => (
          <RecordItem
            refScroll={item.refScroll}
            key={index}
            label={item.label}
            subLabel={item.subLabel}
            image={item.image}
          />
        ))}
      </Box>
      <Box ref={chartRef} mt={7}>
        <WeightChart />
      </Box>
      <Box ref={exerciseRef} mt={7}>
        <ExerciseGrid />
      </Box>
      <Box ref={diaryRef} mt={7}>
        <DiaryGrid />
      </Box>
    </Box>
  );
}

export default Record;
