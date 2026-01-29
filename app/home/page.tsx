'use client';
import Link from 'next/link';
import Image from 'next/image';
import HeaderNav from '../HeaderNav/page'
import About from '../about/page'
import Product from '../product/page'
import ContactUs from '../contact/page'
import Footer from '../Footer/page'

const Hero = () => {
  return (
    <>
      <HeaderNav />
      <section className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center">
        <Image
          src="/images/Bhero1.png"
          alt="Hero Section"
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
          priority
        />
        
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl text-[#FFC400] font-serif font-bold mb-6 drop-shadow-lg">
            MQ's Fragrance
          </h1>
          
          <p className="text-white text-lg md:text-xl font-serif italic mb-4 opacity-90 tracking-wide">
            "Where Every Scent Tells a Story..."
          </p>
          
          <p className="text-white/80 text-sm md:text-lg font-light max-w-lg mb-10 leading-relaxed">
            Exceptional Perfumes & Concentrated Oils <br className="hidden md:block"/> Exclusively Selected for You
          </p>

          <Link href="/shop" className="group relative bg-white/5 border border-white/10 text-gray-300 font-serif py-2 px-8 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:text-white  shadow-xl">
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Shop Now</span>
          </Link>
        </div>
          
      </section>
      <About />
      <Product />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default Hero;