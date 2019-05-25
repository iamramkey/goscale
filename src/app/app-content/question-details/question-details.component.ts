import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { ISubscription } from 'rxjs/Subscription';
import { ANSWER_RESPONSE_KEYS, TOASTER_MESSAGE_TYPES } from '../../services/AppConstants';
import { ObjectUtils } from '../../services/object-utils.service';
import { AppContent, IAnswer, IAnswersResponse, IQuestion } from '../shared/app-content.model';
import { AppLoaderService } from './../../services/app-loader.service';
import { AppToasterService } from './../../services/app-toaster.service';
import { QUESTIONS_RESPONSE_KEYS } from './../../services/AppConstants';
import { AppContentService } from './../shared/app-content.service';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.sass']
})
export class QuestionDetailsComponent implements OnInit, OnDestroy {
  private routeParamsSubscription: ISubscription;
  private selectedQuestionId: string;
  public question: IQuestion;
  public answersList$: Observable<IAnswer[]>;
  constructor(
    private appContent: AppContent,
    private route: ActivatedRoute,
    private appContentService: AppContentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeParamsSubscription = this.route.params.subscribe(params => {
      this.selectedQuestionId = params['id'];
      if (this.appContent.questionsList.length > 0) {
        this.updateQuestionByQuestionId();
        this.loadAnswers();
      } else {
        this.appContentService.loadQuestions().subscribe(res => {
          if (res instanceof Object) {
            const questions = ObjectUtils.deepFind(res, QUESTIONS_RESPONSE_KEYS.LIST);
            if (questions instanceof Array && questions.length > 0) {
              this.appContent.questionsList = questions;
              this.updateQuestionByQuestionId();
              this.loadAnswers();
            }
          }

          return res;
        });
      }
    });
  }

  public loadAnswers() {
    if (this.appContent.answersList instanceof Array && this.appContent.answersList.length > 0) {
      this.answersList$ = Observable.from(this.appContent.answersMap.get(this.selectedQuestionId)).pipe(
        map(res => {
          const response = (res as any) as IAnswer[];
          return response;
        })
      );
    } else {
      this.appContentService.loadAnswers().subscribe((res: IAnswersResponse) => {
        if (res instanceof Object) {
          const answersList = ObjectUtils.deepFind(res, ANSWER_RESPONSE_KEYS.LIST);
          this.appContent.answersList = answersList;
          if (answersList instanceof Array && answersList.length > 0) {
            answersList.forEach(a => {
              const questionId = ObjectUtils.deepFind(a, ANSWER_RESPONSE_KEYS.QUESTION_ID);
              if (!this.appContent.answersMap.has(questionId)) {
                this.appContent.answersMap.set(questionId, []);
              }
              this.appContent.answersMap.get(questionId).push(a);
            });
          }
          this.appContent.questionsList.forEach(i => {
            if (!this.appContent.answersMap.has(ObjectUtils.deepFind(i, QUESTIONS_RESPONSE_KEYS.ID))) {
              this.appContent.answersMap.set(ObjectUtils.deepFind(i, QUESTIONS_RESPONSE_KEYS.ID), []);
            }
          });
          this.answersList$ = Observable.from(this.appContent.answersMap.get(this.selectedQuestionId)).pipe(
            map(response => {
              const answers = (response as any) as IAnswer[];
              return answers;
            })
          );
        }

        return res;
      });
    }
  }

  public updateQuestionByQuestionId() {
    this.question = this.appContent.questionsList.find(
      e => ObjectUtils.deepFind(e, QUESTIONS_RESPONSE_KEYS.ID) === this.selectedQuestionId
    );
    if (!(this.question instanceof Object)) {
      AppToasterService.populateToaster(
        TOASTER_MESSAGE_TYPES.WARNING,
        'No Question found for the question id : ' + this.selectedQuestionId
      );
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
  }
}
