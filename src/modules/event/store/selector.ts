import { useEventStore } from './store';

// ! Export atomic selectors states to prevent subscribe to unnecessary state data

/**
 * The function `useEventActions` returns the actions from the event store.
 */
export const useEventActions = () => useEventStore(state => state.actions);

/**
 * The function `usePrevEventState` returns the previous state of an event.
 */
export const usePrevEventState = () => useEventStore(state => state.prev);

/**
 * The function `useUpcomingEventState` returns the upcoming event state from the event store.
 */
export const useUpcomingEventState = () => useEventStore(state => state.upcoming);
