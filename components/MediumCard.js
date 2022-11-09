import Image from "next/image";

export default function MediumCard(props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={props.img} alt="explore image" fill className="rounded-xl"/>
      </div>
      <h3 className="text-2xl mt-3">{props.title}</h3>
    </div>
  );
}
