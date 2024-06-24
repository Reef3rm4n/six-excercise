import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Statement } from '../../../generated/statement.api';
import { Observable } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith,
  filter,
} from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  template: `
    <div>
      <h2>Statements</h2>
      <input [formControl]="searchControl" placeholder="Quick search" />
      <table>
        <caption>Statement Summary</caption>
        <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let statement of statements$ | async">
            <td data-label="Account">{{ statement.account }}</td>
            <td data-label="Due Date">{{ statement.dueDate | date }}</td>
            <td data-label="Amount">{{ statement.amount | currency }}</td>
            <td data-label="Period">{{ statement.period.from | date }} - {{ statement.period.to | date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  providers: [UsersService],
  imports: [CommonModule, ReactiveFormsModule],
})
export class UsersComponent implements OnInit {
  statements$: Observable<Statement[]> = new Observable();
  searchControl = new FormControl('');

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.statements$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      distinctUntilChanged(),
      filter((term) => term !== null),
      switchMap((term) =>
        this.usersService.getStatements({ search: term ?? undefined })
      )
    );
  }
}
