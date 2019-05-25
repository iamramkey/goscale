import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { NgxLoadingModule } from 'ngx-loading';
import { AppContentComponent } from './app-content/app-content.component';
import { QuestionDetailsComponent } from './app-content/question-details/question-details.component';
import { QuestionsListComponent } from './app-content/questions-list/questions-list.component';
import { AppContent } from './app-content/shared/app-content.model';
import { AppContentService } from './app-content/shared/app-content.service';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReadNestedPropertyPipe } from './pipes/deep-find.pipe';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    ReadNestedPropertyPipe,
    SafePipe,
    NotFoundComponent,
    QuestionDetailsComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NgxLoadingModule.forRoot({}),
    ToasterModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ToasterService, AppContentService, AppContent],
  bootstrap: [AppComponent]
})
export class AppModule {}
