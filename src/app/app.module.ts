import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { editorReducer } from './editor.reducer';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ edit: editorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
