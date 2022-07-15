import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import appRoutes from 'constants/routes';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route) => {
          return <Route path={route.path} element={<route.component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
