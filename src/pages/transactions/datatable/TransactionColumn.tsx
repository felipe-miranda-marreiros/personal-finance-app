'use client'

import { Recipient } from '@/shared/components/core/Recipient/Recipient'
import { Transaction } from '@/entities/transaction/transaction'
import { ColumnDef } from '@tanstack/react-table'

export const transactionColumn: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'name',
    header: 'Recipient / Sender',
    cell: (props) => {
      const { row } = props
      return (
        <Recipient
          avatar={row.original.avatar}
          category={row.original.category}
          name={row.original.name}
        />
      )
    }
  },
  {
    accessorKey: 'category',
    header: 'Category'
  },
  {
    accessorKey: 'transaction_date',
    header: 'Transaction Date'
  },
  {
    accessorKey: 'amount',
    header: 'Amount'
  }
]
