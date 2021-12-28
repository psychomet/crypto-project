import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { IUser } from '@core/models/user';
import { Router } from '@angular/router';
import { StateService } from '@core/providers';

@Component({
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, OnDestroy {
  user$!: Observable<IUser>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private stateService: StateService,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.user$ = this.stateService.select((state) => state.me);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onLogout() {
    localStorage.removeItem('token');
    this.stateService.setState('signedIn', false);
    this.stateService.setState('me', null);
    this.router.navigate(['/auth/login']);
  }
}
