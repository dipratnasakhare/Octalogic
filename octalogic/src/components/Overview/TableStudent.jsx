import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

// {regNo:"1541235", Fname:"john",Lname:"Doe",Course:"3", totalFees:"$300", regDate:"01-06-2023"},

export const columns = [
  {
    accessorKey: "regNo",
    header: "Reg.NO",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("regNo")}</div>
    ),
  },
  {
    accessorKey: "Fname",
    header: "F.Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Fname")}</div>
    ),
  },
  {
    accessorKey: "Lname",
    header: "L.Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Lname")}</div>
    ),
  },
  {
    accessorKey: "Course",
    header: "Course #",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Course")}</div>
    ),
  },
  {
    accessorKey: "totalFees",
    header: "Total Fees",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("totalFees")}</div>
    )
  },
  {
    accessorKey: "regDate",
    header: "Reg.Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("regDate")}</div>
    )
  }
];

export function DataStudent({ data }) {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});


  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-end justify-end gap-3 m-5 ">
        <p className="text-red-900">
          View All Courses
        </p>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
