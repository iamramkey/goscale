/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:56
 * @modify date 2019-05-25 15:29:56
 * @desc This file contains all the application level constants
 */
export const TOASTER_MESSAGE_TYPES = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  INFO: 'info'
};

export const QUESTIONS_RESPONSE_KEYS = {
  LIST: 'feed_questions',
  ID: 'Id',
  TEXT: 'Text',
  UP_VOTES: 'upvotes',
  DOWN_VOTES: 'downvotes'
};

export const ANSWER_RESPONSE_KEYS = {
  LIST: 'feed_answers',
  ID: 'Id',
  QUESTION_ID: 'Question-Id',
  ANSWER: 'Answer',
  UPVOTES: 'upvotes',
  DOWNVOTES: 'downvotes',
  CREATED_AT: 'created_at',
  NAME: 'Name',
  SURNAME: 'Surname',
  AVATAR: 'Avatar'
};

export const EMPTY_STRING = '';

export const APP_ROUTING_PATHS = {
  ROOT_PATH: EMPTY_STRING,
  APP_PATH: 'app',
  NOT_FOUND: '**',
  QUESTION_ID: ':id'
};

export const APPLICATION_MAIN_TITLE = 'Questions & Answers';
