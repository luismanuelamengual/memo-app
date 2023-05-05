import { Path } from 'models';
import { Router } from 'router';

export function goToHomePage() {
  Router.navigate(Path.HOME);
}

export function goToMemoPage() {
  Router.navigate(Path.MEMO);
}

export function goToMemoResultPage() {
  Router.navigate(Path.MEMO_RESULT);
}