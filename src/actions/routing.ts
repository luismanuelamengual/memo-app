import { Path } from 'models';
import { Router } from 'router';

export function goToHome() {
  Router.navigate(Path.HOME);
}

export function goToMemo() {
  Router.navigate(Path.MEMO);
}

export function goToMemoResult() {
  Router.navigate(Path.MEMO_RESULT);
}