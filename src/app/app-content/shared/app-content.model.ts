export interface IQuestionResponse {
  feed_questions: IQuestion[];
}

export interface IQuestion {
  Id: string;
  Text: string;
  upvotes?: string;
  downvotes?: string;
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
  created_by?: Createdby | string;
}

export interface Createdby {
  Id: string;
  Name: string;
  Surname: string;
  Avatar?: any;
}
export class AppContent {
  public questionsList: IQuestion[] = [];
  public answersMap = new Map<string, IAnswer[]>();
  public answersList: IAnswer[] = [];
}
