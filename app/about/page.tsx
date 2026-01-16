
const page = () => {
  return (
    <section id="ab" className="py-20 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-8 flex flex-col items-center gap-12">
        
        <div className="text-center space-y-6 max-w-3xl">
          <h2 className="inline-block text-xl md:text-2xl font-serif font-bold border-b-2 border-[#6A1E99] pb-2 mb-4 tracking-widest">
            ABOUT US
          </h2>
          <p className="text-base md:text-xl font-light leading-relaxed opacity-80">
            Our mission is to connect you with the scent that perfectly compliments your style and personality.
          </p>
          <p className="text-base md:text-xl font-light leading-relaxed opacity-80">
            We offer a diverse range, including luxurious spray perfumes and deeply concentrated oil perfumes, all chosen for their quality, longevity, and unforgettable character.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
          {[
            { title: "Client Satisfaction", sub: "Quality Guaranteed" },
            { title: "100% Authentic", sub: "Perfume Oils" },
            { title: "1.5k+", sub: "Client Reviews" }
          ].map((box, i) => (
            <div key={i} className="group p-8 text-center bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 hover:border-[#FFC400]/50 hover:bg-white/10 hover:-translate-y-2">
              <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-[#FFC400] transition-colors">
                {box.title}
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-tighter">{box.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;