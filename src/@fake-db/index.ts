import { mock } from './mock';

// * Start - Events

import './events';
import './events/creator';

// * End - Events

mock.onAny().passThrough();
