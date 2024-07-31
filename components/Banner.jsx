import Image from 'next/image'

const bannerInfo = {
  welcome: {
    className: 'bg-yellow-400/20 dark:bg-yellow-400',
    src: '/banners/WELCOME.svg',
    alt: 'welcome',
  },
  about: {className: 'bg-green-400/20 dark:bg-green-400', src: '/banners/ABOUT.svg', alt: 'about'},
  projects: {
    className: 'bg-blue-400/20 dark:bg-blue-400',
    src: '/banners/PROJECTS.svg',
    alt: 'projects',
  },
  contact: {
    className: 'bg-red-400/20 dark:bg-red-400',
    src: '/banners/CONTACT.svg',
    alt: 'contact',
  },
}

export function Banner({title}) {
  const {className, src, alt} = bannerInfo[title] || {}
  if (!className || !src || !alt) {
    return null
  }
  return (
    <div className={`${className} flex w-full justify-center py-8`}>
      <Image src={src} width={2560} height={200} alt={alt} />
    </div>
  )
}
