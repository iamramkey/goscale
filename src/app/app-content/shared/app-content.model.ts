/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:29:00
 * @modify date 2019-05-26 18:29:00
 * @desc [This is the model file for the application, In this file we will find all the typed interfaces,
 *  and application level data like questions list, answers list, user answered questions]
 */
export interface IQuestionResponse {
  feed_questions: IQuestion[];
}

export interface IQuestion {
  Id: string;
  Text: string;
  upvotes?: string;
  downvotes?: string;
  upVoted?: boolean;
  downVoted?: boolean;
}

export interface IAnswersResponse {
  feed_answers: IAnswer[];
}

export interface IAnswer {
  Id: string;
  'Question-Id': string;
  Answer: string;
  upvotes?: string;
  downvotes?: string;
  created_at: string;
  created_by?: IAnswerCreatedby | string;
}

export interface IAnswerCreatedby {
  Id: string;
  Name: string;
  Surname: string;
  Avatar?: any;
}
export class AppContent {
  public questionsList: IQuestion[] = [];
  public answersMap = new Map<string, Set<IAnswer>>();
  public answersList: IAnswer[] = [];
}
