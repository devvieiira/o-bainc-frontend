import Image from 'next/image';

export interface CardImageProps {
  alt: string;
  image: string;
  height?: number;
  width?: number;
}

export function CardImage({ image, alt, height = 460, width = 460 }: CardImageProps) {
  return (
    <div className="col-span-1 w-full">
      <Image
        alt={alt}
        src={image}
        height={height}
        width={width}
        className="h-auto w-full overflow-hidden rounded-3xl"
      />
    </div>
  );
}
