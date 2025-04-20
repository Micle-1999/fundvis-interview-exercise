import { Component, input, output } from '@angular/core';
import { TagData } from '../../../models/tag-data.model';
import { IconComponent } from '../../icon/icon.component';
import { TagComponent } from '../../tag/tag.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-header',
  imports: [CommonModule, IconComponent, TagComponent],
  template: `
    <div
      class="flex justify-between w-full bg-gray-100 py-3 px-5 cursor-pointer"
    >

      <div class="flex gap-2 items-center">
        @if (icon() != undefined) {
          <app-icon [name]="icon()!" />
        }
        <h4 class="text-lg font-bold">{{ title() }}</h4>
        @for (tag of tags(); track $index) {
          <app-tag [kind]="tag.kind" [text]="tag.text" />
        }
      </div>

      <div class="flex gap-2 items-center">
        <app-icon name="heroEllipsisHorizontal" />
        
        <div class="transition" [ngClass]="{ 'rotate-90': isOpen() }">
          <app-icon name="heroChevronRight" />
        </div>
      </div>

    </div>
  `,
  styles: ``
})
export class AccordionHeaderComponent {
  icon = input<string>();
  isOpen = input.required<boolean>();
  title = input.required<string>();
  tags = input<TagData[]>([]);
}
