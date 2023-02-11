import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

function RecordItem(props) {
  const { image, label, subLabel, refScroll } = props;
  const theme = useTheme();
  const executeScroll = () =>
    refScroll.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
        width: theme.spacing(36),
        height: theme.spacing(36),
        backgroundColor: theme.colors.primary[300],
        cursor: 'pointer',
      }}
      onClick={executeScroll}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: theme.spacing(30),
          height: theme.spacing(30),
          backgroundImage: `url(${image})`,
          filter: 'brightness(30%)',
          backgroundSize: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <Typography
          component='div'
          fontSize='25px'
          fontWeight='400'
          color={theme.colors.primary[300]}
        >
          {label}
        </Typography>
        <Typography
          component='div'
          sx={{
            width: theme.spacing(20),
            backgroundColor: theme.colors.primary[400],
          }}
        >
          {subLabel}
        </Typography>
      </Box>
    </Box>
  );
}

export default RecordItem;
