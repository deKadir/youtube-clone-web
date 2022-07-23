import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import appRoutes from 'constants/routes';
import requests from 'constants/api';
import { resetUser, setUserInfo } from 'redux/actions/user';

export default function Pages() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user?.token);
  const auth = !!token;

  const getProfile = async () => {
    try {
      const { data } = await requests.channel.getProfile();
      if (data.success) {
        dispatch(setUserInfo({ info: data.channel }));
      } else {
        dispatch(resetUser());
      }
    } catch (error) {
      dispatch(resetUser());
    }
  };
  useEffect(() => {
    if (token) {
      getProfile();
    }
  }, [token]);
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map((route, key) => {
          return (
            <Route
              path={route.path}
              element={
                route.protected && !auth ? (
                  <Navigate to={'/'} />
                ) : (
                  <route.component />
                )
              }
              key={key}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
