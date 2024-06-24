import { Injectable } from '@angular/core';
import { UsersApi as StatementApi } from '../../generated/statement.api';
import { Observable } from 'rxjs';
import { Statement, GetStatementsRequest } from '../../generated/statement.api';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private statementApi: StatementApi) {}

  getStatements(request: GetStatementsRequest): Observable<Statement[]> {
    return this.statementApi.getUsers(request);
  }
}
