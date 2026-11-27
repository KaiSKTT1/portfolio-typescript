import { createBrowserRouter } from 'react-router-dom';
import { PortfolioLayout } from '../shared/components/layout/PortfolioLayout';
import { HomePage } from '../features/about/pages/HomePage';
import { ProjectsPage } from '../features/projects/pages/ProjectsPage';
import { ProjectDetailPage } from '../features/projects/pages/ProjectDetailPage';
import { ContactPage } from '../features/contact/pages/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:id', element: <ProjectDetailPage /> },
      { path: 'contact', element: <ContactPage /> }
    ],
  },
]);