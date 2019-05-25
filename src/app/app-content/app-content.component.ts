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
