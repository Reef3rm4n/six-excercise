import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import 'zone.js';
import { UsersComponent } from './app/users/components/users.component';
import { UsersService } from './app/users/users.service';
import { UsersApi } from './generated/statement.api';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  imports: [RouterOutlet],
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: UsersComponent },
      { path: '**', redirectTo: '' },
    ]),
    UsersService,
    UsersApi,
    provideHttpClient(),
  ],
});
