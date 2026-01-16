const page = () => {
    return (
        <>
            <section id="ct" className="py-10 md:py-6 px-10  bg-black text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2 items-center">
                
                {/* Left Side: Text */}
                <div className="space-y-6">
                <h2 className="text-xl font-serif font-bold tracking-wider">
                    GET IN <span className="text-[#6A1E99]">TOUCH</span>
                </h2>
                <p className="text-gray-400 font-light max-w-md leading-relaxed">
                    Need help choosing a fragrance confidently? <br />Reach out to us directly
                </p>
                
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📍</div>
                    <p className="text-sm text-gray-300">Abuja, Nigeria</p>
                    </div>
                    <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">📞</div>
                    <p className="text-sm text-gray-300">+234 815 272 3947</p>
                    </div>
                </div>
                </div>


                <div className="bg-white/[0.03] border border-white/10 p-6 md:p-8 rounded-[2rem] text-center space-y-6 backdrop-blur-sm">
                <h3 className="text-xl font-serif italic tracking-wide text-white">Direct Inquiry</h3>
                
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed mx-auto">
                    The fastest way to reach us is via WhatsApp.
                </p>

                <a 
                    href="https://wa.me/2348152723947" 
                    className="inline-block w-full py-4 bg-white text-black rounded-xl font-bold uppercase tracking-[3px] text-[10px] hover:bg-[#FFC400] hover:text-black transition-all duration-500 shadow-lg"
                >
                    Message on WhatsApp
                </a>
                </div>

            </div>
            </section>
        </>
    )
}
export default page;