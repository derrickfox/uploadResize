import { AfterViewInit, Directive, Host, Input, Renderer2, Self, ElementRef } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Directive({
  selector: '[appUploadDrop]'
})
export class UploadDropDirective implements AfterViewInit{
  uploadedFiles: any[] = [];

  constructor(private renderer: Renderer2, @Host() @Self() private fileUpload: FileUpload, private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.increaseUploadDropArea();
  }

  private increaseUploadDropArea(): void {
    let uploadDropArea = this.elementRef.nativeElement.querySelector('.ui-fileupload-content');
    uploadDropArea.setAttribute('style', 'padding-bottom: 100px')
  }

}
