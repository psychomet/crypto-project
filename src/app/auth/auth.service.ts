import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@core/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(data) {
    return this.httpClient.post<{
      exp: number;
      refresh_token: string;
      token: string;
      user: IUser;
    }>(`/auth/user/login`, data);
  }
}
