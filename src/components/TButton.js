import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const TButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary['gradient-300-400'],
  
  padding: (1.75, 0.5, 2, 0.5),
}));
