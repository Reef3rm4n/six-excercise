/**
 * This file is auto generated
 * PLEASE DON'T EDIT
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Statement {
  id: string;
  account: string;
  dueDate: string;
  amount: number;
  period: {
    from: string;
    to: string;
  };
}

export interface GetStatementsRequest {
  search?: string;
}

const statements: Statement[] = [
  {
    id: 'statement-4',
    account: 'Visa - 3412',
    dueDate: '2016-03-31T22:00:00.000Z',
    amount: 1190,
    period: {
      from: '2016-02-29T23:00:00.000Z',
      to: '2016-03-30T22:00:00.000Z',
    },
  },
  {
    id: 'statement-3',
    account: 'Visa - 6076',
    dueDate: '2016-02-29T23:00:00.000Z',
    amount: 2443,
    period: {
      from: '2016-01-31T23:00:00.000Z',
      to: '2016-02-28T23:00:00.000Z',
    },
  },
  {
    id: 'statement-2',
    account: 'Corporate AMEX',
    dueDate: '2016-02-29T23:00:00.000Z',
    amount: 7681230,
    period: {
      from: '2016-01-31T23:00:00.000Z',
      to: '2016-02-28T23:00:00.000Z',
    },
  },
  {
    id: 'statement-1',
    account: 'Visa - 3412',
    dueDate: '2016-01-31T23:00:00.000Z',
    amount: 842,
    period: {
      from: '2015-12-31T23:00:00.000Z',
      to: '2016-01-30T23:00:00.000Z',
    },
  },
];

const quickSearch = (search?: string) => {
  return (item: Statement) => {
    if (!search) {
      return true;
    }
    return item.account.toLowerCase().includes(search.toLowerCase());
  };
};

@Injectable()
export class UsersApi {
  getUsers(request: GetStatementsRequest) {
    return of(statements.filter(quickSearch(request.search))).pipe(delay(300));
  }
}
