import { TableRow } from "./table-row.model"
import { TagData } from "./tag-data.model"

export type AccordionData = {
  title: string,
  icon: string,
  tags: TagData[],
  bodyRows: TableRow[]
}