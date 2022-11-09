import Image from "next/image";

export default function SmallCard(props) {
  return (
    <div className="flex items-center m-2 mt-10 space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left side */}
      <div className="relative h-16 w-16">
        <Image src={props.img} alt="place" fill className="rounded-lg"/>
      </div>

      {/* Rigth side */}
      <div>
        <h2 className="font-semibold">{props.location}</h2>
        <h3 className="text-gray-500">{props.distance}</h3>
      </div>
    </div>
  );
}
