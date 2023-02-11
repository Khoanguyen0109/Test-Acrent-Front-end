import { MEAL } from 'constants';

import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import TButton from 'components/TButton';
import MealButton from 'pages/home/components/MealButton';

import { ReactComponent as IcnCup } from 'assets/icons/icon_cup.svg';
import { ReactComponent as IcnKnife } from 'assets/icons/icon_knife.svg';
import axios from 'axios';

import MealCardList from '../components/MealCardList';

function MealHistory() {
  const [page, setPage] = useState(1);
  const [type, setType] = useState();
  const [history, setHistory] = useState([]);
  const [totalMeal, setTotalMeal] = useState(0);

  const fetchHistory = async (type, page) => {
    try {
      const api = `${process.env.REACT_APP_API_ENDPOINT}/meals`;

      const res = await axios.get(api, {
        params: {
          type,
          page,
        },
      });
      const { totalMeal, meals } = res.data;
      setTotalMeal(totalMeal);
      return meals;
    } catch (error) {}
  };

  const fetchMealByType = async (value) => {
    setType(value);
    setPage(1);
    const data = await fetchHistory(value, page);
    setHistory(data);
  };

  const onChangeMore = async () => {
    const moreIndex = page + 1;
    const data = await fetchHistory(type, moreIndex);
    if (data.length > 0) {
      setPage(moreIndex);
      setHistory((old) => [...old, ...data]);
    }
  };

  const meals = [
    {
      icon: <IcnKnife />,
      label: 'Morning',
      value: MEAL.MORNING,
    },
    {
      icon: <IcnKnife />,
      label: 'Lunch',
      value: MEAL.LUNCH,
    },
    {
      icon: <IcnKnife />,
      label: 'Dinner',
      value: MEAL.DINNER,
    },
    {
      icon: <IcnCup />,
      label: 'Snack',
      value: MEAL.SNACK,
    },
  ];
  useEffect(() => {
    fetchMealByType();
  }, []);

  const fullData = history.length === totalMeal;

  return (
    <Box>
      <Box
        px={2}
        display='flex'
        justifyContent='space-around'
        alignItems='center'
      >
        {meals.map((item) => (
          <MealButton
            key={item.value}
            icon={item.icon}
            label={item.label}
            onClick={() => {
              fetchMealByType(item.value);
            }}
          />
        ))}
      </Box>
      <Box mt={2}>
        <MealCardList history={history} />
      </Box>
      {!fullData && (
        <Box width='100%' mt={2.5} display='flex' justifyContent='center'>
          <TButton onClick={onChangeMore}>記録をもっと見る</TButton>
        </Box>
      )}
    </Box>
  );
}

export default MealHistory;
