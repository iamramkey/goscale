/**
 * @author Sampat
 * @email iamramkey10@gmail.com
 * @create date 2019-05-25 15:29:52
 * @modify date 2019-05-25 15:29:52
 * @desc [description]
 */
export class AppLoaderService {
  public static loading = false;

  public static showLoader(bool: boolean = false) {
    this.loading = bool;
  }
}
