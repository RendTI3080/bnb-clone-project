import { Fragment } from "react";
import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";
import LargeCard from "./LargeCard";

export default function Explore({ exploreData, liveData }) {
  return (
    <Fragment>
      <section className="pt-6">
        <h2 className="text-4xl font-semibold">Explore The World</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((data) => (
            <SmallCard
              key={data.id}
              location={data.location}
              img={data.img}
              distance={data.distance}
            />
          ))}
        </div>
      </section>

      <section className="pt-8">
        <h2 className="text-4xl font-semibold">Live Anywhere</h2>

        <div className="flex space-x-3 overflow-scroll scrollbar-hide mt-10 p-3 -ml-3">
          {liveData.map((data) => (
            <MediumCard key={data.id} title={data.title} img={data.img} />
          ))}
        </div>
      </section>

      <section className="relative my-16 cursor-pointer">
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="wishlists cureted by Airbnb"
          buttonText="Get Inspired"
        />
      </section>
    </Fragment>
  );
}
