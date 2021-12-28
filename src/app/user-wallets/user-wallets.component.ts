import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserWalletsService } from './user-wallets.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserWallet } from './user-wallet';

@Component({
  selector: 'app-user-wallets',
  templateUrl: './user-wallets.component.html',
  styleUrls: ['./user-wallets.component.scss'],
})
export class UserWalletsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<UserWallet>([]);
  isLoading: boolean = true;
  displayedColumns: string[] = [
    'token',
    'mnemonic',
    'master_prv',
    'master_pub',
    'address',
    'user_uuid',
    'status',
    'created_at',
    'amount',
    'symbol',
    'call_back_url',
  ];

  constructor(private userWallets: UserWalletsService) {}

  ngOnInit(): void {
    // this.store.pipe(select(getUser)).subscribe((user) => {
    //   this.userWallets.getList(user!.uuid).pipe(tap(() => this.isLoading = false)).subscribe((res) => {
    //     this.dataSource.data = res.data;
    //     this.dataSource.paginator = this.paginator;
    //   });
    // });
  }

  ngAfterViewInit() {}
}
