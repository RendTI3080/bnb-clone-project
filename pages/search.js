import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMain from "../components/Search/SearchMain";
import { useRouter } from "next/router";
import format from "date-fns/format";
import InfoCard from "../components/Search/InfoCard";
import SearchPagi from "../components/Search/SearchPagi";

export default function SearchPage({ hotelData }) {
  const router = useRouter();

  const { location, startDate, endDate, guest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <Fragment>
      <Header placeholder={` ${location} | ${range} | ${guest} guest`} />
      <SearchMain
        range={range}
        location={location}
        guest={guest}
        hotelData={hotelData}
      />

     <div className="flex flex-col">
     {hotelData.map((item) => (
        <InfoCard
          key={item.img}
          img={item.img}
          location={item.location}
          price={item.price}
          star={item.star}
          title={item.title}
          total={item.total}
          description={item.description}
        />
      ))}
     </div>

     <SearchPagi/>

      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const hotelData = await fetch(
    "https://bnb-clone-2f535-default-rtdb.asia-southeast1.firebasedatabase.app/hotel.json"
  ).then((res) => res.json());

  return {
    props: {
      hotelData,
    },
  };
}
