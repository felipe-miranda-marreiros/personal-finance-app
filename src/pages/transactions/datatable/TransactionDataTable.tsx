import { DataTable } from '@/shared/components/generic/DataTable/DataTable'
import { transactionColumn } from './TransactionColumn'
import { transactions } from '@/entities/transaction/mocks'

export function TransactionDataTable() {
  return (
    <div className="hidden sm:block">
      <DataTable columns={transactionColumn} data={transactions} />
    </div>
  )
}
