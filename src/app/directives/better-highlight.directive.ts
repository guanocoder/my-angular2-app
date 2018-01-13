import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[betterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) { }

  ngOnInit() {
    // renderer because you may need to render on the server side (Angular Universal)
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "palegreen");
  }

}
