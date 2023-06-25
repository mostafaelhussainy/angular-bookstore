import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { AsideComponent } from './components/shared/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BooksComponent,
    AddBookComponent,
    ViewBookComponent,
    EditBookComponent,
    HeaderComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
