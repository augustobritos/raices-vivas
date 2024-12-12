import { CallToAction } from "@/components/cta/cta";

import { DESIGN_SYSTEM } from "../lib/constants";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h1
                    className="text-4xl font-bold mb-4"
                >
                    Sobre Raíces Vivas
                </h1>
                <p
                    className="text-lg mb-8"
                >
                    Somos un Estudio de Genealogía, sabemos el cómo y dónde investigar su historia familiar, y podemos contar su historia.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                >
                    ¿Qué hacemos?
                </h2>
                <p
                    className="mb-4"
                >
                    Investigamos sus ancestros en archivos y bases de datos a nivel mundial para recontruir su historia.
                </p>
                <p
                    className="mb-4"
                >
                    Trazamos documentación de evidencia de sus conexiones familiares: Actas de Nacimiento y matrimonio, censos, y otros registros históricos.
                </p>
                <p
                    className="mb-8"
                >
                    Ofrecemos soporte para que obtenga su ciudadanía, basado en la documentación de sus ancestros.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                >
                    Nuestro Proceso
                </h2>
                <p
                    className="mb-4"
                >
                    1. Analizaremos su caso independientemente para predecir posibles resultados.
                </p>
                <p
                    className="mb-4"
                >
                    2. Investigaremos registros dentro de un marco pre-establecido.
                </p>
                <p
                    className="mb-4"
                >
                    3. Adaptaremos la investigación de acuerdo a los resultados.
                </p>

                <Separator className="my-8" />

                <h2
                    className="text-3xl font-semibold mb-4"
                >
                    Fundadora
                </h2>
                <p
                    className="mb-8"
                >
                    Soy Analiz Justiniano Steinbach, periodista con más de 20 años de experiencia in varios tipos de investigaciones. He trabajado en una revista de renombre hasta que descubrí la genealogía que cambió mi vida. Gracias a mi conocimiento y a mi equipo, he tenido el honor de poder ayudar a más de 50 familias y profesionales a conocer sus orígenes y mejorar sus vidas en varios aspectos.
                </p>

                <CallToAction />
            </div>
        </main>
    );
}