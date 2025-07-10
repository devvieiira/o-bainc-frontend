'use client';
export function Video({
  videoPath,
  w,
  h,
  className,
}: {
  videoPath: string;
  h: number;
  w: number;
  className: string;
}) {
  return (
    <video
      width={w}
      height={h}
      autoPlay
      muted
      playsInline
      controls
      preload="none"
      loop
      className={`aspect-square rounded-4xl object-cover ${className}`}
    >
      <source src={videoPath} type="video/mp4" />
    </video>
  );
}
