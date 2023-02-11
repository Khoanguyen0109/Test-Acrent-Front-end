import React from 'react';

import { Box, Divider, Typography, useTheme } from '@mui/material';

function RecommendItem(props) {
  const theme = useTheme();
  const { label, subLabel, value, onFilter } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 1,
        weight: theme.spacing(27),
        height: theme.spacing(18),
        backgroundColor: theme.colors.dark[600],
        cursor: 'pointer',
      }}
      onClick={() => onFilter(value)}
    >
      <Typography
        fonSize='22px'
        fontWeight={400}
        textAlign='center'
        sx={{ color: theme.colors.primary[300] }}
      >
        {label}
      </Typography>
      <Divider sx={{ my: 1, backgroundColor: 'white' }} width={56} />
      <Typography fontSize='18px' color='white'>
        {subLabel}
      </Typography>
    </Box>
  );
}

export default RecommendItem;
