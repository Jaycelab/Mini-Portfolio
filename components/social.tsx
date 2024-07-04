import {
  FaGithub,
  FaYoutube,
  FaStackOverflow,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/jaycelab'
  },
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/jaycelab/'
  },
  {
    icon: <FaTwitter />,
    path: 'https://twitter.com/jaycelab'
  }
]
const Social = () => {
  return (
    <div className='flex gap-6'>
      {socialLinks.map((item, index) => (
        <Link
          target='_blank'
          href={item.path}
          key={index}
          className='duration-3000 border-blue text-blue hover:bg-blue/20 flex size-10 items-center justify-center rounded-full border-2 hover:transition-all'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social
