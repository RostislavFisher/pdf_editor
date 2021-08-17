import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PdfEditorComponent } from './pdf-editor/pdf-editor.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'pdf-editor/:fileName', component: PdfEditorComponent},
    ]),
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,

    PdfEditorComponent,
    MainComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
