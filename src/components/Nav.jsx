import {headerLogo} from '../assets/images/index'
import {hamburger} from '../assets/icons/index'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
      <a href='/'>
         <img
         src={headerLogo}
         width={130}
         height={29}
         alt='logo'
         >
         </img>
      </a>
      <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>

      </ul>
      </nav>
    </header>
  )
}

export default Nav
