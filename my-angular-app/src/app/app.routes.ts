import { Routes } from '@angular/router';
import { UsersComponent } from '../app/components/users/users.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { title: 'Angular | Home', path: 'home', component: HomeComponent },
  { title: 'Angular | Users', path: 'users', component: UsersComponent },
  { title: 'Angular | Blog', path: 'blog', component: BlogComponent },
];
