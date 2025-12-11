interface ProfileImageProps {
    src: string;
    alt: string;
    size?: number;
}

export function ProfileImage({ src, alt, size = 280 }: ProfileImageProps) {
    return (
        <div className="flex-shrink-0">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                    src={src}
                    alt={alt}
                    width={size}
                    height={size}
                    className="relative rounded-full border-4 border-background-card shadow-2xl transform group-hover:scale-105 transition duration-500"
                />
            </div>
        </div>
    );
}
