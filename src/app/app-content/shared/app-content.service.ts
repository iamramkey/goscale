import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { IAnswersResponse, IQuestionResponse } from './app-content.model';

@Injectable()
export class AppContentService {
  constructor(private http: HttpClient) {}

  loadQuestions(): Observable<IQuestionResponse> {
    return this.http.get(environment.apiUrl + environment.questionsUrl).pipe(map((res: IQuestionResponse) => res));
  }
  loadAnswers(): Observable<IAnswersResponse> {
    return this.http.get(environment.apiUrl + environment.answersUrl).pipe(map((res: IAnswersResponse) => res));
  }
}
