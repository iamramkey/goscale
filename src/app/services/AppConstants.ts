import { ISubscription } from 'rxjs/Subscription';

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

export const QUESTION_DETAILS_TOASTER_MESSAGES = {
  FAILED_TO_LOAD_QUESTION: 'No Question found for the question id : ',
  FAILED_TO_LOAD_ANSWERS: 'Unable to Retreive the available answers...'
};

export const QUESTIONS_RESPONSE_KEYS = {
  LIST: 'feed_questions',
  ID: 'Id',
  TEXT: 'Text',
  UP_VOTES: 'upvotes',
  DOWN_VOTES: 'downvotes',
  QUESTION_DOWN_VOTED: 'downVoted',
  QUESTION_UP_VOTED: 'upVoted',
  QUESTION_DOWN_VOTED_BY_YOU: 'You felt that this is not a proper question',
  QUESTION_NOT_PROPER: 'Question is not proper',
  QUESTION_IS_APPROPRIATE: 'This is a valid question and everyone has a question like this',
  QUESTION_UP_VOTED_BY_YOU: 'You felt this question is thought provoking!'
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
  AVATAR: 'Avatar',
  CREATED_BY: 'created_by'
};

export const EMPTY_STRING = '';

export const APP_ROUTING_PATHS = {
  ROOT_PATH: EMPTY_STRING,
  APP_PATH: 'app',
  NOT_FOUND: '**',
  QUESTION_ID: ':id',
  ROOT_PATH_URL: '/'
};

export const NEW_ANSWER_VALIDATION_MESSAGES = {
  REQUIRED: 'Please enter your answer',
  MIN_LENGTH: 'Please enter minimum 10 characters',
  MAX_LENGTH: 'Please consice your answer to maximum of 500 characters'
};

export const VALIDATION_ERROR_TYPES = {
  REQUIRED: 'required',
  MIN_LENGTH: 'minLength',
  MAX_LENGTH: 'maxLength'
};

export const APPLICATION_MAIN_TITLE = 'Questions & Answers';

export function UNSUBSCRIBE(sub: ISubscription) {
  if (sub instanceof Object && sub.unsubscribe instanceof Function) {
    sub.unsubscribe();
  }
}
