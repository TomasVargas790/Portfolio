import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import './SpaceBackground.css';

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
}

export function SpaceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();
    const starsRef = useRef<Star[]>([]);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Initialize stars only if empty
        const numStars = 200;
        if (starsRef.current.length === 0) {
            for (let i = 0; i < numStars; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    size: Math.random() * 2 + 1
                });
            }
        }

        // Animation loop - theme is captured in this closure
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach(star => {
                // Move star
                star.z -= 2;
                if (star.z <= 0) {
                    star.z = canvas.width;
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                }

                // Calculate position
                const k = 128 / star.z;
                const px = (star.x - canvas.width / 2) * k + canvas.width / 2;
                const py = (star.y - canvas.height / 2) * k + canvas.height / 2;

                // Calculate size and opacity
                // Much larger in light mode for better visibility
                const baseSize = theme === 'dark' ? 1.5 : 2.5;
                const size = star.size * k * baseSize;
                const opacity = (1 - star.z / canvas.width) * (theme === 'dark' ? 0.9 : 1.0);

                // Draw star with correct colors based on theme
                if (theme === 'dark') {
                    ctx.shadowBlur = 3;
                    ctx.shadowColor = '#ffffff';
                    ctx.fillStyle = '#ffffff';
                } else {
                    // Light mode - solid black with no blur for maximum contrast
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = '#000000';
                }

                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Reset shadow and opacity
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [theme]); // Restart animation when theme changes

    return (
        <div className="space-background">
            {/* Background Effects Layer (Nebulas) */}
            {theme === 'dark' ? (
                <>
                    <div className="nebula"></div>
                </>
            ) : (
                <div className="celestial-sky"></div>
            )}

            {/* Canvas Starfield Layer (on top) */}
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1 // Ensure stars are above nebulas
                }}
            />
        </div>
    );
}
