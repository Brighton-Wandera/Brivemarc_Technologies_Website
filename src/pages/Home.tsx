import { Link } from 'react-router-dom';
import { services } from '../data/services';

const Home = () => {
    // Featured services to show on home page
    const featuredServices = services.slice(0, 6);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal-200 via-deep-black to-deep-black">
                {/* Simple gradient background - no particles */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-400/5"></div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto py-20">
                    {/* Badge */}
                    <div className="inline-flex items-center glass-card px-6 py-2 mb-8 animate-fade-in">
                        <span className="h-2 w-2 rounded-full bg-gold-400 mr-3"></span>
                        <span className="text-sm text-gray-300">Registered in Kenya • World-Class Solutions</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        <span className="gradient-text">Smart</span> •{' '}
                        <span className="gradient-text">Secure</span> Solutions
                    </h1>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-8">
                        Get Your Job Done in <span className="text-gold-400">Minutes</span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Premium technology agency delivering world-class web development, AI automation,
                        digital marketing, and innovative solutions across Kenya and beyond
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link to="/contact" className="btn-primary">
                            Get a Quote
                        </Link>
                        <Link to="/services" className="btn-secondary">
                            Explore Services
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                        {[
                            { value: '50+', label: 'Projects Delivered' },
                            { value: '11', label: 'Services Offered' },
                            { value: '24/7', label: 'Support' },
                            { value: '100%', label: 'Client Satisfaction' },
                        ].map((stat, index) => (
                            <div key={index} className="glass-card p-6 rounded-xl">
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section id="services" className="relative bg-deep-black py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Comprehensive technology solutions designed to elevate your business
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredServices.map((service) => (
                            <div
                                key={service.id}
                                className="glass-card p-8 rounded-2xl hover:border-gold-400/50 transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="text-5xl mb-4">{service.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                    {service.shortDescription}
                                </p>

                                {/* Pricing */}
                                <p className="text-gold-400 font-medium text-sm mb-4">
                                    {service.pricing}
                                </p>

                                {/* Learn More */}
                                <Link
                                    to={`/services#${service.slug}`}
                                    className="text-sm text-gray-300 hover:text-gold-400 transition-colors inline-flex items-center"
                                >
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* View All Services Button */}
                    <div className="text-center">
                        <Link to="/services" className="btn-secondary">
                            View All {services.length} Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section id="contact-cta" className="relative bg-gradient-to-b from-deep-black to-charcoal-200 py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-card p-12 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-400/10"></div>

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Ready to Start Your Project?
                            </h2>

                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                                Let's discuss how we can help you achieve your goals. Get a free consultation today.
                            </p>

                            {/* Contact Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <a
                                    href="tel:+254717770536"
                                    className="glass-card p-6 rounded-xl hover:border-gold-400/50 transition-all group"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Call Us</p>
                                            <p className="text-white font-medium group-hover:text-gold-400 transition-colors">0717770536</p>
                                        </div>
                                    </div>
                                </a>

                                <a
                                    href="mailto:info@brivemarc.co.ke"
                                    className="glass-card p-6 rounded-xl hover:border-gold-400/50 transition-all group"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Email Us</p>
                                            <p className="text-white font-medium group-hover:text-gold-400 transition-colors">info@brivemarc.co.ke</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* CTA Button */}
                            <Link to="/contact" className="btn-primary inline-block">
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
