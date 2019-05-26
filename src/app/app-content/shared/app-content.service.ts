/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:30:23
 * @modify date 2019-05-26 18:30:23
 * @desc [This is the application level service file through which any http call will be fired]
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { AppContent, IAnswersResponse, IQuestionResponse } from './app-content.model';

@Injectable()
export class AppContentService {
  constructor(private http: HttpClient, private appContent: AppContent) {}

  public loadQuestions(): Observable<IQuestionResponse> {
    return this.http.get(environment.apiUrl + environment.questionsUrl).pipe(map((res: IQuestionResponse) => res));
  }
  public loadAnswers(): Observable<IAnswersResponse> {
    return this.http.get(environment.apiUrl + environment.answersUrl).pipe(map((res: IAnswersResponse) => res));
  }
}
