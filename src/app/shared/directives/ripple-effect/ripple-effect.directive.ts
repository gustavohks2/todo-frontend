import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
   selector: '[todoRippleEffect]'
})
export class RippleEffectDirective {

   private rippleCircle: HTMLSpanElement;
   private container: HTMLElement;
   private max: number;

   constructor(private el: ElementRef, private renderer: Renderer2) {
      this.container = this.el.nativeElement;

      this.container.style.position = 'relative';

      let rippleCircle: HTMLSpanElement = this.container.querySelector('.rippe-circle');

      // console.log(this.container);
      this.max = Math.max(this.container.offsetWidth, this.container.offsetHeight);

      if (!rippleCircle) {
         rippleCircle = this.renderer.createElement('span');
         rippleCircle.classList.add('rippe-circle');
         this.renderer.appendChild(this.container, rippleCircle);
      }

      this.rippleCircle = rippleCircle;
   }

   @HostListener('mousemove', ['$event']) onClick($event: MouseEvent) {
      const containerRect = this.container.getBoundingClientRect();
      // console.log(this.max);

      const x = ($event.clientX - containerRect.left) - (this.max / 2);
      const y = ($event.clientY - containerRect.top) - (this.max / 2);

      this.rippleCircle.style.transform = `translate(${x}px, ${y}px)`;
   }
}
