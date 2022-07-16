import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import appRoutes from 'constants/routes';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route, key) => {
          return (
            <Route path={route.path} element={<route.component />} key={key} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
