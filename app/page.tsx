"use client";

import { Faq } from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/config/data";
import {
  TreePine
} from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <div className="container mx-auto px-4 py-16">

      {/* Header Section */}
      <header className="flex justify-between items-center mb-8">
        <h1
          className="text-5xl font-extrabold tracking-tight text-red-500"
        >
          Raíces Vivas
        </h1>
      </header>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2
            className="text-4xl font-semibold mb-4"
            style={{
              fontFamily: "Merriweather, serif",
              lineHeight: 1.4,
            }}
          >
            Descubra Su Historia Familiar
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Descubra generaciones de historia familiar, conéctese con familiares y
            preserve el legado de su familia.
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-green-400 text-white hover:opacity-90 transition"
              aria-label="Start Exploring"
            >
              <Link href={'/comenzar'}>Comenzar</Link>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700" >
              <Link href={'/nosotros'}>Aprender más</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <TreePine size={250} strokeWidth={1.5} className="text-gray-400" />
        </div>
      </div>

      {/* Features Section */}
      <section className="mt-16">
        <h3 className="text-3xl text-center font-bold mb-8">
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

      <Faq />
      <Footer />
    </div>

  );
}
