import {
  Directive,
  ElementRef,
  Input,
  HostListener,
  Renderer2,
} from '@angular/core';
export enum PersonStatus {
  Active = 'active',
  Inactive = 'inactive',
  Deleted = 'deleted',
}
@Directive({
  selector: '[appStatus]',
})
export class StatusDirective {
  @Input() status: string | undefined;
  @HostListener('click')
  changeColor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    const name = this.el.nativeElement.querySelector('.card__name');
    const about = this.el.nativeElement.querySelector('.card__about');
    const age = this.el.nativeElement.querySelector('.card__age');
    this.renderer.setStyle(name, 'color', 'white');
    this.renderer.setStyle(about, 'color', 'white');
    this.renderer.setStyle(age, 'color', 'white');
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    switch (this.status) {
      case PersonStatus.Active:
        this.el.nativeElement.style.backgroundColor = 'green';
        break;
      case PersonStatus.Inactive:
        this.el.nativeElement.style.backgroundColor = 'blue';
        break;
      case PersonStatus.Deleted:
        this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
