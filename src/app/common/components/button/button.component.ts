import { Component, computed, input, output } from '@angular/core';
import { ButtonKind } from '../../enums/button-kind.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button
      class="cursor-pointer font-bold flex justify-center items-center"
      [ngClass]="cssClasses()"
      (click)="onClick.emit()"
    >
      <ng-content/>
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  kind = input<ButtonKind>(ButtonKind.PRIMARY);
  onClick = output<void>();

  protected cssClasses = computed(() => {
    switch (this.kind()) {
      case (ButtonKind.PRIMARY): return `
        bg-blue-100 hover:bg-blue-200 active:bg-blue-300
        text-blue-500 hover:text-blue-600 active:text-blue-700
        rounded-xl px-4 py-1.5 
      `;
      case (ButtonKind.OUTLINED): return `
        bg-white hover:bg-gray-100 active:bg-gray-200
        rounded-xs p-2 border border-gray-200 shadow-sm
      `;
      case (ButtonKind.OUTLINED_COMPACTED): return `
        bg-white hover:bg-gray-100 active:bg-gray-200
        rounded-xs px-1 py-0.5 border border-gray-200 shadow-sm
      `;
    };
  })
}
