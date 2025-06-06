import { Button } from '@/components/generic/Button/Button'
import { Input } from '@/components/generic/Input/Input'
import { Text } from '@/components/generic/Text/Text'

export default function Home() {
  return (
    <div>
      <Text>Home</Text>
      <Button>Placeholder</Button>
      <Button variant="secondary">Placeholder</Button>
      <Button variant="tertiary" size="tertiary">
        Placeholder
      </Button>
      <Button variant="destroy">Placeholder</Button>
      <Input rightIcon="AArrowDown" leftIcon="AArrowDown" placeholder="Placeholder" />
    </div>
  )
}
