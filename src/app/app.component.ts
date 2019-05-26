/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-26 18:22:52
 * @modify date 2019-05-26 18:22:52
 * @desc [This is the root component where angular application will initiate]
 */
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AppLoaderService } from './services/app-loader.service';
import { AppToasterService } from './services/app-toaster.service';
import { AppTitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public AppLoaderService = AppLoaderService;
  public AppToasterService = AppToasterService;
  public pageUrl: string;

  constructor(
    private toasterService: ToasterService,
    private titleService: Title,
    private router: Router,
    private appTitleService: AppTitleService
  ) {
    AppToasterService.setToasterService(toasterService);
    this.appTitleService.init();
  }
}
