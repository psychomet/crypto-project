import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@core/models/user';
import { StateService } from '@core/providers';
import { Router } from '@angular/router';

@Injectable()
export class AppInitService {
  constructor(
    private httpClient: HttpClient,
    private stateService: StateService,
    private router: Router
  ) {}

  Init() {
    return new Promise<void>((resolve, reject) => {
      console.log('AppInitService.init() called');
      ////do your initialisation stuff here
      this.httpClient
        .get<{
          data: IUser;
        }>(`/user/get/by/token`)
        .subscribe(
          (res) => {
            this.stateService.setState('signedIn', true);
            this.stateService.setState('me', res.data);
            resolve();
          },
          () => {
            this.router.navigate(['/auth/login']);
            resolve();
          }
        );

      // setTimeout(() => {
      //   console.log('AppInitService Finished');
      //   resolve();
      // }, 6000);
    });
  }
}
