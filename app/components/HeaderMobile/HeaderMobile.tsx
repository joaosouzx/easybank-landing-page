import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import './HeaderMobile.css'

const solutions = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Careers', href: '#' },
]

export default function HeaderMobile() {
  return (
    <Popover className="header-mobile relative z-10" style={{ backgroundColor: 'hsl(0, 0%, 100%)' }}>
      <div className='flex justify-evenly items-center gap-x-4'>
        <Image src={'/logo.svg'} width={139} height={20} alt="easybank" />

        <PopoverButton className="py-5 inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
          <HamburgerMenuIcon style={{ color: "hsl(233, 8%, 62%)", transform: "scale(2)" }} />
        </PopoverButton>
      </div>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
      >
        <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 ring-1 shadow-lg ring-gray-900/5">
          <div className="p-4">
            {solutions.map((item) => (
              <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}