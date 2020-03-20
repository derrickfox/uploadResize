import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from './../app.component';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'app-upload-component',
  providers: [MessageService],
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent {
  @ViewChild('advancedfileinput', { static: false }) advancedFileInput: ElementRef;
  @ViewChild('content', { static: false }) content: ElementRef;
  @Input() disabled: boolean;

  public dragHighlight: boolean;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  ngAfterViewInit() {
    if (this.content) {
      this.content.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
    }
  }

  onDragOver(e) {
    if (!this.disabled) {
      DomHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }

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

  isNewsActive() {
    // return this.app.newsActive;
  }

}
