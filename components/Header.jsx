import {Icon} from './Icons'

export function Header({title, icons, className}) {
  const defaultClassName = 'text-foreground'
  const headerClassName = className ? className : defaultClassName

  return (
    <header className='flex flex-row items-center justify-between text-sm md:px-2 md:text-lg lg:text-xl 2xl:text-4xl'>
      <h2 className={`${headerClassName} font-black uppercase tracking-widest`}>{title}</h2>

      <div className='flex gap-[0.2rem] md:gap-3 lg:gap-4'>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            name={icon.name}
            href={icon.href}
            label={icon.label}
            className={icon.className}
          >
            {icon.children}
          </Icon>
        ))}
      </div>
    </header>
  )
}
