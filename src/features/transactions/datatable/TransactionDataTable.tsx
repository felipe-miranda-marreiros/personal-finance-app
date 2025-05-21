import { DataTable } from '@/components/generic/DataTable/DataTable'
import { transactionColumn } from './TransactionColumn'
import { transactions } from '@/models/transaction/mocks'

export function TransactionDataTable() {
  return (
    <div className="hidden sm:block">
      <DataTable columns={transactionColumn} data={transactions} />
    </div>
  )
}
