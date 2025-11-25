'use client';

import { useState } from 'react';

export default function Features() {
    const tabs = [
        {
            id: 'budget',
            label: 'Budget',
            icon: '📊',
            description:
                'Crea un budget personalizzato, traccia le spese, monitora le bollette e trova nuovi modi per risparmiare.',
            image: '/images/features-dashboard.png', // <--- qui metterai le tue immagini
            imageDesktop: '/images/features-dashboard-desktop.png',
            imageMobile: '/images/features-dashboard-mobile.png',
        },
        {
            id: 'accounts',
            label: 'Accounts',
            icon: '🏦',
            description:
                'Collega tutti i tuoi conti in un unico posto per avere sempre una visione chiara del tuo denaro.',
            image: '/images/features-accounts.png',
        },
        {
            id: 'bank',
            label: 'Bank',
            icon: '💳',
            description:
                'Gestisci entrate e uscite, trasferimenti e movimenti bancari con una panoramica semplice e intuitiva.',
            image: '/images/features-bank.png',
        },
        {
            id: 'save',
            label: 'Save',
            icon: '💾',
            description:
                'Imposta obiettivi di risparmio automatici per raggiungere più velocemente i tuoi traguardi.',
            image: '/images/features-save.png',
        },
        {
            id: 'invest',
            label: 'Invest',
            icon: '📈',
            description:
                'Monitora i tuoi investimenti e scopri opportunità per far crescere il tuo patrimonio.',
            image: '/images/features-invest.png',
        },
        {
            id: 'protect',
            label: 'Protect',
            icon: '🛡️',
            description:
                'Proteggi il tuo denaro e i tuoi dati con strumenti di sicurezza avanzati.',
            image: '/images/features-protect.png',
        },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <section id="features" className="bg-white py-24 md:py-28">
            <div className="container-albert px-6 lg:px-20">
                {/* Heading + tabs + testo */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="mb-8">
                        Waly vede il quadro completo
                        <br />
                        delle tue finanze.
                    </h2>

                    {/* Tabs row */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-2 py-1 mb-8">
                        {tabs.map((tab) => {
                            const isActive = activeTab.id === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative inline-flex items-center gap-2 rounded-full px-8 py-3 text-[16px] font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'text-slate-600'
                                            : 'text-black'
                                    }`}
                                >
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full bg-slate-100 shadow-card-lg" />
                                    )}
                                    <span className="relative flex items-center gap-1">
                                    <span className="text-base">{tab.icon}</span>
                                    <span className={isActive ? 'font-semibold' : ''}>
                                      {tab.label}
                                    </span>
                                  </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Descrizione */}
                    <p className="text-sm font-medium text-gray-800 max-w-xl mx-auto mb-8">
                        {activeTab.description}
                    </p>

                    {/* CTA */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-slate-900 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-200"
                    >
                        Scopri di più
                    </button>
                </div>

                {/* Image panel */}
                <div className="mt-4 md:mt-8 flex justify-center">
                    <div className="relative w-full max-w-4xl">
                        {/* Desktop card */}
                        <div className="rounded-[32px] bg-white shadow-card-xl overflow-hidden border border-gray-100">
                            <img
                                src={activeTab.imageDesktop}
                                alt={`${activeTab.label} desktop`}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Phone card */}
                        <div className="absolute -right-4 lg:-right-20 -bottom-6 md:-bottom-10 w-[27%] max-w-xs rounded-[32px] bg-white border border-gray-200 shadow-card-xl overflow-hidden">
                            <img
                                src={activeTab.imageMobile}
                                alt={`${activeTab.label} mobile`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}