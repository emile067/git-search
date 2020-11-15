import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightUser]'
})
export class HighlightUserDirective {

  constructor(private elem: ElementRef){}

}
