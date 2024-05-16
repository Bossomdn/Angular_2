import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeDirective]',
  standalone: true
})
export class ChangeDirectiveDirective {

  private isChanged: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(){
    if(this.isChanged) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
      this.renderer.setStyle(this.el.nativeElement, 'font-family', 'Arial, sans-serif');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'ศิวกร โพธิ์ทอง');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'yellow');
      this.renderer.setStyle(this.el.nativeElement, 'font-family', 'Courier New, monospace');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Siwakorn Potithong');  
    }
    this.isChanged = !this.isChanged;
  }

}
