import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[calc(97vh-8rem)] flex-col items-center justify-center space-y-12 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Victor Olmos Martin
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          Bienbenido a mi portfolio
        </p>
      </div>

    </div>

  );
}
