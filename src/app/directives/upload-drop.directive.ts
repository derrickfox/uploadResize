import { AfterViewInit, Directive, Host, Input, Renderer2, Self, ElementRef } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Directive({
  selector: '[appUploadDrop]'
})
export class UploadDropDirective implements AfterViewInit{
  uploadedFiles: any[] = [];

  constructor(private renderer: Renderer2, @Host() @Self() private fileUpload: FileUpload) { }

  ngAfterViewInit(): void {
    this.increaseUploadDropArea(this.fileUpload.basicFileInput || this.fileUpload.advancedFileInput);
  }

  private increaseUploadDropArea(elementRef: ElementRef): void {
    console.log('elementRef', elementRef);
  }

}
