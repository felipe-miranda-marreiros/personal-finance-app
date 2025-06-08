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
      return <Recipient category={row.original.category} user={row.original.user} />
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
