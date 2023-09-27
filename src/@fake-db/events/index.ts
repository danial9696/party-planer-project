import { mock } from '../mock';
import EVENT_DATA from './data.mock';

mock.onGet('/events').reply(() => [200, EVENT_DATA]);
