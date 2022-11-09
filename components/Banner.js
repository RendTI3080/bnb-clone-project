import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        fill
        alt="banner image"
        className="object-cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg lg:text-2xl font-semibold mb-3">Traveling to world</p>
        <button className="text-purple-500 shadow-md font-bold py-4 px-10 bg-white rounded-full hover:shadow-xl active:scale-90 transition duration-150">Let's Go</button>
      </div>
    </div>
  );
}
