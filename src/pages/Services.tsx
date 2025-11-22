import { useState } from 'react';
import { services, serviceCategories } from '../data/services';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredServices = activeCategory === 'All'
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <div className="min-h-screen bg-deep-black pt-24">
            {/* Page Header */}
            <section className="bg-gradient-to-b from-charcoal-200 to-deep-black py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Comprehensive technology solutions designed to elevate your business and drive measurable results
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 sticky top-20 z-40 bg-deep-black/95 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {serviceCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm ${activeCategory === category
                                        ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-deep-black'
                                        : 'glass-card text-gray-300 hover:text-gold-400 hover:border-gold-400/50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {filteredServices.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.slug}
                                className="glass-card p-8 md:p-12"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    {/* Service Info */}
                                    <div className="lg:col-span-2">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="text-5xl">{service.icon}</div>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                                                    {service.name}
                                                </h2>
                                                <p className="text-gold-400 font-medium">{service.category}</p>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {service.fullDescription}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h3 className="text-lg font-bold text-white mb-3">Features:</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.features.map((feature, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-gray-300 text-sm">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        {service.technologies && (
                                            <div className="mb-6">
                                                <h3 className="text-lg font-bold text-white mb-3">Technologies:</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.technologies.map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Sidebar */}
                                    <div className="space-y-6">
                                        {/* Pricing */}
                                        <div className="glass-card p-6">
                                            <h3 className="text-sm font-bold text-gray-400 mb-2">Pricing</h3>
                                            <p className="text-2xl font-bold text-gold-400 mb-4">{service.pricing}</p>
                                            <a
                                                href="/contact"
                                                className="btn-primary w-full text-center block"
                                            >
                                                Get Quote
                                            </a>
                                        </div>

                                        {/* Benefits */}
                                        <div className="glass-card p-6">
                                            <h3 className="text-sm font-bold text-gray-400 mb-3">Key Benefits</h3>
                                            <ul className="space-y-2">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start gap-2">
                                                        <span className="text-gold-400 mt-1">✓</span>
                                                        <span className="text-gray-300 text-sm">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredServices.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No services found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-b from-deep-black to-charcoal-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="glass-card p-12">
                        <h2 className="text-3xl font-serif font-bold text-white mb-4">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Don't see exactly what you're looking for? We offer custom solutions tailored to your specific needs.
                        </p>
                        <a href="/contact" className="btn-primary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
