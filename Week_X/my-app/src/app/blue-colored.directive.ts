import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})
export class BlueColoredDirective {

  constructor(element: ElementRef) { 
  	element.nativeElement.style.color = "blue";
  }

}
