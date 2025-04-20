import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-drawer-background-shadow',
  imports: [CommonModule],
  template: `
    <div
      class="absolute overflow-hidden h-full w-full bg-black opacity-20 pointer-events-auto"
      [ngClass]="isVisible() ? 'visible' : 'hidden'"
      (click)="onClick.emit()"
    ></div>
  `,
  styles: ``
})
export class DrawerBackgroundShadowComponent {
  isVisible = input.required<boolean>();
  onClick = output<void>();
}
