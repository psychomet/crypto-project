import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserWalletsService } from './user-wallets.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { UserWallet } from './user-wallet';
import { StateService } from '@core/providers';
import { tap } from 'rxjs';

@Component({
  selector: 'app-user-wallets',
  templateUrl: './user-wallets.component.html',
  styleUrls: ['./user-wallets.component.scss'],
})
export class UserWalletsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<UserWallet>([]);
  isLoading: boolean;
  displayedColumns: string[] = [
    'token',
    'address',
    'status',
    'created_at',
    'amount',
    'symbol',
  ];

  constructor(
    private userWallets: UserWalletsService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.stateService
      .select((state) => state.me)
      .subscribe((me) => {
        this.userWallets
          .getList(me!.uuid)
          .pipe(tap(() => (this.isLoading = false)))
          .subscribe((res: any) => {
            this.dataSource.data = res.data;
            this.dataSource.paginator = this.paginator;
          });
      });
    // this.store.pipe(select(getUser)).subscribe((user) => {
    //   this.userWallets.getList(user!.uuid).pipe(tap(() => this.isLoading = false)).subscribe((res) => {
    //     this.dataSource.data = res.data;
    //     this.dataSource.paginator = this.paginator;
    //   });
    // });
  }

  ngAfterViewInit() {}
}
