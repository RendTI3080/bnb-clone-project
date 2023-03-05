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
  // database for exploreData
  const exploreData = await fetch().then(
    (res) => res.json()
  );

  // database for liveData
  const liveData = await fetch().then(
    (res) => res.json()
  );


  return {
    props: {
      exploreData,
      liveData
    },
  };
}
