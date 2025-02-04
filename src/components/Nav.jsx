import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import { useState } from 'react'
import {close} from '../assets/icons'

const Nav = () => {

  const [toggle ,setToggle] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt="logo"
            width={130}
            height={29} 
          />
        </a>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => (
            <li 
              key={item.label}
              onClick={() => setActive(item.label)}
            >
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : hamburger} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((item) => (
                <li 
                  key={item.label}
                  onClick={() => setActive(item.href)}
                >
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav