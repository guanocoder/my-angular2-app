import { Directive, OnInit, Input, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = "transparent";
  @Input("betterHighlight") highlightColor = "palegreen";

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // renderer because you may need to render on the server side (Angular Universal)
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "palegreen");
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // renderer because you may need to render on the server side (Angular Universal)
    //this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = this.defaultColor;
  }

}
