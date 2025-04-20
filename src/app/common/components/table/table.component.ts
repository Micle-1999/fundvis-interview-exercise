import { Component, input } from '@angular/core';
import { TableColumn } from '../../models/table-column.model';
import { TableRow } from '../../models/table-row.model';
import { ButtonComponent } from "../button/button.component";
import { ButtonKind } from '../../enums/button-kind.enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [CommonModule, ButtonComponent],
  template: `
    <table class="w-full">

      <thead>
        <tr class="bg-gray-50 h-12">
          @for (column of columns(); track $index) {
            <th class="text-start text-sm px-2 border border-gray-200" >{{ column.label }}</th>
          }
        </tr>
      </thead>

      <tbody>
        @for (row of rows(); track $index; let rowIndex = $index) {
          <tr class="h-12">
            @for (column of columns(); track $index; let columnIndex = $index) {
              <td class="text-sm px-2 border border-gray-200" [ngClass]="{'w-px': !column.grow}">
                @let cell = getCell(row, column.property);
                @if (cell.action != undefined) {
                  <app-button [kind]="actionKind" (onClick)="cell.action()">{{ cell.text }}</app-button>
                } @else {
                  {{ cell.text }}
                }
              </td>
            }
          </tr>
        }
      </tbody>

    </table>
  `,
  styles: ``
})
export class TableComponent {
  columns = input.required<TableColumn[]>();
  rows = input.required<TableRow[]>();

  protected actionKind = ButtonKind.OUTLINED_COMPACTED;

  protected getCell(row: TableRow, property: string) {
    return row[property];
  }
}
