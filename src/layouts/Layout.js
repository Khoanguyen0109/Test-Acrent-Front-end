import React from 'react';

import { Box } from '@mui/system';

import Footer from './Footer';
import TAppBar from './TAppBar';

function Layout({ children }) {
  return (
    <div>
      <TAppBar />
      <Box mb={20}>{children}</Box>
      <Footer />
    </div>
  );
}

export default Layout;
