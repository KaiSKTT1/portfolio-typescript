import { createBrowserRouter } from 'react-router-dom';
import { PortfolioLayout } from '../shared/components/layout/PortfolioLayout';
import { HomePage } from '../features/about/pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
    children: [{ index: true, element: <HomePage /> }]
  },

]);