import Image from 'next/image'
import oplyIcon from './oply-icon-color.svg'

interface IconProps {
  className?: string
}

export default function Icon({ className = 'h-6 w-auto' }: IconProps) {
  return (
    <Image 
      src={oplyIcon} 
      alt="Oply"
      className={className}
      priority
    />
  )
}