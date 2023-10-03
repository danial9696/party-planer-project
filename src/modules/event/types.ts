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
