import { Component, signal } from '@angular/core';
import { DrawerComponent } from './common/components/drawer/drawer.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from "./common/components/accordion/accordion.component";
import { ButtonComponent } from './common/components/button/button.component';
import { AccordionData } from './common/models/accordion-data.model';
import { TagKind } from './common/enums/tag-kind.enum';
import { TableComponent } from "./common/components/table/table.component";
import { TableColumn } from './common/models/table-column.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DrawerComponent, AccordionComponent, ButtonComponent, TableComponent],
  template: `
    <div class="flex justify-center items-center h-screen w-screen">
      <app-button (onClick)="showPanel()">Show side panel</app-button>
    </div>

    <app-drawer
      [(isVisible)]="isPanelVisible"
      title="Amazon.com, Inc."
      subTitle="ID: 1"
      (close)="closePanelHandler()"
    >

      <div class="flex flex-col gap-4">
        @for (accordion of accordionList(); track $index) {
          <app-accordion
            [title]="accordion.title"
            [icon]="accordion.icon"
            [tags]="accordion.tags"
          >
            <app-table
              [columns]="accordionBodyColumn()"
              [rows]="accordion.bodyRows"
            />
          </app-accordion>
        }
      </div>
      
    </app-drawer>
  `,
  styles: [],
})
export class AppComponent {
  protected isPanelVisible = signal<boolean>(true);

  protected accordionBodyColumn = signal<TableColumn[]>([
    {
      label: "Name",
      property: "name",
      grow: true
    },
    {
      label: "",
      property: "action",
    }
  ]);

  protected accordionList = signal<AccordionData[]>([
    {
      title: "Tasks",
      icon: "heroDocumentCheck",
      tags: [
        {
          text: "0 open",
          kind: TagKind.DEFAULT
        },
        {
          text: "0 recurring",
          kind: TagKind.DEFAULT
        }
      ],
      bodyRows: [
        {
          name: {
            text: "First row",
          },
          action: {
            text: "Preiew",
            action: () => this.previewAction("Tasks preview")
          }
        }
      ]
    },
    {
      title: "Business Functions",
      icon: "heroExclamationTriangle",
      tags: [
        {
          text: "2",
          kind: TagKind.DEFAULT
        }
      ],
      bodyRows: [
        {
          name: {
            text: "First row",
          },
          action: {
            text: "Preiew",
            action: () => this.previewAction("Business Functions preview")
          }
        }
      ]
    },
    {
      title: "Contracts",
      icon: "heroPencilSquare",
      tags: [
        {
          text: "0",
          kind: TagKind.DEFAULT
        }
      ],
      bodyRows: [
        {
          name: {
            text: "First row",
          },
          action: {
            text: "Preiew",
            action: () => this.previewAction("Contracts preview")
          }
        }
      ]
    }
  ]);

  private previewAction(text: string) {
    console.log(text);
  }

  protected showPanel() {
    this.isPanelVisible.set(true);
  }

  protected closePanelHandler() {
    this.isPanelVisible.set(false);
  }
}
