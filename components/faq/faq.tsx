import { ScrollText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export const Faq = () => {
    return (
        <section className="mt-16" id="faq">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex items-center space-x-2">
                            <ScrollText size={24} />
                            <span className="text-lg text-gray-800">
                                ¿Cómo Trabajamos?
                            </span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600 text-sm">
                            Utilizamos técnicas avanzadas de investigación genealógica
                            y bases de datos completas para ayudarle a rastrear la historia de su familia.
                        </p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>)
}