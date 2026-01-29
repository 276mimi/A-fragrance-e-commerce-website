'use client'
import React from 'react'
import Link from 'next/link'
import { useCart } from "../components/CartContext"; 

import perf1 from '../../public/Shopimages/perf1.jpeg'
import perf2 from '../../public/Shopimages/perf2.jpeg'
import perf3 from '../../public/Shopimages/perf3.jpeg'
import perf4 from '../../public/Shopimages/perf4.jpeg'
import perf5 from '../../public/Shopimages/perf5.jpeg'
import perf6 from '../../public/Shopimages/perf6.jpeg'
import perf7 from '../../public/Shopimages/perf7.jpeg'
import perf8 from '../../public/Shopimages/perf8.jpeg'

const ProductsSection = () => {
    // 1. Pulled setIsCartOpen from the hook
    const { addToCart, setIsCartOpen } = useCart(); 

    // 2. Helper function to add item AND slide out the cart
    const handleAddToCart = (product: any) => {
      addToCart(product);
      setIsCartOpen(true); // This opens the sidebar immediately!
    };

    return (
        <section id="pr" className="text-white py-10 md:pl-60 ">
          <div className="text-center space-y-6 max-w-3xl">
            <h2 className="inline-block text-xl md:text-2xl font-serif font-bold border-b-2 border-[#6A1E99] pb-2 mb-7 tracking-widest">
              PRODUCTS
            </h2>

            <div className='flex flex-col lg:flex-row gap-8'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-12 md:gap-10 gap-x-6 '>

                {/* PRODUCT 1: Ajayeb Dubai */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf3.src} alt='Ajayeb Dubai' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] left-0 right-0 flex justify-center z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 2, name: "Ajayeb Dubai", price: 35000, image: perf3.src })} 
                        className='flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Ajayeb Dubai</p></i>
                    <p className='text-[#ffc400] font-bold'>₦35,000</p>
                  </div>
                </div>

                {/* PRODUCT 2: Club de nuit */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf1.src} alt='Club de nuit' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] flex justify-center w-full z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 3, name: "Club de Nuit", price: 50000, image: perf1.src })} 
                        className='flex gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Club de nuit intense black</p></i>
                    <p className='text-[#ffc400] font-bold'>₦50,000</p>
                  </div>
                </div>

                {/* PRODUCT 3: Ramz Lattafa */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf7.src} alt='Ramz Lattafa' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] flex justify-center w-full z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 4, name: "Ramz Lattafa", price: 25000, image: perf7.src })} 
                        className='flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Ramz Lattafa</p></i>
                    <p className='text-[#ffc400] font-bold'>₦25,000</p>
                  </div>
                </div>

                {/* PRODUCT 4: Ramz Lattafa Gold */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf8.src} alt='Ramz Lattafa' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] flex justify-center w-full z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 5, name: "Ramz Lattafa Gold", price: 25000, image: perf8.src })} 
                        className='flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Ramz Lattafa</p></i>
                    <p className='text-[#ffc400] font-bold'>₦25,000</p>
                  </div>
                </div>

                {/* PRODUCT 5: Lattafa Hayaati */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf2.src} alt='Lattafa Hayaati' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] flex justify-center w-full z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 1, name: "Lattafa Hayaati", price: 30000, image: perf2.src })} 
                        className='flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Lattafa Hayaati</p></i>
                    <p className='text-[#ffc400] font-bold'>₦30,000</p>
                  </div>
                </div>

                {/* PRODUCT 6: Ajayeb Dubai (Bottom Row) */}
                <div className='group max-w-[220px] mx-auto w-full bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl'>
                  <div className="relative">
                    <div className="overflow-hidden rounded-3xl">
                      <img src={perf3.src} alt='Ajayeb Dubai' className='w-full h-auto rounded-3xl transition-transform duration-700 group-hover:scale-110' />
                    </div>
                    <div className="absolute top-[90%] flex justify-center w-full z-10">
                      <button 
                        onClick={() => handleAddToCart({ id: 6, name: "Ajayeb Dubai Black", price: 35000, image: perf3.src })} 
                        className='flex items-center gap-2 bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]'
                      >
                        <p>🛒 Add to cart</p>
                      </button>
                    </div>
                  </div>
                  <div className='pt-7'>
                    <i><p className='text-white font-serif font-medium'>Ajayeb Dubai</p></i>
                    <p className='text-[#ffc400] font-bold'>₦35,000</p>
                  </div>
                </div>

              </div>
            </div>

            <Link href="/shop" className="bg-white/5 border border-white/10 text-gray-400 font-sans uppercase tracking-[4px] px-10 py-3 rounded-[2rem] transition-all duration-500 hover:bg-white/10 hover:border-[#FFC400]/50 text-sm mt-4 inline-block">
              Shop More
            </Link>
          </div>
        </section>
    )
}
export default ProductsSection;