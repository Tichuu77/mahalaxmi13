'use client';
import React, { useState, useEffect } from 'react';
 

 

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
   

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url("/hero-bg.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          paddingTop: '80px'
        }}
      >
        {/* Dark Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 80, 33, 0.35) 0%, rgba(30, 55, 15, 0.39) 50%, rgba(27, 70, 25, 0.39) 100%)'
          }}
        ></div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-3xl space-y-6 sm:space-y-8">

            {/* Main Heading */}
            <h1
              className="font-bold leading-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                lineHeight: '1.1',
                letterSpacing: '0.01em',
                color: 'var(--primary-foreground)'
              }}
            >
              Mahalaxmi Nagar - 45
            </h1>

            {/* Stats Row */}
            <div
              className={`transition-all duration-700 delay-300 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white/10  border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                <div 
                  className="font-bold mb-1 sm:mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  70+
                </div>
                <div 
                  className="text-white/80"
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Projects
                </div>
              </div>
              
              <div className="bg-white/10  border border-white/20 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                <div 
                  className="font-bold mb-1 sm:mb-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  17111+
                </div>
                <div 
                  className="text-white/80"
                  style={{
                    fontSize: 'clamp(0.75rem, 2vw, 1rem)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  Happy Clients
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <a href="#faq_sec">
                <button
                  className="rounded hover:cursor-pointer font-bold tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg uppercase w-full sm:w-auto touch-manipulation"
                  style={{
                    background: 'var(--secondary)',
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(13px, 2.5vw, 16px)',
                    padding: '14px 32px',
                  }}
                >
                  Enquire Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Improve scroll behavior on mobile */
        @media (max-width: 768px) {
          section {
            background-attachment: scroll !important;
          }
        }

        /* Ensure touch targets are large enough */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  );
}