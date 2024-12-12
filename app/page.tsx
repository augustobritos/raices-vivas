"use client";

import Link from "next/link";

import { features } from "@/config/data";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TreePine
} from "lucide-react";

export default function Home() {

  return (
    <div className="container mx-auto px-4 py-16">

      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h1
          className="text-5xl font-extrabold tracking-tight text-red-500"
        >
          Descubre tus raíces, conecta con tu historia.
        </h1>
      </header>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center pb-16">
        <div>
          <h2
            className="text-4xl font-semibold mb-4"
          >
            Construye un árbol genealógico y preserva el legado familiar con nuestra ayuda experta.
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Explora generaciones de historia familiar, conecta con seres queridos y protege el legado de tu familia para las próximas generaciones.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90 transition"
              aria-label="Start Exploring"
            >
              <Link href={'/comenzar'}>Empieza tu Árbol Familiar</Link>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700" >
              <Link href={'/nosotros'}>Conoce más</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <TreePine size={250} strokeWidth={1.5} className="text-green-400" />
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16">
        <h3 className="text-4xl text-center font-bold mb-8">
          ¿Por qué elegirnos?
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all border border-gray-200"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>

  );
}
