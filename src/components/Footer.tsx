export function Footer() {
    return (
        <footer className="relative bottom-0 left-0 right-0 bg-muted border-t border-border">
            <div className="container mx-auto p-3">
                <div className="flex justify-center">
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Portfolio. Tomás Vargas ©.
                    </p>
                </div>
            </div>
        </footer>
    )
}