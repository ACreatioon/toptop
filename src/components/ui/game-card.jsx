import { cn } from '@/lib/utils';
import { Gem } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function GameCard({ title, description, src, href, className, icon: Icon, ...props }) {
  return (
    <Link
      href={`/game/${title.replaceAll(' ', '_')}`}
      className={cn(
        'hover:shadow-primary/10 group relative aspect-[3/4] outline-none overflow-hidden rounded-lg transition duration-300',
        className,
      )}
      {...props}
    >
      <Image
        src={src}
        alt={title}
        fill
        className="group-hover:grayscale-50 object-cover transition duration-500 group-hover:scale-105 group-hover:blur-sm group-focus-visible:scale-105 group-focus-visible:blur-sm"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
        <h3 className="truncate text-lg font-bold">{title}</h3>
        <p className="line-clamp-3">{description}</p>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-500 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-hover:scale-100 group-hover:opacity-100">
        <Icon className="size-10" />
      </div>
    </Link>
  );
}
