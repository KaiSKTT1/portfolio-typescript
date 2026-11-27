import { createBrowserRouter } from 'react-router-dom';
import { PortfolioLayout } from '../shared/components/layout/PortfolioLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
  },
]);