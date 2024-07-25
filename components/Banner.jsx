import Image from 'next/image'

const bannerInfo = {
  welcome: {className: 'dark:bg-yellow-400', src: '/banners/WELCOME.svg', alt: 'welcome'},
  about: {className: 'dark:bg-green-400', src: '/banners/ABOUT.svg', alt: 'about'},
  projects: {className: 'dark:bg-blue-400', src: '/banners/PROJECTS.svg', alt: 'projects'},
  contact: {className: 'dark:bg-red-400', src: '/banners/CONTACT.svg', alt: 'contact'},
}

export function Banner({type}) {
  const {className, src, alt} = bannerInfo[type] || {}
  if (!className || !src || !alt) {
    return null
  }
  return (
    <div className={`${className} flex w-full justify-center py-4`}>
      <Image src={src} width={2560} height={200} alt={alt} />
    </div>
  )
}
