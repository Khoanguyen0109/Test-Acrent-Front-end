import React from 'react';

import TAppBar from './TAppBar';

function Layout({ children }) {
  return (
    <div>
      <TAppBar />
      {children}
    </div>
  );
}

export default Layout;
