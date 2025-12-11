import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Avoid hydration mismatch
    if (!mounted) {
        return <div className="w-12 h-12" />;
    }

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-6 p-3 rounded-full bg-primary-600 hover:bg-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl z-50 cursor-pointer"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                // Sun icon
                <svg className="w-6 h-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ) : (
                // Moon icon
                <svg className="w-6 h-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            )}
        </button>
    );
}
