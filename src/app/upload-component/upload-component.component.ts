import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-upload-component',
  providers: [MessageService],
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private app: AppComponent) { }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
  }

  onBasicUpload(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  onBasicUploadAuto(event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
  }

  // isNewsActive() {
  //     return this.app.newsActive;
  // }

}
