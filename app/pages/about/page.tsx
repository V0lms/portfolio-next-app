import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-56 py-16 min-h-[calc(97vh-8rem)]">
      <h1 className="text-4xl font-bold mb-8">Sobre mi</h1>
      <div className=" flex max-h-200px">
        <Image
          src="/img/doggo2.jpeg"
          width={200}
          height={200}
          alt="Foto de mi perro"
          className=" rounded-3xl w-44 max-h-44"
        />
        <div className="prose prose-lg dark:prose-invert">
        <p className="text-xl font-bold ml-4">
          Soy Victor, actualmente estoy estudiando DAW en la U-Tad
        </p><br />
        <p className="text-xl ml-4">
          Aparte de la programacion tambien me gusta la fotografía, la astronomía y el senderismo en el ambito de la programacion estoy interesado en ciberseguridad, la computacion en nube y la administracion de sistemas, pero tambien me gusta aprender sobre mas cosas. 
        </p>
      </div>
      </div>
      
    </div>
  );
}