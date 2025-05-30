import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export function PopularCard({ src, title, className = '', creator, ...props }) {
  return (
    <Link
      href={`/game/${title.replaceAll(' ', '_')}`}
      className={cn(
        'focus-visible:border-ring focus-visible:ring-ring/50 hover:scale-104 group relative overflow-hidden rounded-2xl shadow-md outline-none transition duration-500 ease-in-out hover:shadow-xl focus-visible:ring-[3px]',
        className,
      )}
      {...props}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          className="size-full transform object-cover grayscale transition duration-300 group-hover:scale-110 group-hover:grayscale-0 group-focus-visible:grayscale-0"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
        <h1 className="truncate text-lg font-semibold">{title}</h1>
        <p className="text-foreground/80 text-sm">{creator}</p>
      </div>
    </Link>
  );
}
