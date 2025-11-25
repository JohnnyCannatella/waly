export default function Hero() {
  return (
    <section className="relative min-h-[850px] md:min-h-screen flex items-end justify-center px-6 bg-gradient-to-b from-white-100 to-blue-50 overflow-hidden">
      {/* Rotating Background Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-1 md:translate-y-70">
            <div className="rotating-circle">
                <img
                    src="/introducing-waly-hero.webp"
                    alt="Waly Background"
                    className="w-full h-full object-contain scale-125 md:scale-150"
                    style={{ transformOrigin: 'center' }}
                />
            </div>
        </div>

      {/* Content */}
      <div className="container-albert relative z-10 text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
            <h2 className="mb-8">
                 Introduciamo <span className="text-primary-brand">Waly</span>.
            </h2>
            <h2 className="mb-8">
                Il tuo patrimonio, finalmente chiaro.
            </h2>

          {/* Subtitle */}
          <p className="max-w-xl mx-auto mb-12 font-medium">
            Traccia investimenti, monitora conti e fai crescere il tuo patrimonio con la piattaforma completa per gestire il tuo denaro.
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center">
            <a href="#pricing" className="button button-primary">
              Inizia gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
