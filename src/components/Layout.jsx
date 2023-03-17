import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<h1>Loading</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
