import { Text } from '../Text/Text'

interface DataInfoItem {
  title: string
  description: string
}

export function DataInfoItem({ description, title }: DataInfoItem) {
  return (
    <div className="ml-[20px] flex flex-col justify-between">
      <Text className="mb-[4px]">{title}</Text>
      <Text variant="preset-4-bold" className="text-grey-900">
        {description}
      </Text>
    </div>
  )
}
