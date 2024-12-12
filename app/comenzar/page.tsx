import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BookOpen,
    FileText,
    Search,
    TreePine,
} from "lucide-react";

export default function GetStartedPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    Comienza con tu Búsqueda Genealógica
                </h1>

                {/* Introduction */}
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                    Descubra las historias que dieron forma a su familia y conéctese con sus raíces como nunca antes.
                </p>

                {/* Steps Section */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {/* Step 1 */}
                    <Card className="hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex items-center space-x-4">
                            <Search className="text-blue-500" size={32} />
                            <CardTitle className="text-lg font-semibold">Entrevista Inicial</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Cuéntenos qué está buscando y qué información ya tiene. Juntos daremos el primer paso para reconstruir su árbol genealógico.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Step 2 */}
                    <Card className="hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex items-center space-x-4">
                            <FileText className="text-green-500" size={32} />
                            <CardTitle className="text-lg font-semibold">Diagnóstico y Propuesta</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                En una semana identificaremos pistas clave en archivos y bases de datos, y le presentaremos un plan detallado.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Step 3 */}
                    <Card className="hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex items-center space-x-4">
                            <TreePine className="text-teal-500" size={32} />
                            <CardTitle className="text-lg font-semibold">Documentación</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Durante la búsqueda, le proporcionaremos copias en PDF de actas de nacimiento, matrimonio, defunciones y más.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Step 4 */}
                    <Card className="hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex items-center space-x-4">
                            <TreePine className="text-yellow-500" size={32} />
                            <CardTitle className="text-lg font-semibold">El Árbol y la Historia</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Reciba un diseño preliminar y final de su árbol genealógico en formato impreso o digital, listo para compartir.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Step 5 */}
                    <Card className="hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700">
                        <CardHeader className="flex items-center space-x-4">
                            <BookOpen className="text-purple-500" size={32} />
                            <CardTitle className="text-lg font-semibold">Relatos Familiares</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Transforme los hallazgos en un relato que narre siglos de historia familiar en el formato que prefiera.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-8">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90 transition"
                        aria-label="Start Exploring"
                    >
                        <Link href={'/comenzar'}>¡Comenzar Ahora!</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}