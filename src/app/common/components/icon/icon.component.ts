import { Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroXMark,
  heroDocumentCheck,
  heroExclamationTriangle,
  heroPencilSquare,
  heroChevronRight,
  heroEllipsisHorizontal
} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-icon',
  imports: [NgIcon],
  providers: [provideIcons({
    heroXMark,
    heroDocumentCheck,
    heroExclamationTriangle,
    heroPencilSquare,
    heroChevronRight,
    heroEllipsisHorizontal
  })],
  template: `
    <ng-icon class="translate-y-[2px] mx-[2px]" size="24" [name]="name()" />
  `,
  styles: ``
})
export class IconComponent {
  name = input.required<string>();

  protected imagePath = computed(() => `assets/icons/${this.name()}.svg`);
}
