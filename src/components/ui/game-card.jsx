import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Gem } from 'lucide-react'

export function GameCard({ title, src, href, className, icon : Icon, ...props }) {
  return (
    <Link
      href={`/game/${title.replaceAll(" ", '_')}`}
      className={cn(
        'relative rounded-lg overflow-hidden group aspect-[3/4]',
        'transition-all duration-300 hover:shadow-xl hover:shadow-primary/10',
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={title}
        fill
        className='object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:grayscale-25'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      <div className='absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
        <h3 className='text-white font-bold text-lg truncate'>{title}</h3>
        <h1 className='text-white'>detail</h1>
      </div>
      <div
        className='transition-all duration-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
      >
        <Icon className='text-white' size={40} />
      </div>
    </Link>
  )
}
