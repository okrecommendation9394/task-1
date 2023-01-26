import { Directive, ElementRef, Input, HostListener } from '@angular/core';
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
  }
  constructor(private el: ElementRef) {}
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
