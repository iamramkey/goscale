/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:23:44
 * @modify date 2019-05-26 18:23:44
 * @desc [This is a route component and this will show the detais of the question you selected in questions list component]
 */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/observable/from';
import { ISubscription } from 'rxjs/Subscription';
import {
  ANSWER_RESPONSE_KEYS,
  APP_ROUTING_PATHS,
  NEW_ANSWER_VALIDATION_MESSAGES,
  QUESTION_DETAILS_TOASTER_MESSAGES,
  QUESTIONS_RESPONSE_KEYS,
  TOASTER_MESSAGE_TYPES,
  UNSUBSCRIBE,
  VALIDATION_ERROR_TYPES
} from '../../services/AppConstants';
import { ObjectUtils } from '../../services/object-utils.service';
import { AppContent, IAnswer, IAnswersResponse, IQuestion } from '../shared/app-content.model';
import { AppLoaderService } from './../../services/app-loader.service';
import { AppToasterService } from './../../services/app-toaster.service';
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
  public answersList: IAnswer[];
  public answersListSubscription: ISubscription;
  public answersListLoading = true;
  public newAnswerSubscription: ISubscription;
  public newAnswerControl: FormControl = new FormControl();
  public newAnswerErrors: string[] = [];
  public QUESTIONS_RESPONSE_KEYS = QUESTIONS_RESPONSE_KEYS;
  public ANSWER_RESPONSE_KEYS = ANSWER_RESPONSE_KEYS;
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
      } else {
        this.appContentService.loadQuestions().subscribe(
          res => {
            if (res instanceof Object) {
              const questions = ObjectUtils.deepFind(res, QUESTIONS_RESPONSE_KEYS.LIST);
              if (questions instanceof Array && questions.length > 0) {
                this.appContent.questionsList = questions;
                this.updateQuestionByQuestionId();
              }
            }
            return res;
          },
          err => {
            this.appContent.questionsList = [];
            AppToasterService.populateToaster(
              TOASTER_MESSAGE_TYPES.ERROR,
              QUESTION_DETAILS_TOASTER_MESSAGES.FAILED_TO_LOAD_ANSWERS
            );
            this.router.navigate([APP_ROUTING_PATHS.ROOT_PATH_URL]);
          }
        );
      }
    });
  }

  public loadAnswers() {
    this.answersListSubscription = this.appContentService.loadAnswers().subscribe(
      (res: IAnswersResponse) => {
        if (res instanceof Object) {
          const answersList: IAnswer[] = ObjectUtils.deepFind(res, ANSWER_RESPONSE_KEYS.LIST);
          let answersForCurrentQuestion = [];
          if (answersList instanceof Array && answersList.length > 0) {
            answersList.forEach(a => {
              const questionId = ObjectUtils.deepFind(a, ANSWER_RESPONSE_KEYS.QUESTION_ID);
              if (questionId === this.selectedQuestionId) {
                answersForCurrentQuestion.push(a);
              }
            });
            const userAnsweredQuestions = this.appContent.answersMap.get(this.selectedQuestionId);
            if (userAnsweredQuestions instanceof Set && userAnsweredQuestions.size > 0) {
              answersForCurrentQuestion = answersForCurrentQuestion.concat(Array.from(userAnsweredQuestions));
            }
          }
          this.answersList = answersForCurrentQuestion;
        }
        this.answersListLoading = false;
        this.createAnswerControl();
      },
      err => {
        this.answersListLoading = false;
        AppToasterService.populateToaster(
          TOASTER_MESSAGE_TYPES.ERROR,
          QUESTION_DETAILS_TOASTER_MESSAGES.FAILED_TO_LOAD_ANSWERS
        );
        this.answersList = [];
        this.createAnswerControl();
      }
    );
  }

  public createAnswerControl() {
    this.newAnswerControl = new FormControl(null, [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
    ]);
    UNSUBSCRIBE(this.newAnswerSubscription);
    this.newAnswerSubscription = this.newAnswerControl.valueChanges.subscribe(this.newAnswerValueChanged.bind(this));
  }

  public newAnswerValueChanged(val) {
    this.showErrorsForNewQuestion(this.newAnswerControl);
    console.log(val);
  }

  public showErrorsForNewQuestion(control: FormControl) {
    this.newAnswerErrors.length = 0;
    if (control.errors instanceof Object) {
      Object.keys(control.errors).forEach(e => {
        switch (e) {
          case VALIDATION_ERROR_TYPES.REQUIRED:
            this.newAnswerErrors.push(NEW_ANSWER_VALIDATION_MESSAGES.REQUIRED);
            break;
          case VALIDATION_ERROR_TYPES.MIN_LENGTH:
            this.newAnswerErrors.push(NEW_ANSWER_VALIDATION_MESSAGES.MIN_LENGTH);
            break;
          case VALIDATION_ERROR_TYPES.MAX_LENGTH:
            this.newAnswerErrors.push(NEW_ANSWER_VALIDATION_MESSAGES.MAX_LENGTH);
            break;
        }
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
        QUESTION_DETAILS_TOASTER_MESSAGES.FAILED_TO_LOAD_QUESTION + this.selectedQuestionId
      );
      this.router.navigate([APP_ROUTING_PATHS.ROOT_PATH_URL]);
    } else {
      this.loadAnswers();
    }
  }

  public copyQuestionAndUpdateModel(question: IQuestion) {
    const index = this.appContent.questionsList.findIndex(i => i === question);
    if (index > -1) {
      return (this.appContent.questionsList[index] = ObjectUtils.copy(question));
    }
    return question;
  }

  public upVote(question: IQuestion) {
    // this function updates the questions upvotes and this is toggleable for a single user
    if (question.upVoted) {
      question.upvotes = (+(question.upvotes || 0) - 1).toString();
      question.upVoted = false;
      this.question = this.copyQuestionAndUpdateModel(question);
      return;
    }
    if (question.downVoted) {
      question.downvotes = (+(question.downvotes || 0) - 1).toString();
      question.downVoted = false;
    }
    question.upvotes = (+(question.upvotes || 0) + 1).toString();
    question.upVoted = true;
    this.question = this.copyQuestionAndUpdateModel(question);
  }

  public downVote(question: IQuestion) {
    // this function updates the downvotes and check also this is toggleable for a single user
    if (question.downVoted) {
      question.downvotes = (+(question.downvotes || 0) - 1).toString();
      question.downVoted = false;
      this.question = this.copyQuestionAndUpdateModel(question);
      return;
    }
    if (question.upVoted) {
      question.upvotes = (+(question.upvotes || 0) - 1).toString();
      question.upVoted = false;
    }
    question.downvotes = (+(question.downvotes || 0) + 1).toString();
    question.downVoted = true;
    this.question = this.copyQuestionAndUpdateModel(question);
  }

  public saveAnswer() {
    if (!this.appContent.answersMap.has(this.selectedQuestionId)) {
      this.appContent.answersMap.set(this.selectedQuestionId, new Set());
    }
    const answersList = this.appContent.answersMap.get(this.selectedQuestionId);
    const answerObject: IAnswer = ({} as any) as IAnswer;
    answerObject.Answer = this.newAnswerControl.value;
    answerObject.Id = 'A-' + Math.random();
    answerObject['Question-Id'] = this.selectedQuestionId;
    answerObject.created_at = new Date().getTime().toString();
    answerObject.created_by = 'You';
    answerObject.downvotes = answerObject.upvotes = '0';
    answersList.add(answerObject);
    this.newAnswerControl.reset();
    this.newAnswerErrors.length = 0;
    this.answersList.push(answerObject);
  }

  public ngOnDestroy() {
    this.routeParamsSubscription.unsubscribe();
    UNSUBSCRIBE(this.answersListSubscription);
    UNSUBSCRIBE(this.newAnswerSubscription);
    AppLoaderService.showLoader();
  }
}
