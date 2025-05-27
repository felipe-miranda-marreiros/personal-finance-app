interface BarProgressProps {
  spent: number
  maximum: number
}

export function BarProgress({ spent, maximum }: BarProgressProps) {
  const total = (spent / maximum) * 100
  const percentage = maximum > 0 ? total : 0

  return (
    <div className="bg-beige-100 h-[32px] p-[4px] rounded-md">
      <div
        style={{ width: `${total > 100 ? 100 : percentage}%` }}
        className="bg-green h-[24px] rounded-md transition-[width] delay-500"
      />
    </div>
  )
}
