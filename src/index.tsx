import { Path } from 'models';
import { GameRoomPage, HomePage } from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.scss';

const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <HomePage />,
  },
  {
    path: Path.GAME_ROOM,
    element: <GameRoomPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
