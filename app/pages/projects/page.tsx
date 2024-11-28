import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-56 py-16 min-h-[calc(97vh-8rem)]">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">

        <Link href="https://github.com/V0lms/debian-webdav" className="hover:text-purple-400">
          <div className="max-w-sm rounded overflow-hidden shadow-lg border h-56">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold underline mb-2">Automatizacion server</h3>
              <p className="">
                Scrip para un servidor apache con una pagina basica y una con un servidor webdav
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">Bash</span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/V0lms/ActividadOpticaJavaSwing" className="hover:text-purple-400">
          <div className="max-w-sm rounded overflow-hidden shadow-lg border h-56">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold underline mb-2">Calcular dioptrias</h3>
              <p className="">
                Aplicacion hecha en Java con interfaz grafia en Swing
              </p>
            </div>
            <div className="px-6 pb-2">
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">Java</span>
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">Swing</span>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/V0lms/my-page" className="hover:text-purple-400">
          <div className="max-w-sm rounded overflow-hidden shadow-lg border h-56">
            <div className="px-6 py-4">
              <h3 className="text-xl font-semibold underline mb-2">Portfolio</h3>
              <p className="">
                Pagina de presentacion, este proyecto
              </p>
            </div>
            <div className="px-6 pt-4">
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">Next.js</span>
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">TypeScript</span>
              <span className="inline-block bg-purple-100 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">Tailwind</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
