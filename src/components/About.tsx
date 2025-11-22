import type { Founder } from '../types';

const About = () => {
    const founders: Founder[] = [
        {
            id: 1,
            name: 'Brighton',
            role: 'Co-Founder & Lead Developer',
            bio: 'Full-stack expert specializing in modern web technologies and AI integration',
        },
        {
            id: 2,
            name: 'Veronica',
            role: 'Co-Founder & Design Director',
            bio: 'Creative visionary bringing beautiful, user-centric designs to life',
        },
        {
            id: 3,
            name: 'Marcos',
            role: 'Co-Founder & Systems Architect',
            bio: 'Backend specialist ensuring scalable and robust system architecture',
        },
        {
            id: 4,
            name: 'Evans',
            role: 'Co-Founder & Marketing Strategist',
            bio: 'Digital marketing expert driving growth through strategic campaigns',
        },
    ];

    return (
        <section id="about" className="relative bg-gradient-to-b from-deep-black via-charcoal-200 to-deep-black">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        About <span className="gradient-text">Brivemarc Technologies</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We are a registered Kenyan technology agency committed to delivering world-class digital solutions.
                        Our team of passionate experts transforms ideas into reality through innovation, quality, and dedication.
                    </p>
                </div>

                {/* Company Values */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: '🎯',
                            title: 'Our Mission',
                            description: 'Empowering businesses with smart, secure technology solutions that drive growth and innovation',
                        },
                        {
                            icon: '👁️',
                            title: 'Our Vision',
                            description: 'To be Africa\'s leading technology partner, recognized for excellence and innovation',
                        },
                        {
                            icon: '⭐',
                            title: 'Our Values',
                            description: 'Integrity, innovation, quality, and customer-first approach in everything we do',
                        },
                    ].map((item, index) => (
                        <div key={index} className="glass-card-hover p-8 text-center">
                            <div className="text-5xl mb-4">{item.icon}</div>
                            <h3 className="text-xl font-serif font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Founders Section */}
                <div className="mb-12">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-white mb-4">
                        Meet Our <span className="gradient-text">Founding Team</span>
                    </h3>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Four visionaries united by a passion for technology and a commitment to excellence
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {founders.map((founder, index) => (
                            <div
                                key={founder.id}
                                className="glass-card-hover p-6 text-center group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Avatar Placeholder */}
                                <div className="relative mb-6 mx-auto w-32 h-32">
                                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-4xl font-serif font-bold text-deep-black group-hover:scale-110 transition-transform duration-300">
                                        {founder.name.charAt(0)}
                                    </div>
                                    <div className="absolute inset-0 rounded-full ring-4 ring-gold-400/30 group-hover:ring-gold-400/60 transition-all duration-300"></div>
                                </div>

                                <h4 className="text-xl font-serif font-bold text-white mb-2">{founder.name}</h4>
                                <p className="text-sm text-gold-400 mb-3 font-medium">{founder.role}</p>
                                <p className="text-sm text-gray-400 leading-relaxed">{founder.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="glass-card p-8 mt-16 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-white">Registered in Kenya</p>
                                <p className="text-sm text-gray-400">Official Business License</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-white">Expert Team</p>
                                <p className="text-sm text-gray-400">4 Dedicated Founders</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-white">Fast Delivery</p>
                                <p className="text-sm text-gray-400">Results in Minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
