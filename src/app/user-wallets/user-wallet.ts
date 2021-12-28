export interface UserWallet {
  token: string;
  mnemonic: string;
  master_prv: string;
  master_pub: string;
  address: string;
  user_uuid: string;
  status: string;
  created_at: string;
  amount: number;
  symbol: string;
  call_back_url: string;
  extra: null;
}
