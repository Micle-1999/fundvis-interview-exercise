import { Component, computed, input } from '@angular/core';
import { TagKind } from '../../enums/tag-kind.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag',
  imports: [CommonModule],
  template: `
    <div
      class="text-sm font-bold text-gray-600"
      [ngClass]="cssClasses()"
    >
      {{ text() }}
    </div>
  `,
  styles: ``
})
export class TagComponent {
  text = input.required<string>();
  kind = input<TagKind>(TagKind.DEFAULT);

  protected cssClasses = computed(() => {
    switch (this.kind()) {
      case (TagKind.DEFAULT): return `
        bg-gray-200
        rounded-xl px-2 py-0.5
      `;
    };
  })
}
