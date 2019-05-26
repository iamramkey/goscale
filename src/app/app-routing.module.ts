/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:22:14
 * @modify date 2019-05-26 18:22:14
 * @desc [Application level routing constants file]
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppContentComponent } from './app-content/app-content.component';
import { QuestionDetailsComponent } from './app-content/question-details/question-details.component';
import { QuestionsListComponent } from './app-content/questions-list/questions-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTING_PATHS } from './services/AppConstants';

const routes: Routes = [
  {
    path: APP_ROUTING_PATHS.ROOT_PATH,
    redirectTo: APP_ROUTING_PATHS.APP_PATH,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTING_PATHS.APP_PATH,
    component: AppContentComponent,
    data: { title: '' },
    children: [
      {
        path: '',
        component: QuestionsListComponent,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTING_PATHS.QUESTION_ID,
        component: QuestionDetailsComponent
      }
    ]
  },
  { path: APP_ROUTING_PATHS.NOT_FOUND, component: NotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
