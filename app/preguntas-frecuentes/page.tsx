import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FREQUENTQUESTIONS } from "@/config/data";
import { ScrollText } from "lucide-react";

export default function Page() {

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
            <div className="container mx-auto px-4">

                <Accordion type="multiple">
                    {FREQUENTQUESTIONS.map((q, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                                <div className="flex items-center space-x-2">
                                    <ScrollText size={24} />
                                    <span className="text-lg text-gray-800 dark:text-green-500">
                                        {q.question}
                                    </span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 dark:text-white">{q.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
