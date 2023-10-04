import {
  CreateEventModel,
  CreateEventsApiResponseModel,
  EditEventApiResponseModel,
  EditEventModel,
  GetEventsApiResponseModel,
} from '@modules/event/types';
import { NextApiHandler } from 'next/types';
import service from 'src/api';
import apiHandler from 'src/api/next-api';
import { QuestionsURL } from 'src/constants/api-urls';

// ! This is a sample of nextJS APIs

/**
 * The function `getEvents` is an API handler that retrieves events based on the provided query
 * parameters and returns the response or an error message.
 * @param req - The `req` parameter represents the HTTP request object, which contains information
 * about the incoming request such as headers, query parameters, and request body.
 * @param res - The `res` parameter is the response object that is used to send the HTTP response back
 * to the client. It contains methods and properties for setting the response status, headers, and
 * body. In this code snippet, it is used to send the response with a status of 200 and the JSON data
 */
const getEvents: NextApiHandler<GetEventsApiResponseModel | { message: string }> = async (
  req,
  res,
) => {
  const { query } = req;

  try {
    const response = await service.get<GetEventsApiResponseModel>(QuestionsURL.get, {
      params: query,
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
    throw new Error(error.message);
  }
};

/**
 * The function `createEvent` is an asynchronous Next.js API handler that receives a request and
 * response object, sends a POST request to a specified URL with the request body, and returns the
 * response or throws an error.
 * @param req - The `req` parameter represents the HTTP request object, which contains information
 * about the incoming request such as headers, query parameters, and the request body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties for setting the response status, headers, and body.
 * In this code, `res.status(200).json(response)` is used to set the response status to 200
 */
const createEvent: NextApiHandler<CreateEventsApiResponseModel | { message: string }> = async (
  req,
  res,
) => {
  const data = req.body as CreateEventModel;

  try {
    const response = await service.post<CreateEventsApiResponseModel>(QuestionsURL.post, data);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
    throw new Error(error.message);
  }
};

/**
 * The `editEvent` function is an API handler that receives a request to edit an event, sends a PUT
 * request to a service endpoint with the updated event data, and returns the response or an error
 * message.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as headers, query parameters, and the request body.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It contains methods and properties for setting the response status, headers, and body.
 * In this code, it is used to send the response with a status code of 200 and the JSON response body
 */
const editEvent: NextApiHandler<EditEventApiResponseModel | { message: string }> = async (
  req,
  res,
) => {
  const data = req.body as EditEventModel;
  const { id } = req.query as Partial<{ id: number }>;

  try {
    const response = await service.put<EditEventApiResponseModel>(QuestionsURL.put, data, {
      params: {
        id,
      },
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json(error.message);
    throw new Error(error.message);
  }
};

// * By using this apiHandler we can write clear nextJS apis restful like api calls
export default apiHandler({
  GET: getEvents,
  POST: createEvent,
  PUT: editEvent,
});
