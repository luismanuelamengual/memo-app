import { Path } from 'models';
import { Router } from 'router';

export function goToHome() {
  Router.navigate(Path.HOME);
}

export function goToGameRoom() {
  Router.navigate(Path.MEMO);
}