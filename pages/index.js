import Head from "next/head";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/* Main Section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Explore exploreData={props.exploreData} liveData={props.liveData}/>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://bnb-clone-2f535-default-rtdb.asia-southeast1.firebasedatabase.app/explore.json").then(
    (res) => res.json()
  );

  const liveData = await fetch("https://bnb-clone-2f535-default-rtdb.asia-southeast1.firebasedatabase.app/live.json").then(
    (res) => res.json()
  );


  return {
    props: {
      exploreData,
      liveData
    },
  };
}
