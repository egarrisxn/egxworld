import Image from 'next/image'

export function Banner({className, src, alt}) {
  return (
    <header className={className}>
      <Image src={src} width={2560} height={200} alt={alt} />
    </header>
  )
}
