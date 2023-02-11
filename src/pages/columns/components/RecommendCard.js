import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Box, Typography, useTheme } from '@mui/material';

import { format } from 'date-fns';

function RecommendCard(props) {
  const theme = useTheme();
  const { image, date, title, tags } = props;

  return (
    <Box>
      <Box mb={1} position='relative' width={234} height={144}>
        <LazyLoadImage alt={title} height={144} width={234} src={image.src} />
        <Box
          sx={{
            padding: '7px 25px 7px 8px  ',
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: theme.colors.primary[300],
          }}
        >
          <Typography fontSize='15px' fontWeight={400}>{`${format(
            new Date(date),
            'yyyy.MM.dd hh:mm'
          )}`}</Typography>
        </Box>
      </Box>
      <Typography
        className='text-ellipsis-2row'
        fontSize='15px'
        fontWeight={300}
        component='div'
        sx={{ mb: 1, width: '234px', height: theme.spacing(5.75) }}
      >
        {title}
      </Typography>
      <Box height={theme.spacing(2.75)}>
        {tags.map((tag) => (
          <Typography
            sx={{ mr: 1, color: theme.colors.primary[400] }}
            fontSize='12px'
            fontWeight={300}
          >
            #{tag}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default RecommendCard;
