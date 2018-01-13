import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // renderer because you may need to render on the server side (Angular Universal)
    this.backgroundColor = "palegreen";
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "palegreen");
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // renderer because you may need to render on the server side (Angular Universal)
    this.backgroundColor = "transparent";
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
  }

}
