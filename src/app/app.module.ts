import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './modules/todo/todo.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      TodoModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
