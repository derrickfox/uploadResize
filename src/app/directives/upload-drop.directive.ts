import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUploadDrop]'
})
export class UploadDropDirective implements AfterViewInit {
  uploadedFiles: any[] = [];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.increaseUploadDropArea();
  }

  private increaseUploadDropArea(): void {
    let uploadDropArea = this.elementRef.nativeElement.querySelector('.ui-fileupload-content');
    uploadDropArea.setAttribute('style', 'height: 10em')
  }

}
