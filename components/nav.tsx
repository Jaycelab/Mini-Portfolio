import { Link, animateScroll as scroll } from 'react-scroll'

const menu = [
  {
    name: 'Services',
    href: 'services'
  },
  {
    name: 'Work',
    href: 'work'
  },
  {
    name: 'FAQ',
    href: 'FAQ'
  },
  {
    name: 'Contact',
    href: 'Contact'
  }
]

const Nav = () => {
  return (
    <nav className='z-50 flex gap-8'>
      {menu.map((item, index) => (
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          key={index}
          className='cursor-pointer text-lg font-medium capitalize'
        >
          <span className='hover:border-blue hover:text-blue pb-2 transition-all hover:border-b-2'>
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  )
}

export default Nav
