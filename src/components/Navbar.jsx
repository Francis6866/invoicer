import { HashLink } from "react-router-hash-link"
const Navbar = () => {

  return (
    <nav>
      {/* menu from medium screens */}
      {/* navigtion menu */}
      <ul className='text-white text-center text-[16px] flex gap-8'>
        <li><HashLink smooth to='#features'>Features</HashLink></li>
        <li><HashLink smooth to='#works'>How it works</HashLink></li>
        <li><HashLink smooth to='#benefits'>Benefits</HashLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
