'use client';
import { Suspense } from 'react'; // Added for build safety
import { useSearchParams } from 'next/navigation';
import HeaderNav from "../HeaderNav/page";
import perf1 from "../../public/Shopimages/clubdenuit.jpeg"; 
import perf2 from "../../public/Shopimages/perf2.jpeg";
import perf3 from "../../public/Shopimages/perf3.jpeg";
import perf7 from "../../public/Shopimages/ramz.jpeg";
import perf4 from "../../public/Shopimages/perf4.jpeg";
import perf5 from "../../public/Shopimages/perf5.jpeg";
import nine from "../../public/Shopimages/9pm.jpeg";
import Asad from "../../public/Shopimages/Asad&Yara.jpeg";
import Badee from "../../public/Shopimages/Badee al oud.jpeg";
import Eclaire from "../../public/Shopimages/eclaire.jpeg";
import Khamrah from "../../public/Shopimages/khamrah.jpeg";
import Khadlaj from "../../public/Shopimages/perf8.jpeg";
import Footer from '../Footer/page';
import { useCart } from "../components/CartContext";

// Separated the content to handle the Search Params
const ShopContent = () => {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search')?.toLowerCase() || "";

  const allProducts = [
    { id: 3, name: "Club de Nuit", price: 50000, category: "Spray", img: perf1 },
    { id: 4, name: "Ramz Lattafa", price: 25000, category: "Spray", img: perf7 },
    { id: 9, name: "Badee Al Oud", price: 45000, category: "Spray", img:Badee},
    { id: 8, name: "Asad&Yara Lattafa", price: 30000, category: "Spray", img:Asad},
    { id: 1, name: "Lattafa Hayaati", price: 30000, category: "Spray", img: perf2 },
    { id: 2, name: "Ajayeb Dubai", price: 35000, category: "Oil", img: perf3 },
    { id: 5, name: "Lamsat Harir", price: 20000, category: "Spray", img: perf4 },
    { id: 6, name: "Suspenso", price: 25000, category: "Spray", img: perf5 },
    { id: 7, name: "9PM", price: 40000, category: "Spray", img:nine},
    { id: 10, name: "Eclaire", price: 50000, category: "Spray", img:Eclaire},
    { id: 11, name: "Khamrah", price: 25000, category: "Spray", img:Khamrah},
    { id: 12, name: "Khadlaj Island Vanilla Dunes", price: 35000, category: "Spray", img:Khadlaj},
    // { id: 12, name: "9PM", price: 40000, category: "Spray", img:nine},

  ];

  // Logic to filter products based on the search query
  const filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section id="shop" className="py-10 px-6 max-w-7xl mx-auto text-white">
<div className="text-center mb-16">
  <h1 className="inline-block text-xl  font-serif font-bold border-b-2 border-[#6A1E99] pb-2 tracking-widest">
    {searchQuery ? (
      <span className="lowercase font-medium">results for: {searchQuery}</span>
    ) : (
      <span className="uppercase">SHOP</span>
    )}
  </h1>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-0">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="max-w-[220px] md:max-w-[280px] mx-auto w-full group">
              <div className="relative bg-white/5 border border-white/10 p-4 rounded-3xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2 shadow-2xl">
                <div className="aspect-square rounded-2xl overflow-hidden mb-2">
                   <img 
                     src={product.img.src} 
                     alt={product.name} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                </div>
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center">
                  <button 
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.img.src
                    })}
                    className="bg-white px-2 py-1 rounded-full border border-[#6A1E99] shadow-xl transition-all duration-300 text-[#6A1E99] font-light font-serif hover:text-black hover:border-[#6A1E99]"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              <div className="mt-10 text-center">
                <p className="text-gray-500 text-[10px] uppercase tracking-[3px] mb-1">{product.category}</p>
                <h3 className="text-lg font-serif font-medium group-hover:text-[#FFC400] transition-colors">{product.name}</h3>
                <p className="text-[#FFC400] font-bold text-base mt-1">₦{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 font-serif italic">No fragrances found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

const ShopPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeaderNav />
      {/* Suspense is required by Next.js when using useSearchParams */}
      <Suspense fallback={<div className="text-white text-center py-20">Loading Shop...</div>}>
        <ShopContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default ShopPage;