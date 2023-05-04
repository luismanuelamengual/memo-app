import { Path } from 'models';
import { HomePage, MemoPage } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <HomePage />,
  },
  {
    path: Path.MEMO,
    element: <MemoPage />
  }
]);