import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightUser]'
})
export class HighlightUserDirective {

  constructor(private elem: ElementRef){
    this.elem.nativeElement.style.backgroundColor = 'lightblue';
  }

  // // tslint:disable-next-line:typedef
  // @HostListener('click') onClicks(){
  //   if (this.elem.nativeElement.style.backgroundColor === 'lightblue') {
  //     this.elem.nativeElement.style.backgroundColor = 'white';
  //   } else{
  //     this.elem.nativeElement.style.backgroundColor = 'lightblue';
  //   }
  // }
}
