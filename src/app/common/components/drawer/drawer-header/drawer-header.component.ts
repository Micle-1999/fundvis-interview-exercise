import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { ButtonKind } from '../../../enums/button-kind.enum';
import { IconComponent } from '../../icon/icon.component';

@Component({
  selector: 'app-drawer-header',
  imports: [ButtonComponent, IconComponent],
  template: `
    <div class="flex gap-4 justify-between items-center p-4">
      <div class="flex flex-col gap-0.5">
        <h3 class="text-2xl font-bold">{{ title() }}</h3>
        <span class="font-bold text-gray-400 text-sm">{{ subTitle() }}</span>
      </div>
      <app-button (onClick)="closeButtonClick.emit()" [kind]="closeButtonKind">
        <app-icon name="heroXMark" />
      </app-button>
    </div>
  `,
  styles: ``
})
export class DrawerHeaderComponent {
  title = input.required<string>();
  subTitle = input.required<string>();
  closeButtonClick = output<void>();

  readonly closeButtonKind = ButtonKind.OUTLINED;
}
