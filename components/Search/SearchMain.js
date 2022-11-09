export default function SearchMain({ range, guest, location}) {

  return (
    <div className="flex">
      <section className="flex-grow pt-14 px-6">
        <p className="text-xs">300+ Stays - {range} - for {guest} number of guest</p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button-custom">
            Cancelion Flexibility
          </p>
          <p className="button-custom">
            Type of Place
          </p>
          <p className="button-custom">
            Price
          </p>
          <p className="button-custom">
            Rooms and Beds
          </p>
          <p className="button-custom">
            More filters
          </p>
        </div>
      </section>
    </div>
  );
}
