import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { DESIGN_SYSTEM } from "../lib/constants";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h1
                    className="text-4xl font-bold mb-4"
                    style={{
                        fontFamily: DESIGN_SYSTEM.typography.fontFamily.secondary,
                        color: DESIGN_SYSTEM.colors.primary.light
                    }}
                >
                    About Raíces Vivas
                </h1>
                <p
                    className="text-lg mb-8"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    At Raíces Vivas, we know how and where to search for your family history, and we can tell its story.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                    style={{
                        fontFamily: DESIGN_SYSTEM.typography.fontFamily.secondary
                    }}
                >
                    Foundation
                </h2>
                <p
                    className="mb-8"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    I am Analiz Justiniano Steinbach, founder of Raices Vivas, a journalist with over 20 years of experience in various types of investigations. I have worked for [magazine] until I discovered genealogy that changed my life. Through my contributions, I have had the honor of being able to help many people learn about their origins and improve their lives in various aspects.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                    style={{
                        fontFamily: DESIGN_SYSTEM.typography.fontFamily.secondary
                    }}
                >
                    What We Do
                </h2>
                <p
                    className="mb-4"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    We search for your ancestors in archives and databases around the world and try to reconstruct their stories.
                </p>
                <p
                    className="mb-4"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    We trace documentary evidence of these family ties: birth certificates, marriage certificates, censuses, and other historical records.
                </p>
                <p
                    className="mb-8"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    We offer guidance for obtaining citizenship, based on the documentation of your ancestors.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                    style={{
                        fontFamily: DESIGN_SYSTEM.typography.fontFamily.secondary
                    }}
                >
                    Our Process
                </h2>
                <p
                    className="mb-4"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    1. We analyze your case independently to determine possible results.
                </p>
                <p
                    className="mb-4"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    2. We perform the search of the pre-defined databases within a framework.
                </p>
                <p
                    className="mb-4"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    3. We adapt the research based on the results.
                </p>
                <p
                    className="mb-8"
                    style={{
                        fontSize: DESIGN_SYSTEM.typography.sizes.body
                    }}
                >
                    4. We deliver the results.
                </p>

                <CallToAction />
            </div>
        </main>
    );
}

const CallToAction = () => {
    const phoneNumber = siteConfig.phone;
    const message = `¡Hola! 👋 Estoy interesado en comenzar mi investigación genealógica. Por favor, bríndenme más información. ¡Gracias! 😊`;

    return (
        <div className="max-w-lg mx-auto">
            <Link
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start My Research"
            >
                <Button size="lg" className="w-full">
                    <div className="flex items-center justify-center gap-2">
                        Start My Research
                        <ArrowRightIcon className="w-5 h-5" />
                    </div>
                </Button>
            </Link>
        </div>
    );
};