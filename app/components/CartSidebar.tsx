"use client";
import { useCart } from "./CartContext";

const CartSidebar = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, cartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    const phoneNumber = "2348152723947";
    
    const itemDetails = cart
      .map((item: any) => `• *${item.name}* (Qty: ${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}`)
      .join("\n");

    const message = `Hello MQ's Fragrance! I would like to place an order:\n\n${itemDetails}\n\n*Total: ₦${cartTotal.toLocaleString()}*`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // FIX: Using window.open with '_blank' keeps your website tab alive.
    // When the user clicks back in WhatsApp, they land on your site, not the redirect page.
    window.open(whatsappUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />

      <div className="relative w-[85%] md:w-full md:max-w-md bg-[#0A0A0A] h-full shadow-2xl border-l border-white/10 flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-end">
          <div>
            <h2 className="text-xl font-serif tracking-widest text-white uppercase">Your Bag</h2>
            {cart.length > 0 && (
              <button onClick={clearCart} className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-red-400 transition-colors mt-1 underline underline-offset-4">
                Clear Bag
              </button>
            )}
          </div>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-white pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 font-serif italic text-center mt-10">Your bag is currently empty.</p>
          ) : (
            cart.map((item: any) => (
              <div key={item.id} className="flex gap-4 items-center border-b border-white/5 pb-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-white/5" />
                <div className="flex-1">
                  <h3 className="text-white font-serif text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-[10px] uppercase tracking-tighter">Qty: {item.quantity}</p>
                  <p className="text-[#FFC400] font-bold text-sm">₦{item.price.toLocaleString()}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-red-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Checkout Section */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center text-white">
              <span className="font-serif uppercase tracking-widest text-sm">Total</span>
              <span className="text-xl font-bold text-[#FFC400]">₦{cartTotal.toLocaleString()}</span>
            </div>
            <button onClick={handleCheckout} className="w-full bg-white text-black p-2 rounded-lg font-bold uppercase tracking-[3px] text-xs hover:bg-[#6A1E99] hover:text-white transition-all duration-500">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;