import { CommonModule } from '@angular/common';
import { Component, computed, ElementRef, input, signal, viewChild } from '@angular/core';
import { TagData } from '../../models/tag-data.model';
import { AccordionHeaderComponent } from "./accordion-header/accordion-header.component";

@Component({
  selector: 'app-accordion',
  imports: [CommonModule, AccordionHeaderComponent],
  template: `
    <div class="w-full h-fit flex flex-col border-t-2 border-b-2 border-gray-200">
      <app-accordion-header
        [icon]="icon()"
        [title]="title()"
        [tags]="tags()"
        [isOpen]="isOpen()"
        (click)="toggleAccordion()"
      />
      
      <div
        class="transition-all duration-300 ease-in-out overflow-hidden max-h-fit"
        [ngStyle]="{ 'height': isOpen() ? contentHeight() : '0px' }"
      >
        <div #content class="p-4">
          <ng-content />
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class AccordionComponent {
  private content = viewChild.required<ElementRef>('content');
  
  icon = input<string>();
  title = input.required<string>();
  tags = input<TagData[]>([]);
  
  protected isOpen = signal<boolean>(false);
  protected contentHeight = computed(() => this.content().nativeElement.scrollHeight + 'px');

  protected toggleAccordion() {
    this.isOpen.update(isOpen => !isOpen);
  }
}
