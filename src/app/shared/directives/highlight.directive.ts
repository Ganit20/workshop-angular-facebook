import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseover',['$event']) onMouseOver(event:MouseEvent) {
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-danger');
  }

  @HostListener('mouseleave',['$event']) onMouseLeave(event:MouseEvent) {
    this.renderer.removeClass(this.el.nativeElement, 'border');
    this.renderer.removeClass(this.el.nativeElement, 'border-danger');
  }
  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) {}

}
