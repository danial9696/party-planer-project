import { create } from 'zustand';
import EventCreatorStoreModel from './types';
import { EVENT_CREATOR_CONFIG } from '../config';

export const useEventCreatorStore = create<EventCreatorStoreModel>(set => ({
  model: EVENT_CREATOR_CONFIG,
}));
