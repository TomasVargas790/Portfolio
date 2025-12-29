import { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import './SpaceBackground.css';

// ============================================
// 🎨 INTERFACES
// ============================================

interface Star {
    x: number;
    y: number;
    z: number;
    size: number;
    twinkle: number;
    twinkleSpeed: number;
}

interface ShootingStar {
    x: number;
    y: number;
    vx: number;
    vy: number;
    opacity: number;
}

// ============================================
// � HELPER: Wave Paths (Haikei)
// ============================================
const wavePaths = [
    "M0 634L45.7 645C91.3 656 182.7 678 274.2 683.5C365.7 689 457.3 678 548.8 692.5C640.3 707 731.7 747 823 761.2C914.3 775.3 1005.7 763.7 1097 740.8C1188.3 718 1279.7 684 1371.2 691.3C1462.7 698.7 1554.3 747.3 1645.8 745.5C1737.3 743.7 1828.7 691.3 1874.3 665.2L1920 639L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z",
    "M0 758L45.7 765.8C91.3 773.7 182.7 789.3 274.2 791.7C365.7 794 457.3 783 548.8 779.2C640.3 775.3 731.7 778.7 823 774C914.3 769.3 1005.7 756.7 1097 767.8C1188.3 779 1279.7 814 1371.2 819.7C1462.7 825.3 1554.3 801.7 1645.8 785.7C1737.3 769.7 1828.7 761.3 1874.3 757.2L1920 753L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z",
    "M0 832L45.7 840C91.3 848 182.7 864 274.2 858.2C365.7 852.3 457.3 824.7 548.8 815.5C640.3 806.3 731.7 815.7 823 816.7C914.3 817.7 1005.7 810.3 1097 807C1188.3 803.7 1279.7 804.3 1371.2 806.5C1462.7 808.7 1554.3 812.3 1645.8 829.8C1737.3 847.3 1828.7 878.7 1874.3 894.3L1920 910L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z",
    "M0 885L45.7 882.5C91.3 880 182.7 875 274.2 872C365.7 869 457.3 868 548.8 880.7C640.3 893.3 731.7 919.7 823 928.2C914.3 936.7 1005.7 927.3 1097 922C1188.3 916.7 1279.7 915.3 1371.2 907.2C1462.7 899 1554.3 884 1645.8 892.8C1737.3 901.7 1828.7 934.3 1874.3 950.7L1920 967L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z",
    "M0 998L45.7 989.3C91.3 980.7 182.7 963.3 274.2 959.3C365.7 955.3 457.3 964.7 548.8 972C640.3 979.3 731.7 984.7 823 993.8C914.3 1003 1005.7 1016 1097 1013.7C1188.3 1011.3 1279.7 993.7 1371.2 985.5C1462.7 977.3 1554.3 978.7 1645.8 974.7C1737.3 970.7 1828.7 961.3 1874.3 956.7L1920 952L1920 1081L1874.3 1081C1828.7 1081 1737.3 1081 1645.8 1081C1554.3 1081 1462.7 1081 1371.2 1081C1279.7 1081 1188.3 1081 1097 1081C1005.7 1081 914.3 1081 823 1081C731.7 1081 640.3 1081 548.8 1081C457.3 1081 365.7 1081 274.2 1081C182.7 1081 91.3 1081 45.7 1081L0 1081Z"
];

// ============================================
// �🌈 SUB-COMPONENTE: Background Effects
// Maneja la nebula y olas con parallax
// ============================================

function BackgroundEffects({ theme }: { theme: string }) {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!parallaxRef.current) return;
            const scrollY = window.scrollY;
            // Desplaza todo el contenedor de ondas suavemente
            parallaxRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = theme === 'dark';

    return (
        <div
            className={`background-waves-container ${isDark ? 'theme-dark' : 'theme-light'}`}
            ref={parallaxRef}
        >
            <svg
                className="waves-svg"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMax slice"
                xmlns="http://www.w3.org/2000/svg"
            >
                {wavePaths.map((path, index) => (
                    <path
                        key={index}
                        d={path}
                        className={`wave-layer wave-layer-${index + 1}`}
                    />
                ))}
            </svg>
            {/* Overlay para mezclar con el fondo */}
            <div className="waves-overlay" />
        </div>
    );
}

// ============================================
// ⭐ SUB-COMPONENTE: Canvas Starfield
// Maneja las estrellas con efecto parallax y mouse interaction
// ============================================

function CanvasStarfield({ theme }: { theme: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const shootingStarsRef = useRef<ShootingStar[]>([]);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // ========================================
        // 📐 Setup Canvas
        // ========================================
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // ========================================
        // ⭐ Initialize Stars
        // ========================================
        const numStars = 800;
        if (starsRef.current.length === 0) {
            for (let i = 0; i < numStars; i++) {
                starsRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width,
                    size: Math.random() * Math.random() * 3 + 0.5,
                    twinkle: Math.random() * Math.PI * 2,
                    twinkleSpeed: Math.random() * 0.03 + 0.01
                });
            }
        }

        // ========================================
        // 💫 Shooting Star Creation
        // ========================================
        const createShootingStar = () => {
            const direction = Math.floor(Math.random() * 4);
            let x: number, y: number, vx: number, vy: number;

            switch (direction) {
                case 0:
                    x = canvas.width * (0.7 + Math.random() * 0.3);
                    y = Math.random() * canvas.height * 0.3;
                    vx = -(Math.random() * 4 + 3);
                    vy = Math.random() * 4 + 2;
                    break;
                case 1:
                    x = Math.random() * canvas.width * 0.3;
                    y = Math.random() * canvas.height * 0.3;
                    vx = Math.random() * 4 + 3;
                    vy = Math.random() * 4 + 2;
                    break;
                case 2:
                    x = canvas.width + 50;
                    y = Math.random() * canvas.height * 0.6;
                    vx = -(Math.random() * 5 + 4);
                    vy = Math.random() * 3 + 1;
                    break;
                case 3:
                    x = -50;
                    y = Math.random() * canvas.height * 0.6;
                    vx = Math.random() * 5 + 4;
                    vy = Math.random() * 3 + 1;
                    break;
                default:
                    x = canvas.width;
                    y = 0;
                    vx = -5;
                    vy = 4;
            }

            shootingStarsRef.current.push({ x, y, vx, vy, opacity: 1 });
        };

        // ========================================
        // 🎬 Animation Loop
        // ========================================
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (Math.random() < 0.025 && shootingStarsRef.current.length < 25) {
                createShootingStar();
            }

            drawShootingStars(ctx, shootingStarsRef, theme);
            drawStars(ctx, starsRef, canvas, theme);

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
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}
        />
    );
}

// ============================================
// 💫 HELPER: Draw Shooting Stars
// ============================================

function drawShootingStars(
    ctx: CanvasRenderingContext2D,
    shootingStarsRef: React.MutableRefObject<ShootingStar[]>,
    theme: string
) {
    shootingStarsRef.current = shootingStarsRef.current.filter(star => {
        star.x += star.vx;
        star.y += star.vy;
        star.opacity -= 0.006;

        const canvas = ctx.canvas;
        const isVisible = star.opacity > 0 &&
            star.x > -200 && star.x < canvas.width + 200 &&
            star.y > -200 && star.y < canvas.height + 200;

        if (isVisible) {
            const gradient = ctx.createLinearGradient(
                star.x, star.y,
                star.x - star.vx * 10, star.y - star.vy * 10
            );

            if (theme === 'dark') {
                gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
                gradient.addColorStop(0.4, `rgba(135, 206, 250, ${star.opacity * 0.6})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            } else {
                gradient.addColorStop(0, `rgba(0, 0, 0, ${star.opacity * 0.9})`);
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            }

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(star.x - star.vx * 10, star.y - star.vy * 10);
            ctx.stroke();

            ctx.fillStyle = theme === 'dark' ? '#ffffff' : '#000000';
            ctx.globalAlpha = star.opacity;
            ctx.shadowBlur = theme === 'dark' ? 20 : 0;
            ctx.shadowColor = '#ffffff';
            ctx.beginPath();
            ctx.arc(star.x, star.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;

            return true;
        }
        return false;
    });
}

// ============================================
// ⭐ HELPER: Draw Normal Stars
// ============================================

function drawStars(
    ctx: CanvasRenderingContext2D,
    starsRef: React.MutableRefObject<Star[]>,
    canvas: HTMLCanvasElement,
    theme: string
) {
    starsRef.current.forEach(star => {
        star.twinkle += star.twinkleSpeed;
        star.z -= 2;

        if (star.z <= 0) {
            star.z = canvas.width;
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
        }

        const k = 128 / star.z;
        const px = (star.x - canvas.width / 2) * k + canvas.width / 2;
        const py = (star.y - canvas.height / 2) * k + canvas.height / 2;

        const baseSize = theme === 'dark' ? 1.2 : 2.0;
        const twinkle = Math.sin(star.twinkle) * 0.5 + 0.5;
        const size = star.size * k * baseSize * twinkle;
        const baseOpacity = (1 - star.z / canvas.width) * (theme === 'dark' ? 0.85 : 0.95);
        const opacity = baseOpacity * twinkle * 0.9;

        if (theme === 'dark') {
            ctx.shadowBlur = 4 * twinkle;
            ctx.shadowColor = '#ffffff';
            ctx.fillStyle = '#ffffff';
        } else {
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#000000';
        }

        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ============================================
// 🌌 COMPONENTE PRINCIPAL
// ============================================

export function SpaceBackground() {
    const { theme } = useTheme();

    return (
        <div className="space-background">
            <BackgroundEffects theme={theme} />
            <CanvasStarfield theme={theme} />
        </div>
    );
}
