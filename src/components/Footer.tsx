export function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-800">
            <div className="container mx-auto p-3">
                <div className="flex justify-center">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Portfolio. Tomás Vargas ©.
                    </p>
                </div>
            </div>
        </footer>
    )
}