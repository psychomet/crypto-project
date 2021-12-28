import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserWallet } from './user-wallet';

@Injectable({
  providedIn: 'root',
})
export class UserWalletsService {
  constructor(private httpClient: HttpClient) {}

  getList(userId) {
    return this.httpClient.get<{ data: UserWallet[] }>(
      `/user/crypto/wallets/${userId}`
    );
  }
}
