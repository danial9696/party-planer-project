import { ApiResponse } from '@lib/types/common';

interface EventModel {
  title: string;
  detail?: string;
  time: string;
  date: string;
}

export interface UpcomingEventModel extends EventModel {
  todo: number;
  done: number;
}

export interface PrevEventModel extends EventModel {}

// * Start - Event - Get
export interface GetEventsParamsModel {
  titleSearch: string | null;
  pageNumber: number | null;
  pageSize: number | null;
  skipCount: number | null;
  needTotalCount: boolean;
  sortBy: string | null;
  sortAscending: boolean | null;
}

export interface GetEventsResponseModel {
  result: EventModel[];
}

export interface GetEventsApiResponseModel extends ApiResponse<GetEventsResponseModel> {}
// * End - Event - Get

// * Start - Event - Create
export interface CreateEventModel {
  title: string;
}

export interface CreateEventsApiResponseModel extends ApiResponse<{ id: number }> {}
// * End - Event - Create

// * Start - Event - Edit
export interface EditEventModel extends CreateEventModel {
  id: number;
}

export interface EditEventApiResponseModel extends ApiResponse<{ id: number }> {}
// * End - Event - Edit

// * Start - Event - Delete
export interface DeleteEventsModel {
  id: number;
}

export interface DeleteEventsApiResponseModel extends ApiResponse<{ id: number }> {}
// * End - Event - Delete

// * Start - Event detail - Get

export interface GetEventDetailModel {
  id: number;
}

// * Start - Event detail - Get
