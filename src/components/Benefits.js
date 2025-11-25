export default function Benefits() {
    const miniCards = [
        {
            icon: '📊',
            title: 'Categorizzazione automatica',
            text: 'La categorizzazione smart organizza automaticamente le tue transazioni.',
        },
        {
            icon: '🧠',
            title: 'Monitora le spese',
            text: 'Tieni sotto controllo le tue spese e il flusso di cassa mensile.',
        },
        {
            icon: '📅',
            title: 'Traccia bollette e abbonamenti',
            text: 'Rileviamo bollette e abbonamenti ricorrenti, aiutandoti a ridurli o cancellarli.',
        },
    ];

    return (
        <section id="benefits" className="bg-white py-24 md:py-32">
            <div className="container-albert px-6 lg:px-20">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="mb-4">
                        Sapere dove vanno i tuoi <span className="text-primary-brand">soldi</span>
                    </h2>
                    <p>
                        Monitora spese e flussi di cassa, tieni traccia delle bollette
                        e trova nuove opportunità di risparmio.
                    </p>
                    <div className="mt-10">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full border border-slate-900 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200"
                        >
                            Scopri di più
                        </button>
                    </div>
                </div>

                {/* Main card + floating callouts (Albert-style) */}
                <div className="mt-16 md:mt-20 flex justify-center">
                    <div className="relative w-full max-w-3xl">
                        {/* Soft background wave */}
                        <div className="absolute -inset-x-32 -top-16 h-40 bg-gradient-to-r from-blue-400/40 via-indigo-200/50 to-blue-500/40 blur-3xl opacity-70 pointer-events-none" />

                        {/* Main dashboard card */}
                        <div className="relative rounded-[32px] bg-white border border-gray-200 shadow-card-xl overflow-hidden">
                            {/* Qui metterai l'immagine principale del grafico */}
                            <img
                                src="/images/benefits-dashboard.png"
                                alt="Spending and cash flow dashboard"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating card - left (in alto) */}
                        <div className="hidden md:block absolute -left-40 top-20 w-72">
                            <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-card-lg border border-gray-200 p-4">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-100 text-primary-brand mb-3">
                                    {/* Icona / emoji personalizzabile */}
                                    <span role="img" aria-label="budget">📊</span>
                                </div>
                                <h3 className="text-sm font-semibold text-primary-text mb-1">
                                    Track your monthly cash flow
                                </h3>
                                <p className="text-xs text-dark-gray-1">
                                    Track cash flow, bills, and subscriptions to find savings and lower bills.
                                </p>
                            </div>
                        </div>

                        {/* Floating card - right (in basso) */}
                        <div className="hidden lg:block absolute -right-24 bottom-20 w-72">
                            <div className="rounded-2xl bg-white/95 backdrop-blur-sm shadow-card-lg border border-gray-200 p-4 flex items-start gap-3">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 text-green-600 flex-shrink-0">
                                     <span role="img" aria-label="budget">✅</span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary-text mb-1">
                                        You have $600 to spend
                                    </h3>
                                    <p className="text-xs text-dark-gray-1 mb-2">
                                        between June and August.
                                    </p>
                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-dark-gray-1">Budget</span>
                                </div>
                            </div>
                        </div>

                        {/* Versione mobile delle card (stack sotto) */}
                        <div className="mt-8 grid gap-4 md:hidden">
                            <div className="rounded-2xl bg-white shadow-card-lg border border-gray-200 p-4">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-100 text-primary-brand mb-3">
                  <span role="img" aria-label="budget">
                    📊
                  </span>
                                </div>
                                <h3 className="text-sm font-semibold text-primary-text mb-1">
                                    Track your monthly cash flow
                                </h3>
                                <p className="text-xs text-dark-gray-1">
                                    Track cash flow, bills, and subscriptions to find savings and lower bills.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white shadow-card-lg border border-gray-200 p-4 flex items-start gap-3">
                                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-green-100 text-green-600 flex-shrink-0">
                  <span role="img" aria-label="budget">
                    ✅
                  </span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-primary-text mb-1">
                                        You have $600 to spend
                                    </h3>
                                    <p className="text-xs text-dark-gray-1 mb-2">
                                        between June and August.
                                    </p>
                                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-[11px] font-medium text-dark-gray-1">
                    Budget
                  </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Mini feature cards sotto (come nello screenshot) */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {miniCards.map((card, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-gray-200 bg-white shadow-card-md px-6 py-7"
                        >
                            <div className="mb-4 text-2xl">
                                <span role="img" aria-hidden="true">
                                  {card.icon}
                                </span>
                            </div>
                            <h3 className="text-sm font-semibold text-primary-text mb-2">
                                {card.title}
                            </h3>
                            <p className="text-xs text-dark-gray-1">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}