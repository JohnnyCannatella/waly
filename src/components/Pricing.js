export default function Pricing() {
    const plans = [
        {
            name: 'Starter',
            price: '€0',
            period: '/mese',
            description: 'Perfetto per iniziare.',
            features: [
                'Fino a 10 holdings',
                '2 conti bancari',
                'Dashboard base',
                'Net worth tracking',
                'Export CSV',
            ],
            cta: 'Inizia gratis',
            featured: false,
        },
        {
            name: 'Pro',
            price: '€9',
            period: '/mese',
            description: 'Tutti gli strumenti per gestire seriamente il tuo patrimonio.',
            badge: 'PIÙ POPOLARE',
            features: [
                'Holdings illimitati',
                'Conti illimitati',
                'Integrazione broker',
                'FIRE tracker',
                'Rebalancing alerts',
                'Analytics avanzate',
                'Export PDF',
                'Supporto prioritario',
            ],
            cta: 'Inizia ora',
            featured: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'Soluzioni su misura per team e aziende.',
            features: [
                'Tutto in Pro',
                'Multi‑utente',
                'API access',
                'White‑label',
                'Onboarding dedicato',
                'SLA garantito',
                'Custom integrations',
            ],
            cta: 'Parla con noi',
            featured: false,
        },
    ];

    return (
        <section id="pricing" className="bg-white py-24 md:py-32">
            <div className="container-albert px-6 lg:px-20">
                {/* Section header – stesso stile degli altri componenti */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                    <h2 className="mb-4">
                        Scegli il piano giusto
                        <br />
                        per il tuo denaro.
                    </h2>
                    <p>
                        Inizia gratis e passa a un piano superiore solo quando ti serve.
                        Nessun vincolo, puoi cancellare in qualsiasi momento.
                    </p>
                </div>

                {/* Pricing cards – Albert‑style */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative rounded-3xl bg-white border border-border-color px-6 py-7 md:px-7 md:py-8 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-transform duration-200 ${
                                plan.featured ? 'md:-translate-y-1 md:shadow-[0_18px_70px_rgba(15,23,42,0.12)]' : ''
                            }`}
                        >
                            {/* Badge piano principale */}
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-black text-white px-4 py-1 text-[11px] font-semibold tracking-wide">
                    {plan.badge}
                  </span>
                                </div>
                            )}

                            {/* Header piano */}
                            <div className="mb-6">
                                <h3 className="text-base font-semibold text-primary-text mb-1">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-dark-gray-1 mb-4">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-semibold text-primary-text">
                    {plan.price}
                  </span>
                                    {plan.period && (
                                        <span className="text-xs text-dark-gray-1">{plan.period}</span>
                                    )}
                                </div>
                            </div>

                            {/* Lista feature */}
                            <ul className="mb-6 space-y-2.5">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[2px] inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-[10px] text-primary-brand">
                      ✓
                    </span>
                                        <span className="text-xs text-dark-gray-1">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#signup"
                                className={`inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-150 ${
                                    plan.featured
                                        ? 'bg-primary-brand text-white hover:bg-[#0041CC]'
                                        : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                                }`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Info aggiuntive – stile sottile */}
                <div className="mt-14 md:mt-16 text-center text-xs text-dark-gray-1">
                    Nessun costo nascosto. I prezzi includono tutte le tasse applicabili.
                </div>
            </div>
        </section>
    );
}