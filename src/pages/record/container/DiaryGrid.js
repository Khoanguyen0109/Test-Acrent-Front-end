import React, { useEffect, useState } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import TButton from 'components/TButton';

import axios from 'axios';

import Diary from '../components/Diary';

function DiaryGrid() {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const fullData = data.length === total;

  const fetchHistory = async (page) => {
    try {
      const api = `${process.env.REACT_APP_API_ENDPOINT}/diaries`;

      const res = await axios.get(api, {
        params: {
          page,
        },
      });
      const { totalDiary, diaries } = res.data;
      setTotal(totalDiary);
      return diaries;
    } catch (error) {}
  };
  const onChangeMore = async () => {
    const moreIndex = page + 1;
    const data = await fetchHistory(moreIndex);
    if (data.length > 0) {
      setPage(moreIndex);
      setData((old) => [...old, ...data]);
    }
  };
  const onInitDiary = async () => {
    const data = await fetchHistory(1);
    setData(data);
  };

  useEffect(() => {
    onInitDiary();
  }, []);

  return (
    <Box>
      <Typography fontSize='22px' fontWeight='400' sx={{ mr: 2 }}>
        My Diary
      </Typography>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid key={item.title} item xs={4} md={3} lg={2}>
            <Diary
              dateTime={item.dateTime}
              title={item.title}
              content={item.content}
            />
          </Grid>
        ))}
      </Grid>
      {!fullData && (
        <Box width='100%' mt={2.5} display='flex' justifyContent='center'>
          <TButton onClick={onChangeMore}>記録をもっと見る</TButton>
        </Box>
      )}
    </Box>
  );
}

export default DiaryGrid;
