import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { DrawerBackgroundShadowComponent } from "./drawer-background-shadow/drawer-background-shadow.component";
import { DrawerHeaderComponent } from "./drawer-header/drawer-header.component";

@Component({
  selector: 'app-drawer',
  imports: [CommonModule, DrawerBackgroundShadowComponent, DrawerHeaderComponent],
  template: `
    <div class="absolute top-0 left-0 h-full w-full overflow-hidden pointer-events-none">

      <app-drawer-background-shadow [isVisible]="isVisible()" (onClick)="closePanel()" />

      <div
        class="
          absolute right-0 h-full w-1/3
          bg-white overflow-x-hidden
          flex flex-col pointer-events-auto
          transition duration-300 ease-in-out
        "
        [ngClass]="isVisible() ? 'translate-x-0' : 'translate-x-full'"
      >
        <app-drawer-header [title]="title()" [subTitle]="subTitle()" (closeButtonClick)="closePanel()" />
        <ng-content />
      </div>

    </div>
  `,
  styles: ``
})
export class DrawerComponent {
  title = input.required<string>();
  subTitle = input.required<string>();
  close = output<void>();
  isVisible = model<boolean>(false);

  protected closePanel() {
    this.isVisible.set(false);
    this.close.emit();
  }
}

