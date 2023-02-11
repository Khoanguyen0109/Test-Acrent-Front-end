import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

import { format } from 'date-fns';

function Diary(props) {
  const theme = useTheme();
  const { dateTime, title, content } = props;
  return (
    <Box p={2} border={`2px solid ${theme.colors.gray[400]}`}>
      <Typography component='div' fontSize='18px' fontWeight={400}>
        {format(new Date(dateTime), 'yyyy.MM.dd')}
      </Typography>
      <Typography
        component='div'
        fontSize='18px'
        fontWeight={400}
        sx={{ width: theme.spacing(18.5), mb: 1 }}
      >
        {format(new Date(dateTime), 'hh:mm')}
      </Typography>
      <Typography
        className='text-ellipsis-2row'
        component='div'
        fontSize='12px'
        fontWeight={300}
      >
        {title}
      </Typography>
      <Typography
        className='text-ellipsis-5row'
        fontSize='12px'
        fontWeight={300}
      >
        {content}
      </Typography>
    </Box>
  );
}

export default Diary;
