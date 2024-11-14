export default function CurriculumPage() {
  return (
    <div className="container mx-auto px-16 py-16 min-h-[calc(97vh-8rem)]">
      <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
      <div className="space-y-12">
        <section>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-medium">Desarrollo de Aplicaciones Web</h3>
              <p className="">U-Tad <span className="text-sm ml-1">2023 - 2025</span></p>
            </div>
          </div>

          <br />

          <h2 className="text-2xl font-semibold mb-4">Educacion</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-medium">Sistemas Microinformaticos y Redes</h3>
              <p className="">La Salle Sagrado Corazón <span className="text-sm ml-1">2021 - 2023</span></p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-medium">Departamento de producto</h3>
              <p className="">We Are Knitters <span className="text-sm ml-1">marzo 2023 - agosto 2023</span></p>
              <p className="text-s ">
                Practicas del grado medio y extension de dos meses como empleado. <br />
                En las cuales use un arduino para mostrar una pantalla de Tableau,
                me encarege de la administracion de equipos y trabaje bajo el departamento.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}