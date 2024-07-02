import { cn } from "@/lib/utils"
import { CircleIcon, ComponentInstanceIcon } from "@radix-ui/react-icons"

interface SpinnerProps {
  className?: string
  sizeClass?: string
}
export default function Spinner({ className = '', sizeClass = 'w-5 h-5' }: SpinnerProps) {
  return (
    <span className={cn(sizeClass, 'inline-block relative', className)}>
      <ComponentInstanceIcon className={cn(sizeClass, 'absolute top-0 left-0 animate-spin opacity-50')} />
      <CircleIcon className={cn(sizeClass, 'absolute top-0 left-0 animate-pulse transform scale-75')} />
    </span>
  )
}