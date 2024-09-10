import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientFormComponent } from './features/client/components/client-form/client-form.component';
import { ClientListComponent } from './features/client/components/client-list/client-list.component';
import { ClientModule } from './features/client/client.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ClientFormComponent,ClientListComponent,ClientModule],
  template:`<router-outlet />
  <app-client-form/>
  <app-client-list/>
  `
})
export class AppComponent {
  title = 'lista-de-clientes';
}
