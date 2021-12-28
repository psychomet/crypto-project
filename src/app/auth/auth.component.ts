import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';
import { StateService } from '@core/providers';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoading!: boolean;
  form!: FormGroup;
  hide: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm() {
    this.form = this.formBuilder.group({
      mobile: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.authService
      .login(this.form.value)
      .pipe(tap(() => (this.isLoading = false)))
      .subscribe((res) => this.handleSubmitRes(res));
  }

  handleSubmitRes(data) {
    if (data.token) {
      localStorage.setItem('token', data.token);
      this.stateService.setState('me', data.user);
      this.router.navigate(['/']);
    }
  }
}
