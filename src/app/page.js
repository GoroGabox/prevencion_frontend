import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#bdeef4] to-[#94c4ca] py-8 sm:py-20">

      {/* Main content */}
      <main className="flex flex-col gap-[32px] pt-20">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row px-8">
          <div className="w-full flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Soluciones Profesionales en Refrigeración
            </h1>
            <p className="text-lg text-black mb-8 max-w-2xl">
              En Estándar Clima SPA nos especializamos en la instalación, mantención y reparación de sistemas de refrigeración industrial y aire acondicionado. Con más de 28 años de experiencia, ofrecemos servicios de calidad, confianza y respaldo.
            </p>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                href="tel:+569XXXXXXXXX"
                className="bg-white text-blue-600 rounded-full py-3 px-8 hover:bg-blue-600 hover:text-white transition-all"
              >
                Contáctanos Ahora
              </a>
              <a
                href="mailto:contacto@estandarclima.cl"
                className="bg-transparent text-black border-2 border-white rounded-full py-3 px-8 hover:bg-white hover:text-blue-600 transition-all"
              >
                Enviar Email
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src="/service2.jpg"  // Cambia la imagen
              alt="Cámaras de Frío"
              width={500}
              height={300}
              className="rounded-lg mb-4 bg-gray-300"
            />
          </div>
          
        </section>

        {/* Services Section */}
        <section id="services" className="my-16 relative">
          <div className="absolute h-full w-full bg-sky-400 flex flex-col gap-5 justify-end">
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>            
            <hr className="w-full h-2 bg-blue-950"/>            
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>            
            <hr className="w-full h-2 bg-blue-950"/>            
            <hr className="w-full h-2 bg-blue-950"/>
            <hr className="w-full h-2 bg-blue-950"/>            
            <hr className="w-full h-2 bg-blue-950"/>

            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>            
            <hr className="w-full h-2 md:hidden bg-blue-950"/>            
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>            
            <hr className="w-full h-2 md:hidden bg-blue-950"/>            
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
            <hr className="w-full h-2 md:hidden bg-blue-950"/>            
            <hr className="w-full h-2 md:hidden bg-blue-950"/>
          </div>
          <div className="relative px-8 py-16">
            <h2 className="text-3xl font-bold text-center text-white mb-6">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-xl backdrop-blur-md">
                <Image
                  src="/service1.jpg"  // Cambia la imagen
                  alt="Instalación de Aire Acondicionado"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 bg-gray-300"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Instalación de Aire Acondicionado</h3>
                <p className="text-white">
                  Instalación de equipos de aire acondicionado tipo split, mural y ductos.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-xl backdrop-blur-md">
                <Image
                  src="/service2.jpg"  // Cambia la imagen
                  alt="Cámaras de Frío"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 bg-gray-300"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Cámaras de Frío</h3>
                <p className="text-white">
                  Soluciones para cámaras de frío industrial y comercial para alimentos y medicamentos.
                </p>
              </div>
              <div className="p-6 rounded-lg shadow-xl backdrop-blur-md">
                <Image
                  src="/service3.jpg"  // Cambia la imagen
                  alt="Refrigeración Comercial"
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 bg-gray-300"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Refrigeración Comercial</h3>
                <p className="text-white">
                  Mantenimiento y reparación de vitrinas, conservadoras y exhibidores comerciales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Aire Acondicionado */}
        <section id="how-it-works" className="md:flex md:my-16 backdrop-blur-lg rounded-lg shadow-xl mx-8 py-8 bg-white">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/aire-acondicionado.jpg"  // Reemplaza con la imagen de aire acondicionado
              alt="Instalación Aire Acondicionado"
              width={500}
              height={300}
              className="rounded-lg mb-4 bg-gray-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-8">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              ¿Cómo Funciona un Aire Acondicionado?
            </h2>
            <div className="max-w-4xl mx-auto">
              <ol className="list-decimal pl-6 text-lg text-black">
                <li className="mb-2">El ventilador aspira aire caliente del ambiente y lo pasa por un filtro que retiene el polvo y las impurezas.</li>
                <li className="mb-2">El aire llega al evaporador, donde el refrigerante absorbe el calor del aire y se convierte en gas.</li>
                <li className="mb-2">El aire frío es expelido a la habitación, refrescando el ambiente de manera eficiente.</li>
                <li className="mb-2">El gas caliente viaja al compresor y condensador exterior, donde se enfría y vuelve a estado líquido para repetir el ciclo.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* How It Works Section - Cámaras de Frío */}
        <section id="how-it-works-2" className="flex flex-col-reverse md:flex-row md:my-16 backdrop-blur-lg rounded-lg shadow-xl mx-8 py-8 bg-white">
          <div className="flex flex-col items-center justify-center w-full px-8">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              ¿Cómo Funciona una Cámara de Frío?
            </h2>
            <div className="max-w-4xl mx-auto">
              <ol className="list-decimal pl-6 text-lg text-black">
                <li className="mb-2">Las cámaras de frío mantienen una temperatura constante para la conservación de alimentos, medicamentos y otros productos sensibles.</li>
                <li className="mb-2">El sistema de refrigeración dentro de la cámara asegura que se mantenga el nivel de temperatura ideal, evitando la pérdida de calidad de los productos almacenados.</li>
                <li className="mb-2">Utilizamos sistemas avanzados de control de temperatura y humedad para garantizar la eficiencia y la seguridad de los productos almacenados.</li>
                <li className="mb-2">Las cámaras son diseñadas según las necesidades de nuestros clientes, adaptándose a diferentes tamaños y tipos de productos.</li>
              </ol>
            </div>
          </div>          
          <div className="flex items-center justify-center w-full">
            <Image
              src="/camara-de-frio.jpg"  // Reemplaza con la imagen de cámaras de frío
              alt="Cámara de Frío"
              width={500}
              height={300}
              className="rounded-lg mb-4 bg-gray-300"
            />
          </div>
        </section>

        {/* How It Works Section - Refrigeración Comercial */}
        <section id="how-it-works-3" className="md:flex md:my-16 backdrop-blur-lg rounded-lg shadow-xl mx-8 py-8 bg-white">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/refrigeracion-comercial.jpg"  // Reemplaza con la imagen de refrigeración comercial
              alt="Refrigeración Comercial"
              width={500}
              height={300}
              className="rounded-lg mb-4 bg-gray-300"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full px-8">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              ¿Cómo Funciona la Refrigeración Comercial?
            </h2>
            <div className="max-w-4xl mx-auto">
              <ol className="list-decimal pl-6 text-lg text-black">
                <li className="mb-2">La refrigeración comercial es crucial para mantener alimentos y productos en condiciones óptimas para la venta.</li>
                <li className="mb-2">Nos especializamos en vitrinas, conservadoras y exhibidores, adaptados a las necesidades de tu negocio.</li>
                <li className="mb-2">Mantenemos los equipos en perfecto estado mediante mantenimiento preventivo y correctivo, asegurando que no haya interrupciones en el servicio.</li>
                <li className="mb-2">Los sistemas de refrigeración comercial son eficientes y consumen menos energía, lo que ayuda a reducir los costos operativos de tu negocio.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* How It Works Section - Mantenimiento Preventivo */}
        <section id="how-it-works-4" className="flex flex-col-reverse md:flex-row md:my-16 backdrop-blur-lg rounded-lg shadow-xl mx-8 py-8 bg-white">
          <div className="flex flex-col items-center justify-center w-full px-8">
            <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
              ¿Por Qué es Importante el Mantenimiento Preventivo?
            </h2>
            <div className="max-w-4xl mx-auto">
              <ol className="list-decimal pl-6 text-lg text-black">
                <li className="mb-2">El mantenimiento preventivo asegura que tu equipo de aire acondicionado o refrigeración funcione correctamente durante más tiempo.</li>
                <li className="mb-2">Revisamos y limpiamos todos los componentes, evitando fallas costosas y mejorando la eficiencia energética de los equipos.</li>
                <li className="mb-2">Un equipo bien mantenido tiene una vida útil más larga, lo que reduce la necesidad de reparaciones costosas o reemplazos prematuros.</li>
                <li className="mb-2">El mantenimiento preventivo puede ayudar a evitar interrupciones en el servicio y garantizar que tu negocio siga operando sin problemas.</li>
              </ol>
            </div>
          </div>          
          <div className="flex items-center justify-center w-full">
            <Image
              src="/mantenimiento.jpg"  // Reemplaza con la imagen de mantenimiento
              alt="Mantenimiento Preventivo"
              width={500}
              height={300}
              className="rounded-lg mb-4 bg-gray-300"
            />
          </div>
        </section>

      </main>
    </div>
  );
}
