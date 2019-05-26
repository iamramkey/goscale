/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:25:32
 * @modify date 2019-05-26 18:25:32
 * @desc [this is a route component which will be redirected when you came to the root path]
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { QUESTIONS_RESPONSE_KEYS } from '../services/AppConstants';
import { ObjectUtils } from '../services/object-utils.service';
import { AppContent, IQuestion, IQuestionResponse } from './shared/app-content.model';
import { AppContentService } from './shared/app-content.service';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.sass']
})
export class AppContentComponent {}
