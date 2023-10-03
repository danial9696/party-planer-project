import { create } from 'zustand';
import EventStoreModel from './types';

/* The code is creating a custom hook called `useEventStore` using the `create` function from the
`zustand` library. */
export const useEventStore = create<EventStoreModel>(set => ({
  prev: [],
  upcoming: [],
  actions: {
    setUpcoming: data => set({ upcoming: data }),
    setPrev: data => set({ prev: data }),
  },
}));
