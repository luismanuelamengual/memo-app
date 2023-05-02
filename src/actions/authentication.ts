import { signIn, signOut } from 'next-auth/react';

export function logIn() {
  signIn();
}

export function logOut() {
  signOut();
}