"use client";

import React, { useEffect, useState } from 'react';
import { getGrainDataUri } from '@/lib/grain';

// High-quality ambient sunset/gradient image
const AMBIENT_IMAGE_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop";

const AmbientBackground: React.FC = () => {
    const [grainUri, setGrainUri] = useState<string>('');

    useEffect(() => {
        // Generate grain texture on client-side
        setGrainUri(getGrainDataUri());
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
            <div className="absolute inset-0 w-full h-full">
                {/* Layer 1: Base ambient image with slow zoom animation - Vibrant */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center animate-ambient-scale will-change-transform"
                    style={{
                        backgroundImage: `url(${AMBIENT_IMAGE_URL})`,
                        transform: 'translateZ(0)'
                    }}
                />

                {/* Layer 2: Subtle blur to soften but keep color */}
                <div
                    className="absolute inset-0 backdrop-blur-[30px]"
                    aria-hidden="true"
                />

                {/* Layer 3: Film grain texture */}
                {grainUri && (
                    <div
                        className="absolute inset-0 mix-blend-overlay opacity-[0.15]"
                        style={{
                            backgroundImage: `url('${grainUri}')`,
                            backgroundRepeat: 'repeat',
                            filter: 'contrast(120%) brightness(100%)'
                        }}
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    );
};

export default AmbientBackground;
