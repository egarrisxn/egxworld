import {Icon} from './tooltip-icon'

export function Header({title, icons, className}) {
  const defaultClassName = 'text-foreground'
  const headerClassName = className ? className : defaultClassName

  return (
    <header className='flex flex-row items-center justify-between text-sm md:px-2 md:text-lg lg:text-2xl 2xl:text-4xl'>
      <h1 className={`${headerClassName} font-extrabold uppercase tracking-tight`}>{title}</h1>
      <div className='flex gap-[0.2rem] md:gap-2 lg:gap-3 2xl:gap-4'>
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
