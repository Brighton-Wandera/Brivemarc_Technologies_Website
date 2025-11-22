const WhyChooseUs = () => {
    const features = [
        {
            icon: '⚡',
            title: 'Fast Delivery',
            description: 'Get your projects completed in record time without compromising quality',
            stat: '48 Hours',
            statLabel: 'Average Turnaround',
        },
        {
            icon: '🔒',
            title: 'Secure Solutions',
            description: 'Enterprise-grade security measures protecting your data and users',
            stat: '100%',
            statLabel: 'Secure Deployments',
        },
        {
            icon: '🚀',
            title: 'Modern Tech Stack',
            description: 'Cutting-edge technologies ensuring scalability and performance',
            stat: 'Latest',
            statLabel: 'Technologies',
        },
        {
            icon: '💬',
            title: 'Strong Support',
            description: '24/7 customer support ensuring your success at every step',
            stat: '24/7',
            statLabel: 'Available Support',
        },
    ];

    return (
        <section id="why-choose-us" className="relative bg-deep-black">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Why Choose <span className="gradient-text">Brivemarc</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We deliver excellence through innovation, quality, and unwavering commitment to your success
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card-hover p-8 text-center"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="text-6xl mb-6 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-serif font-bold text-white mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Stat */}
                            <div className="border-t border-white/10 pt-4">
                                <div className="text-2xl font-bold gradient-text mb-1">
                                    {feature.stat}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {feature.statLabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-16 glass-card p-8">
                    <h3 className="text-2xl font-serif font-bold text-center text-white mb-8">
                        Additional Benefits
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '✓', text: 'Free Consultation' },
                            { icon: '✓', text: 'Transparent Pricing' },
                            { icon: '✓', text: 'Agile Methodology' },
                            { icon: '✓', text: 'Quality Assurance' },
                            { icon: '✓', text: 'Post-Launch Support' },
                            { icon: '✓', text: 'Money-Back Guarantee' },
                        ].map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold flex-shrink-0">
                                    {benefit.icon}
                                </div>
                                <span className="text-gray-300">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl"></div>
        </section>
    );
};

export default WhyChooseUs;
