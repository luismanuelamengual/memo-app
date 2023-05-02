import { User } from 'models';
import { useStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createStore } from 'zustand/vanilla';

type State = {
  user?: User;
}

type Actions = {
  setUser: (user: User) => void
}

export const SessionStore = createStore(immer<State & Actions>((set) => ({
  user: undefined,

  setUser(user) {
    set((state: State) => {
      state.user = user;
    });
  }
})));

export const useSessionStore = (selector: (state: State & Actions) => unknown) => useStore(SessionStore, selector);
