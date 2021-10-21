import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('instantiate directive autofocus');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit value', this.elt.nativeElement.value);
    this.elt.nativeElement.select();
  }
}
