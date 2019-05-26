import { propertyMap } from '../../functions/property-mapper';
import { IAnswer } from './app-content.model';

export class AnswerModel implements IAnswer {
  public Id;
  @propertyMap('Question-Id')
  public questionId;
  public 'Question-Id';
  public Answer;
  public upvotes;
  public downvotes;
  public created_at;
  public created_by;

  constructor(){
    this["Question-Id"]
  }
}
