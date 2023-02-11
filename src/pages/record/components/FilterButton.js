import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

function FilterButton(props) {
  const theme = useTheme();
  const { label, isActive } = props;
  return (
    <Box
      sx={{
        width: theme.spacing(7),
        height: theme.spacing(3),
        backgroundColor: isActive ? theme.colors.primary[300] : 'white',
        color: !isActive ? theme.colors.primary[300] : 'white',
        textAlign: 'center',
        borderRadius: '11px',
        mr: 2,
      }}
    >
      <Typography>{label}</Typography>
    </Box>
  );
}

export default FilterButton;
