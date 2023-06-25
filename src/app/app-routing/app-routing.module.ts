import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { BooksComponent } from '../components/books/books.component';
import { ViewBookComponent } from '../components/view-book/view-book.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'view-book/:id', component: ViewBookComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
