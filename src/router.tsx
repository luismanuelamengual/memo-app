import { Path } from 'models';
import { HomePage, MemoPage, MemoResultPage } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <HomePage />,
  },
  {
    path: Path.MEMO,
    element: <MemoPage />
  },
  {
    path: Path.MEMO_RESULT,
    element: <MemoResultPage />
  }
], {
  basename: process.env.PUBLIC_URL
});