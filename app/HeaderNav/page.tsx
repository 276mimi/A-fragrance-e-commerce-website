'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../components/CartContext';
import { useRouter } from 'next/navigation';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Moved inside the component
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { cart, setIsCartOpen } = useCart();
  const itemCount = cart.reduce((total: any, item: any) => total + item.quantity, 0);

  // Search Logic
  const handleSearch = (e: any) => {
    if (e.key === 'Enter' && searchQuery.trim() !== "") {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(""); // Clear search after hitting enter
    }
  };

  return (
    <header className="relative">
      <nav className='flex justify-between items-center p-4 font-serif border-b border-[#b6a2ce]/30 bg-black/50 backdrop-blur-md sticky top-0 z-50'>
        
        {/* LOGO & SEARCH SECTION */}
        <div className="flex items-center gap-4">
          <Link href="/" className="transition-transform hover:scale-105">
            <Image 
              src="/images/icon.png" 
              alt="MQ's logo" 
              width={100} 
              height={100} 
              className='w-[60px] h-auto md:w-[80px]' 
            />
          </Link>

          {/* SEARCH INPUT FIELD (Option A) */}
          <div className="hidden sm:flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 focus-within:border-[#FFC400]/50 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search scents..."
              value={searchQuery}
              onChange={(e: any) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent border-none outline-none text-white text-xs ml-2 w-32 md:w-48 placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex flex-row items-center gap-6 mr-8'>
          {['Home', 'About Us', 'Shop', '🛒'].map((item) => (
            <li key={item}>
              {item === '🛒' ? (
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="relative text-white hover:text-[#FFC400] transition-all duration-300 text-lg group p-2"
                >
                  {item}
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#6A1E99] text-white text-[10px] font-bold px-1.5 rounded-full border border-black">
                      {itemCount}
                    </span>
                  )}
                </button>
              ) : (
                <Link 
                  href={
                    item === 'About Us' ? '/#ab' : 
                    item === 'Home' ? '/' : 
                    `/${item.toLowerCase().replace(' ', '')}`
                  } 
                  className='text-white hover:text-[#FFC400] transition-all duration-300 text-lg relative group'
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FFC400] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}

          <li className='bg-[#6A1E99] px-4 py-1 rounded-full border border-transparent hover:bg-white/10 hover:text-white shadow-xl transition-all duration-300 active:scale-95'>
            <Link href="/#ct" className='text-lg font-medium text-white'>Contact Us</Link>
          </li>
        </ul>

        {/* HAMBURGER BUTTON */}
        <button className='md:hidden text-white p-2' onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-0 z-[60] transition-all ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={toggleMenu}
        />
        
        <div className={`absolute top-0 left-0 h-full w-[280px] bg-[#0f0f0f] border-r border-[#6A1E99]/30 p-8 flex flex-col transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button onClick={toggleMenu} className="self-end text-white mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-6 font-serif">
            {/* Mobile Search Input */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e.target.value)}
                onKeyDown={(e: any) => { if (e.key === 'Enter') { handleSearch(e); toggleMenu(); } }}
                className="bg-transparent border-none outline-none text-white text-sm w-full"
              />
            </div>
            
            <Link href="/" className="text-white hover:text-[#FFC400]" onClick={toggleMenu}>Home</Link>
            <Link href="/#ab" className="text-white hover:text-[#FFC400]" onClick={toggleMenu}>About Us</Link>
            <Link href="/shop" className="text-white hover:text-[#FFC400]" onClick={toggleMenu}>Shop</Link>
            
            <button 
              className="text-lg hover:text-[#FFC400] flex items-center gap-2 text-left text-white" 
              onClick={() => { setIsCartOpen(true); toggleMenu(); }}
            >
              🛒 <span className="text-sm text-gray-400">({itemCount} items)</span>
            </button>

            <Link href="/#ct" className="bg-[#6A1E99] text-white p-2 rounded-md text-center mt-4" onClick={toggleMenu}>Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;