import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'
import { Fragment } from 'react'

export function BreadCrumbPath({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map(({ href, label }, ind) => (
          <Fragment key={`${label}-${ind}`}>
            <BreadcrumbItem>
              {href ? (
                <BreadcrumbLink asChild>
                  <Link href={href}>
                    <h1 className="text-xl font-semibold tracking-tight">{label}</h1>
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  <h1 className="text-xl font-semibold tracking-tight">{label}</h1>
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {ind < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
