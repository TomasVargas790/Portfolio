export function AnimatedBackground() {
    return (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[120px] animate-pulse"></div>
            <div
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[120px] animate-pulse"
                style={{ animationDelay: '1s' }}
            ></div>
        </div>
    );
}