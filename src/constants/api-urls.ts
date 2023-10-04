// ! Define all URLs here

// ! Start - Events

// * Start - Prefix
const modulePrefix = '/api/v1';
// * End - Prefix

// * Start - URLs
const EVENTS_URL = 'Event';
// * End - URLs

// * Start - Questions endpoints
export const QuestionsURL = {
  get: `${modulePrefix}/${EVENTS_URL}`,
  post: `${modulePrefix}/${EVENTS_URL}`,
  put: `${modulePrefix}/${EVENTS_URL}`,
  getById: (id: number) => `${modulePrefix}/${EVENTS_URL}/${id}`,
  delete: (id: number) => `${modulePrefix}/${EVENTS_URL}/${id}`,
};
// * End - Questions endpoints

// ! End - Events
