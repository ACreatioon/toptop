import Image from "next/image";
import Link from "next/link";

export function PopularCard({ src, title, className = "", creator, ...props }) {
  return (
    <Link
      href={`/game/${title.replaceAll(" ", "_")}`}
      className={`group relative rounded-2xl overflow-hidden shadow-md transition-transform duration-500 ease-in-out will-change-transform hover:scale-[1.03] hover:shadow-xl bg-white dark:bg-zinc-900 ${className}`}
      {...props}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={src}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
          width={400}
          height={300}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent">
        <h1 className="text-lg font-semibold text-white truncate">{title}</h1>
        <p className="text-sm text-white opacity-80">{creator}</p>
      </div>
    </Link>
  );
}
