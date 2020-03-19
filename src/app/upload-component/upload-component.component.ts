import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AppComponent } from './../app.component';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'app-upload-component',
  providers: [MessageService],
  templateUrl: './upload-component.component.html',
  styleUrls: ['./upload-component.component.css']
})
export class UploadComponentComponent implements OnInit {
  @ViewChild('advancedfileinput', { static: false }) advancedFileInput: ElementRef;
  @ViewChild('content', { static: false }) content: ElementRef;
  @Input() disabled: boolean;
  
  public dragHighlight: boolean;
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService, private app: AppComponent, private element: ElementRef) {
    console.log('this.content', this.content);
    // // Option 1
    // el.style.color = 'white';
    // el.style.background = 'red';
    // // Option 2
    // el.style.cssText = 'color: white; background: red;'
    // Option 3
    // this.element.nativeElement.setAttribute('style', 'padding: 80px');
    console.log('constructed!')
  }

  ngAfterViewInit() {
    if (this.content){
      this.content.nativeElement.addEventListener('dragover', this.onDragOver.bind(this));
    }
    console.log('this.content', this.content);
    this.content.nativeElement.setAttribute('style', 'border: 2px solid green');
  }

  onDragOver(e) {
    if (!this.disabled) {
        DomHandler.addClass(this.content.nativeElement, 'ui-fileupload-highlight');
        this.dragHighlight = true;
        e.stopPropagation();
        e.preventDefault();
    }
}

  ngOnInit() {
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
