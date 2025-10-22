import React from 'react'
import { FaLeaf } from 'react-icons/fa'
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md'
import ResponsiveNavbar from './ResponsiveNavbar'


const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"/"
    },
    {
        id:2,
        title:"Products",
        link:"#"
    },
    {
        id:3,
        title:"About",
        link:"#"
    },
    {
        id:4,
        title:"Shop",
        link:"#"
    },
    {
        id:5,
        title:"Contacts",
        link:"#"
    },
]

const Navbar = () => {
    const [open,setOpen] =React.useState(false)
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center pt-4 px-6 md:pt-4">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                    href={menu.link}
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={()=>{
            setOpen(!open)
          }}>
            <MdMenu className="text-4xl" />
          </div>
        </div>

      </nav>
        <ResponsiveNavbar open={open} />
    </>
  );
}

export default Navbar