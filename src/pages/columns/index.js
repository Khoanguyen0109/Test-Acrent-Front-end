import { RECOMMEND } from 'constants';

import React, { useEffect, useState } from 'react';

import { Box, Grid, useTheme } from '@mui/material';

import TButton from 'components/TButton';

import axios from 'axios';

import RecommendCard from './components/RecommendCard';
import RecommendItem from './components/RecommendItem';

function Columns() {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState();
  const [data, setData] = useState([]);
  const fullData = data.length === total;
  const fetchRecommend = async (type, page) => {
    try {
      const api = `${process.env.REACT_APP_API_ENDPOINT}/recommends`;

      const res = await axios.get(api, {
        params: {
          category,
          page,
        },
      });
      const { totalRecommend, recommends } = res.data;
      setTotal(totalRecommend);
      return recommends;
    } catch (error) {}
  };
  const onFetchByCategory = async (value) => {
    setCategory(value);
    setPage(1);
    const data = await fetchRecommend(value, page);
    setData(data);
  };
  const onChangeMore = async () => {
    const moreIndex = page + 1;
    const data = await fetchRecommend(category, moreIndex);
    if (data.length > 0) {
      setPage(moreIndex);
      setData((old) => [...old, ...data]);
    }
  };
  const items = [
    {
      label: 'RECOMMENDED COLUMN',
      subLabel: 'オススメ',
      value: RECOMMEND.COLUMN,
    },
    {
      label: 'RECOMMENDED DIET',
      subLabel: 'ダイエット',
      value: RECOMMEND.DIET,
    },
    {
      label: 'RECOMMENDED BEAUTY',
      subLabel: '美容',
      value: RECOMMEND.BEAUTY,
    },
    {
      label: 'RECOMMENDED HEALTH',
      subLabel: '健康',
      value: RECOMMEND.HEALTH,
    },
  ];
  useEffect(() => {
    onFetchByCategory();
  }, []);

  return (
    <Box
      sx={{
        mt: 7,
        padding: theme.spacing(0, 20),
      }}
    >
      <Box display='flex' justifyContent='space-between'>
        {items.map((item) => (
          <RecommendItem
            label={item.label}
            subLabel={item.subLabel}
            value={item.value}
            onFilter={onFetchByCategory}
          />
        ))}
      </Box>
      <Grid mt={7} container spacing={2}>
        {data.map((item) => (
          <Grid key={item.title} item xs={4} md={3} lg={2}>
            <RecommendCard
              date={item.date}
              image={item.image}
              title={item.title}
              tags={item.tags}
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

export default Columns;
