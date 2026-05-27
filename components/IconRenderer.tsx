import {cn} from '@/lib/utils'
import {DynamicIcon} from 'lucide-react/dynamic'

interface IconRendererProps {
  iconName: string // This is the string coming from your Sanity data
  className?: string
  strokeWidth?: number
}

export default function IconRenderer({iconName, className, strokeWidth}: Readonly<IconRendererProps>) {
  // Gracefully handle missing names or empty strings
  if (!iconName) return null

  return (
    <DynamicIcon
      name={iconName as any}
      size={24}
      strokeWidth={strokeWidth ?? 1}
      className={cn('size-5', className)}
    />
  )
}
