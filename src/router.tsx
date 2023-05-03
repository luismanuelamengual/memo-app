import { Path } from 'models';
import { GameRoomPage, HomePage } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

export const Router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <HomePage />,
  },
  {
    path: Path.GAME_ROOM,
    element: <GameRoomPage />
  }
]);