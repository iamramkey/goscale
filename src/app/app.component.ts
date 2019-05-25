import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { AppLoaderService } from './services/app-loader.service';
import { AppToasterService } from './services/app-toaster.service';
import { APPLICATION_MAIN_TITLE } from './services/AppConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public AppLoaderService = AppLoaderService;
  public AppToasterService = AppToasterService;
  public pageUrl: string;

  constructor(private toasterService: ToasterService, private titleService: Title, private router: Router) {
    AppToasterService.setToasterService(toasterService);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.pageUrl = event.urlAfterRedirects;
        if (typeof this.pageUrl === 'string' && this.pageUrl.length > 0) {
          this.titleService.setTitle(APPLICATION_MAIN_TITLE);
          this.updateTitle(this.pageUrl);
        }
      }
    });
  }

  public getTitleForRoute(url: string, level: number) {
    let title = '';
    let currentRoute: any = [];
    if (
      this.getTitleForRoute['currentRoute'] instanceof Object &&
      this.getTitleForRoute['currentRoute'][level] instanceof Object
    ) {
      currentRoute = this.getTitleForRoute['currentRoute'][level];
    } else {
      currentRoute = this.router.config;
    }
    if (this.getTitleForRoute['currentRoute'] === undefined) {
      this.getTitleForRoute['currentRoute'] = [];
    }
    let children: any = [];
    children = currentRoute instanceof Array ? currentRoute : currentRoute.children;
    if (children !== undefined) {
      children.forEach(e => {
        if (e.path === url) {
          this.getTitleForRoute['currentRoute'][++level] =
            level === 2
              ? e._loadedConfig
                ? e._loadedConfig.routes[0]
                : ''
              : (this.getTitleForRoute['currentRoute'][++level] = e);
          title = (e.data || {}).title || '';
        }
      });
    }
    return title;
  }

  public updateTitle(parts: string) {
    const splits = parts.split('/');
    if (splits instanceof Array && splits.length > 0) {
      for (let i = 0; i < splits.length; i++) {
        if (splits[i].length > 0) {
          const title = this.getTitleForRoute(splits[i], i) || '';
          if (typeof title === 'string' && title.length > 0) {
            this.titleService.setTitle(this.titleService.getTitle() + ' | ' + title);
          }
        }
      }
    }
  }
}
