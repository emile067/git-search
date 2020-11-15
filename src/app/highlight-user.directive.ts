import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightUser]'
})
export class HighlightUserDirective {

  constructor(private elem: ElementRef){}

  // tslint:disable-next-line:typedef
  @HostListener('click') onClicks(){
    if (this.elem.nativeElement.style.backgroundColor === 'yellow') {
      this.elem.nativeElement.style.backgroundColor = 'white';
    } else{
      this.elem.nativeElement.style.backgroundColor = 'yellow';
    }
  }

  // tslint:disable-next-line:typedef
  private textDeco(){
    this.elem.nativeElement.addClass('bg-warning');
  }

}
