import { ReactNode } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

import { scrollToHashTarget } from '@/src/lib/utils'

type SectionLinkProps = Omit<LinkProps, 'to'> & {
  children: ReactNode
  onNavigate?: () => void
  to: string
}

export default function SectionLink({
  children,
  onClick,
  onNavigate,
  to,
  ...props
}: SectionLinkProps) {
  const location = useLocation()

  return (
    <Link
      {...props}
      to={to}
      onClick={(event) => {
        onNavigate?.()
        onClick?.(event)

        if (event.defaultPrevented) {
          return
        }

        if (to.startsWith('/#') && location.pathname === '/') {
          event.preventDefault()
          scrollToHashTarget(to.slice(2))
        }
      }}
    >
      {children}
    </Link>
  )
}
