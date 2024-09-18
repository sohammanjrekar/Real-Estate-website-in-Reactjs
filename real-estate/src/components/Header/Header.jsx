const Header = () => {
  return (
<section className="bg-black text-white">
    <div className='flex justify-between mx-auto container items-center'>
      <div className="">
        <img src='logo.svg' alt="logo" className="w-24"/>
        </div>
        <div className="flex items-center space-x-6">
            <a className="hover:text-[#f27b13]" href=''>Residencies</a>
            <a className="hover:text-[#f27b13]" href=''>Our Value</a>
            <a className="hover:text-[#f27b13]" href=''>Contact Us</a>
            <a className="hover:text-[#f27b13]" href=''>Get Started</a>
            <button className="bg-[#f27b13] hover:bg-[#f26513] px-3 py-2 rounded-md"><a href=''>Contact</a></button>
        </div>
    </div>
</section>
  )
}

export default Header