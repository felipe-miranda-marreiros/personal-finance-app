import { Card } from '@/components/generic/Card/Card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/generic/Pagination/Pagination'
import { Text } from '@/components/generic/Text/Text'
import { TransactionDataTable } from '../datatable/TransactionDataTable'
import { TransactionList } from '../components/TransactionList'

export default function TransactionsPage() {
  return (
    <div className="bg-beige-100">
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Transactions</h1>
      </Text>

      <div>
        <Card>
          <TransactionList />
          <TransactionDataTable />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink isActive href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Card>
      </div>
    </div>
  )
}
