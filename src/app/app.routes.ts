import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InstanceComponent } from './instance/instance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'instances', component: InstanceComponent },
];
