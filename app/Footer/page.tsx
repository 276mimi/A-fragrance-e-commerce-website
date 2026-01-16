const page = () => {
    return (
        <>
            <footer className="bg-black py-5 px-9 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                
            <div className="text-center md:text-left">
                <h2 className="md:text- font-serif font-bold tracking-widest">
                    MQ'S <span className="text-[#6A1E99]">FRAGRANCE</span>
                </h2>
                <p className="text-[8px]  text-gray-600 uppercase tracking-[3px] mt-1">Where Every Scent Tells a Story</p>
            </div>
            
            <div className="flex gap-8 text-[7px] md:text-[9px] uppercase tracking-widest text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Shipping & Returns</a>
            </div>

            <div className="text-gray-600 text-[8px] md:text-[10px]">
                © 2026 MQ'S FRAGRANCE. ALL RIGHTS RESERVED.
            </div>

            </div>
            </footer>
        </>
    )
}

export default page;