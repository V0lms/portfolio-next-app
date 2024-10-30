import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[calc(97vh-8rem)]">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Link href="https://github.com/V0lms/debian" className="hover:text-purple-400">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold underline">Automatizacion server webdav</h3>
              <p className="">
                Shell que automatiza la creaccion de un servidor apache con una pagina de bienbenida y una con un servidor webdav
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary ring-1 border border-purple-300">
                  Bash
                </span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/V0lms/ActividadOpticaJavaSwing" className="hover:text-purple-400">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold underline">Calcular dioptrias</h3>

              <p className="">
                Aplicacion hecha en Java con interfaz grafia en Swing
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary ring-1 border border-purple-300">
                  Java
                </span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="https://github.com/V0lms/my-page" className="hover:text-purple-400">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold underline">Portfolio</h3>
              <p className="">
                Pagina web con mi portfolio(es esta)
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary ring-1 border border-purple-300">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary ring-1 border border-purple-300">
                  TypeScript
                </span>
                <span className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium text-primary ring-1 border border-purple-300">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}
