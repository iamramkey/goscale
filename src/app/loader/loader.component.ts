/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:43
 * @modify date 2019-05-25 15:29:43
 * @desc [description]
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div id="loaderParent" *ngIf="loading">
      <ngx-loading [show]="loading" [config]="loaderConfig"></ngx-loading>
    </div>
  `
})
export class LoaderComponent {
  @Input() public loading: boolean;
  public loaderConfig = {
    backdropBackgroundColour: 'rgba(255,255,255,0.3)',
    fullScreenBackdrop: 'true',
    primaryColour: '#1C4E84',
    secondaryColour: '#1C4E84',
    tertiaryColour: '#1C4E84'
  };
}
