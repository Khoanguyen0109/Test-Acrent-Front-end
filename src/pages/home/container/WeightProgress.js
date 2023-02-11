import React from 'react';

import { makeStyles } from 'tss-react/mui';

const { Box, CircularProgress, Typography } = require('@mui/material');
function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress
        sx={{ color: 'white' }}
        thickness={0.7}
        size={181}
        variant='determinate'
        value={80}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            mt: 2,
            mr: 0.5,
          }}
          color='white'
          fontSize='18px'
          fontWeight='400'
          component='div'
        >
          {`${Math.round(props.value)}%`}
        </Typography>
        <Typography
          color='white'
          fontSize='25px'
          fontWeight='400'
          component='div'
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles()((theme) => ({
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));
function WeightProgress() {
  const { classes } = useStyles();
  const api = `${process.env.REACT_APP_API_ENDPOINT}/weight`;

  return (
    <Box position='relative' width='100%' height='100%'>
      <img
        className={classes.img}
        src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
      />
      <CircularProgressWithLabel />
    </Box>
  );
}

export default WeightProgress;
