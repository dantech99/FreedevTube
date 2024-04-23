import React from 'react';

type FaqItemsProps = {
  question: string
   answer: string
}

export default function Faq() {
  return (
    <div className="lg:p-8 h-auto">
      <h1 className="text-yellow-300 text-3xl font-bold mb-8 text-center">
        Preguntas frecuentes
      </h1>

      <div className="grid grid-cols-1 gap-8">
        <FaqItem 
          question="¿Qué es FreeDevTube?"
          answer="FreeDevTube es una plataforma de cursos gratuitos en línea para desarrolladores. Ofrecemos una amplia variedad de cursos sobre diferentes tecnologías y temas relacionados con la programación, todos completamente gratuitos."
        />
        <FaqItem 
          question="¿Cómo puedo acceder a los cursos?"
          answer="Para acceder a los cursos, simplemente visita nuestro sitio web en www.freedevtube.vercel.app.com. Puedes explorar nuestra biblioteca de cursos y empezar a aprender de inmediato."
        />
        <FaqItem 
          question="¿Quién puede utilizar FreeDevTube?"
          answer="FreeDevTube está disponible para cualquier persona interesada en aprender desarrollo de software. No hay requisitos de registro y nuestros cursos son completamente gratuitos para todos."
        />
        <FaqItem 
          question="¿Cómo puedo contribuir con contenido a FreeDevTube?"
          answer="Si tienes un curso que te gustaría compartir en FreeDevTube, puedes ponerte en contacto con nosotros a través de nuestra redes sociales y github. Sin embargo, ten en cuenta que todo el contenido subido a nuestra plataforma debe ser de tu propiedad o estar bajo una licencia que permita su distribución gratuita."
        />
        <FaqItem 
          question="¿Qué responsabilidad asume FreeDevTube por el contenido de los cursos?"
          answer="FreeDevTube no se hace responsable del contenido de los cursos ofrecidos en la plataforma. No garantizamos la exactitud, integridad o calidad de dicho contenido. Además, cualquier material subido a nuestra plataforma se considera propiedad del creador del curso y no está afiliado ni acreditado a FreeDevTube."
        />
        <FaqItem 
          question="¿Cuáles son las reglas de uso de FreeDevTube?"
          answer="FreeDevTube no se hace responsable por el uso indebido de la plataforma. Al utilizar nuestros servicios, aceptas no utilizarlos para ningún propósito que sea ilegal o esté prohibido por estos términos, condiciones y notificaciones."
        />
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: FaqItemsProps) {
  return (
    <div className="bg-slate-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-white mb-4">{question}</h2>
      <p className="text-white">{answer}</p>
    </div>
  );
}
