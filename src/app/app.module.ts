import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponentComponent } from './upload-component/upload-component.component';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FileUploadModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
