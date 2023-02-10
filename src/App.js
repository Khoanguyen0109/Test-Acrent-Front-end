import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from 'routes';
import ProtectedRoute from 'routes/ProtectedRoute';

function App() {
  const privateRoute = [];
  const publicRoute = [];

  routes.forEach((route) => {
    if (!route.public) {
      privateRoute.push(route);
    } else {
      publicRoute.push(route);
    }
  });
  return (
    <Router>
      <Routes>
        {publicRoute.map(({ path, component, ...rest }) => (
          <Route key={path} path={path} element={component} {...rest} />
        ))}
        <Route element={<ProtectedRoute />}>
          {privateRoute.map(({ path, component, ...rest }) => (
            <Route key={path} path={path} element={component} {...rest} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
