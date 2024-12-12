import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "../ui/button";

export const CallToAction = () => {
    const phoneNumber = siteConfig.phone;
    const message = `¡Hola! 👋 Estoy interesado en comenzar mi investigación genealógica. Por favor, bríndenme más información. ¡Gracias! 😊`;

    return (
        <div className="w-full py-4">
            <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90 transition"
            >
                <Link
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Inicia mi inves"
                >Comenzar mi investigación</Link>
            </Button>
        </div>
    );
};