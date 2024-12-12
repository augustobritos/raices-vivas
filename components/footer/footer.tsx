export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background dark:bg-background-dark py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p
                        className="text-sm"
                    >
                        &copy; {currentYear} Raices Vivas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}