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
      const questionsResponse = ({} as any) as IQuestionResponse;
      ObjectUtils.setToValue(questionsResponse, this.appContent.questionsList, QUESTIONS_RESPONSE_KEYS.LIST);
      this.questionsResponse$ = new BehaviorSubject(questionsResponse);
    }
  }

  public upVote(question: IQuestion) {
    // this function updates the questions upvotes and this is toggleable for a single user
  }

  public downVote(question: IQuestion) {
    // this function updates the downvotes and check also this is toggleable for a single user
  }

  public showDetails(question: IQuestion) {
    // this function helps the user to show the details of the question he is interested in by taking question object
    this.router.navigate(['/', ObjectUtils.deepFind(question, QUESTIONS_RESPONSE_KEYS.ID)]);
  }
}
