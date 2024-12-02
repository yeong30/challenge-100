import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from './lazyPages';
import ROUTE_PATH from './routPath';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: (
      <Suspense>
        <div />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
]);

export default router;
