export default function Footer() {
    const footerSections = [
        {
            title: 'Product',
            links: [
                { label: 'Funzionalità', href: '#features' },
                { label: 'Prezzi', href: '#pricing' },
                { label: 'Integrazioni', href: '#integrations' },
                { label: 'Demo', href: '#demo' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'Chi siamo', href: '#about' },
                { label: 'Carriere', href: '#careers' },
                { label: 'Contatti', href: '#contact' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { label: 'Blog', href: '#blog' },
                { label: 'Guide', href: '#guides' },
                { label: 'Supporto', href: '#support' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Termini di servizio', href: '#terms' },
                { label: 'Cookie Policy', href: '#cookies' },
            ],
        },
    ];

    return (
        <footer className="bg-white">
            <div className="container-albert px-6 lg:px-20">
                {/* Top row: logo + links */}
                <div className="py-12 md:py-16">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                        {/* Brand */}
                        <div>
                            <a href="#" className="inline-flex items-center gap-2 mb-4">
                <span className="text-xl font-semibold tracking-tight text-primary-text">
                  Waly
                </span>
                            </a>
                            <p className="max-w-sm text-sm text-dark-gray-1">
                                La piattaforma per avere una visione chiara e completa del tuo denaro,
                                proprio come su Albert.
                            </p>
                        </div>

                        {/* Link columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 text-sm">
                            {footerSections.map((section) => (
                                <div key={section.title}>
                                    <p className="mb-3 font-semibold text-primary-text">
                                        {section.title}
                                    </p>
                                    <ul className="space-y-2.5">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-dark-gray-1 hover:text-primary-text transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom row: copyright + legal + socials */}
                <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-dark-gray-1">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <span>© {new Date().getFullYear()} Waly.</span>
                        <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-dark-gray-1" />
                        <span>All rights reserved.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="#privacy"
                            className="hover:text-primary-text transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#terms"
                            className="hover:text-primary-text transition-colors"
                        >
                            Termini
                        </a>
                        <a
                            href="#cookies"
                            className="hover:text-primary-text transition-colors"
                        >
                            Cookie
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="#twitter"
                            aria-label="Twitter"
                            className="text-dark-gray-1 hover:text-primary-text transition-colors"
                        >
                            X
                        </a>
                        <a
                            href="#linkedin"
                            aria-label="LinkedIn"
                            className="text-dark-gray-1 hover:text-primary-text transition-colors"
                        >
                            in
                        </a>
                        <a
                            href="#github"
                            aria-label="GitHub"
                            className="text-dark-gray-1 hover:text-primary-text transition-colors"
                        >
                            GH
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}