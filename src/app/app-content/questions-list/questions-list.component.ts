/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:21:35
 * @modify date 2019-05-26 18:21:35
 * @desc [This Component will list all the questions available from the JSON feed]
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/observable/from';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { QUESTIONS_RESPONSE_KEYS } from '../../services/AppConstants';
import { ObjectUtils } from '../../services/object-utils.service';
import { AppContent, IQuestion, IQuestionResponse } from '../shared/app-content.model';
import { AppContentService } from '../shared/app-content.service';
import { APP_ROUTING_PATHS } from './../../services/AppConstants';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.sass']
})
export class QuestionsListComponent implements OnInit {
  public questionsResponse$: Observable<IQuestionResponse>;
  private _questionsResponse: IQuestionResponse;
  private set questionsResponse(val: IQuestionResponse) {
    if (val instanceof Object) {
      const questionsList = ObjectUtils.deepFind(val, QUESTIONS_RESPONSE_KEYS.LIST);
      this._questionsResponse = val;
      this.appContent.questionsList = questionsList instanceof Array ? questionsList : [];
    } else {
      this.appContent.questionsList = [];
    }
  }
  public QUESTIONS_RESPONSE_KEYS = QUESTIONS_RESPONSE_KEYS;

  constructor(private appContentService: AppContentService, private appContent: AppContent, private router: Router) {}

  public ngOnInit() {
    if (this.appContent.questionsList.length === 0) {
      this.questionsResponse$ = this.appContentService
        .loadQuestions()
        .pipe(map((res: IQuestionResponse) => (this.questionsResponse = res)));
    } else {
      this.loadQuestionsFromModel();
    }
  }

  public loadQuestionsFromModel() {
    const questionsResponse = ({} as any) as IQuestionResponse;
    ObjectUtils.setToValue(questionsResponse, this.appContent.questionsList, QUESTIONS_RESPONSE_KEYS.LIST);
    this.questionsResponse$ = new BehaviorSubject(questionsResponse);
  }

  public copyQuestionAndUpdateModel(question: IQuestion) {
    const index = this.appContent.questionsList.findIndex(i => i === question);
    if (index > -1) {
      this.appContent.questionsList[index] = ObjectUtils.copy(question);
      this.loadQuestionsFromModel();
    }
  }

  public upVote(question: IQuestion) {
    // this function updates the questions upvotes and this is toggleable for a single user
    if (question.upVoted) {
      question.upvotes = (+(question.upvotes || 0) - 1).toString();
      question.upVoted = false;
      this.copyQuestionAndUpdateModel(question);
      return;
    }
    if (question.downVoted) {
      question.downvotes = (+(question.downvotes || 0) - 1).toString();
      question.downVoted = false;
    }
    question.upvotes = (+(question.upvotes || 0) + 1).toString();
    question.upVoted = true;
    this.copyQuestionAndUpdateModel(question);
  }

  public downVote(question: IQuestion) {
    // this function updates the downvotes and check also this is toggleable for a single user
    if (question.downVoted) {
      question.downvotes = (+(question.downvotes || 0) - 1).toString();
      question.downVoted = false;
      this.copyQuestionAndUpdateModel(question);
      return;
    }
    if (question.upVoted) {
      question.upvotes = (+(question.upvotes || 0) - 1).toString();
      question.upVoted = false;
    }
    question.downvotes = (+(question.downvotes || 0) + 1).toString();
    question.downVoted = true;
    this.copyQuestionAndUpdateModel(question);
  }

  public showDetails(question: IQuestion) {
    // this function helps the user to show the details of the question he is interested in by taking question object
    this.router.navigate([
      APP_ROUTING_PATHS.ROOT_PATH + APP_ROUTING_PATHS.APP_PATH,
      ObjectUtils.deepFind(question, QUESTIONS_RESPONSE_KEYS.ID)
    ]);
  }
}
