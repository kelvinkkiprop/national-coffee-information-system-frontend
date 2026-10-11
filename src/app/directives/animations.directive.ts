
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

@Directive({
  selector: '[appAnimations]',
  standalone: true
})
export class AnimationsDirective implements AfterViewInit, OnDestroy {

  @Input('appAnimations')
  animationClass = 'animate-fade-in-up';

  private element = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.element.nativeElement;

    // Hide until the element enters the viewport.
    this.renderer.setStyle(el, 'opacity', '0');

    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.removeStyle(el, 'opacity');

          this.renderer.addClass(el, this.animationClass);

          this.observer?.unobserve(el);
        }
      });
    }, {
      threshold: 0.15
    });

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
