import { Card } from '@shared/components/generic/Card/Card'
import { Input } from '@shared/components/generic/Input/Input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@shared/components/generic/Select/Select'
import { Text } from '@shared/components/generic/Text/Text'
import { TransactionList } from '../components/TransactionList'
import { TransactionDataTable } from '../datatable/TransactionDataTable'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@shared/components/generic/Pagination/Pagination'

export default function TransactionsPage() {
  return (
    <div className="bg-beige-100">
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Transactions</h1>
      </Text>

      <div>
        <Card>
          <div className="mb-[24px] flex items-center justify-between">
            <Input
              className="sm:max-w-[162px] lg:max-w-[320px]"
              placeholder="Search transaction"
              rightIcon="Search"
            />
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectSeparator />
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="sm:hidden">
            <TransactionList showCategory />
          </div>
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
