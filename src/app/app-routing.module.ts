import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'view-book/:id', component: ViewBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // Wildcard route for handling any other invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


