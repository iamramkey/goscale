/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:27
 * @modify date 2019-05-25 15:29:27
 * @desc [description]
 */

import { BodyOutputType, Toast, ToasterConfig, ToasterService } from 'angular2-toaster';

/*
Purpose : This is the application level toaster which will help to show the toaster to user.
Usage : AppToasterService.populateToaster(TOASTER_MESSAGE_TYPES.INFO, <message to display|HTML message to display>, [<false|true>]);'
*/
export class AppToasterService {
  private static toasts = [];
  private static toasterService;

  public static configToaster: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    timeout: 20000,
    limit: 1
  });

  public static populateToaster(toastertype: string, toasterMessage: string, toastWithBodyFlag?: boolean) {
    const toast: Toast = {
      type: toastertype
    };
    if (toastWithBodyFlag) {
      toast.body = `<div class="toast-msg ${toastertype}-msg">${toasterMessage}</div>`;
      toast.bodyOutputType = BodyOutputType.TrustedHtml;
    } else {
      toast.title = toasterMessage;
    }
    return this.toasts[this.toasts.push(this.toasterService.pop(toast))];
  }
  public static setToasterService(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  public static clearAllToasts() {
    if (this.toasts instanceof Array && this.toasts.length > 0) {
      this.toasts.forEach(this.clearLastToast.bind(this));
    }
  }
  public static clearLastToast() {
    if (this.toasts instanceof Array && this.toasts.length > 0) {
      this.toasts.pop();
      this.toasterService.clear();
    }
  }
}
