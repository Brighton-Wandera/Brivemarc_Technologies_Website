import type { SocialLink } from '../types';

const SocialProof = () => {
    const socialLinks: SocialLink[] = [
        {
            platform: 'YouTube',
            url: 'https://youtube.com/@Brivemarc-technologies',
            icon: '▶️',
        },
        {
            platform: 'LinkedIn',
            url: 'https://linkedin.com/company/brivemarc-technologies',
            icon: '💼',
        },
        {
            platform: 'Twitter',
            url: 'https://twitter.com/Brivemarc-technologies',
            icon: '🐦',
        },
        {
            platform: 'Instagram',
            url: 'https://instagram.com/Brivemarc-technologies',
            icon: '📷',
        },
        {
            platform: 'Facebook',
            url: 'https://facebook.com/Brivemarc-technologies',
            icon: '📘',
        },
    ];

    return (
        <section id="social-proof" className="relative bg-gradient-to-b from-deep-black via-charcoal-200 to-deep-black">
            <div className="section-container">
                <div className="glass-card p-12 text-center">
                    {/* Registered Badge */}
                    <div className="mb-8">
                        <div className="inline-flex items-center glass-card px-8 py-4 mb-6">
                            <svg className="w-12 h-12 text-gold-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div className="text-left">
                                <p className="text-2xl font-serif font-bold text-white mb-1">Officially Registered in Kenya</p>
                                <p className="text-gray-400">Licensed & Certified Technology Agency</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-12">
                        <h3 className="text-3xl font-serif font-bold text-white mb-4">
                            Connect With Us
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Follow <span className="text-gold-400 font-medium">@Brivemarc-technologies</span> on all social media platforms
                        </p>

                        {/* Social Links */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card-hover p-6 flex flex-col items-center min-w-[120px]"
                                >
                                    <div className="text-4xl mb-3">{social.icon}</div>
                                    <p className="text-white font-medium">{social.platform}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                            <p className="text-gray-400">Social Media Followers</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                            <p className="text-gray-400">Video Tutorials</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold gradient-text mb-2">5★</div>
                            <p className="text-gray-400">Average Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
