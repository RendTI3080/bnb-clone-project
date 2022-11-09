import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartRed } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function InfoCard({
  img,
  title,
  description,
  location,
  price,
  star,
  total,
}) {
  const [heartColor, setHeartColor] = useState(false);

  function heartHandler() {
    if (heartColor == false) {
      setHeartColor(true);
    } else {
      setHeartColor(false);
    }
  }

  return (
    <div className="flex py-7 px-2 mx-5 border-b cursor-pointer hover:opacity-80 hover:shadow-lg first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} fill className="object-cover rounded-lg" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          {!heartColor && (
            <HeartIcon className="h-7 cursor-pointer" onClick={heartHandler} />
          )}
          {heartColor && (
            <HeartRed
              className="h-7 cursor-pointer text-red-700"
              onClick={heartHandler}
            />
          )}
        </div>

        <h4 className="text-xl pt-2">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400 pr-2" />
            {star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
