import { IQuestion } from './app-content.model';

export class QuestionModel implements IQuestion {
  public Id;
  public Text;
  public upvotes;
  public downvotes;
  public upVoted;
  public downVoted;
}
