export default function Stats() {
    const stats = [
        {
            value: '200K+',
            label: 'Recensioni 5 stelle',
        },
        {
            value: '€2B+',
            label: 'Risparmiati e investiti',
        },
        {
            value: '€13B+',
            label: 'Gestiti, tracciati e monitorati',
        },
    ];

    return (
        <section className="bg-white py-24 md:py-28">
            <div className="container-albert px-6 lg:px-20">
                <div className="relative max-w-4xl mx-auto text-center">
                    {/* Soft radial background */}
                    <div className="pointer-events-none absolute inset-x-[-40%] -top-24 h-[260px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_60%)]" />

                    <div className="relative">
                        {/* Heading */}
                        <h2 className="mb-10">
                            Oltre 20 milioni di clienti si fidano di{' '}
                            <span className="text-primary-brand">Waly</span>.
                        </h2>

                        {/* Stats */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col items-center">
                                    <p className="text-3xl md:text-4xl font-normal text-primary-text mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs md:text-sm text-dark-gray-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-10">
                            <a
                                href="#signup"
                                className="inline-flex items-center justify-center rounded-full bg-primary-brand px-7 py-3 text-sm font-semibold text-white hover:bg-[#0041CC] transition-colors duration-150"
                            >
                                Inizia ora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}