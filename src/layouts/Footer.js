import React from 'react';

import { Paper, Typography, useTheme } from '@mui/material';

function Footer() {
  const theme = useTheme();
  const items = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱について',
    '特定商取引法に基づく表記',
    'お問い合わせ',
  ];
  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: theme.colors.dark[500],
        height: theme.spacing(16),
        padding: theme.spacing(0, 20),
        borderRadius: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      {items.map((item, index) => (
        <Typography
          sx={{ mr: '45px' }}
          key={index}
          color='white'
          fontSize='16px'
          fontWeight={300}
        >
          {item}
        </Typography>
      ))}
    </Paper>
  );
}

export default Footer;
