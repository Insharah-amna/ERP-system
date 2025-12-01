import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CustomTable({
  headerItems,
  rowData
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            headerItems.map((header) => (
              <TableHead
                key={header.title}
                className={'last:text-center'}
              >
                {header.title}
              </TableHead>
            ))
          }
        </TableRow>
      </TableHeader>

      <TableBody>
        {rowData.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
