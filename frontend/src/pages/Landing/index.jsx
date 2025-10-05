import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar';
import Button from '../../components/shared/Button';
import './styles.css'; // Use the local style.css

const LandingPage = () => {
    const canvasRef = useRef(null);
    const heroRef = useRef(null);

    // This useEffect hook handles all the animations
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = 70;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 1.5 + 0.5
            });
        }

        let animationFrameId;
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(animateParticles);
        }
        animateParticles();

        const hero = heroRef.current;
        if (!hero) return;
        const orbs = hero.querySelectorAll('.orb');
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = hero;
            const xPos = (clientX / offsetWidth - 0.5) * -40;
            const yPos = (clientY / offsetHeight - 0.5) * -40;
            orbs.forEach(orb => {
                orb.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        };
        hero.addEventListener('mousemove', handleMouseMove);

        // Cleanup function
        return () => {
            cancelAnimationFrame(animationFrameId);
            hero.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="hero-container" ref={heroRef}>
            <div className="background-effects">
                <canvas ref={canvasRef} id="particle-canvas"></canvas>
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
            </div>

            <Navbar user={null} /> {/* Pass null for the logged-out state */}

            <main className="hero-main-content">
                <div className="fade-in-up">
                    <h1 className="h1" style={{ lineHeight: '1.2' }}>
                        A Message to the <span className="animated-gradient">Future</span>
                    </h1>
                    <p className="body-text" style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: 'var(--text-secondary)' }}>
                        Dive into the art of memory. Seal a message in our digital vault, where innovative technology meets the timeless human experience.
                    </p>
                    <div className="hero-cta-buttons">
                        <Link to="/auth">
                           <Button text="Create Your Capsule" variant="primary" className="!h-14 !text-base" />
                        </Link>
                         <Link to="/public-wall">
                           <Button text="Discover More" variant="ghost" className="!h-14 !text-base" />
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LandingPage;
