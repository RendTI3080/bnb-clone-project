import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // calender main style file
import "react-date-range/dist/theme/default.css"; // calender theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumberGuest] = useState(1);
  const [dropVal, setDrop] = useState(false);
  const router = useRouter();

  const resetInput = () => {
    setUserInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: userInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guest: numberOfGuest,
      },
    });
  };

  const signUpHandler = () => {
    router.push({
      pathname: "/login",
      query: {
        todo : "signup"
      },
    })
  }

  const signInHandler = () => {
    router.push({
      pathname: "/login",
      query: {
        todo : "signin"
      },
    })
  }

  const calenderHandler = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const dropdownHandler = () => {
    if (dropVal === false) {
      setDrop(true);
    } else {
      setDrop(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-5">
      {/* left header */}
      <div className="relative flex items-center h-6 md:h-10 cursor-pointer my-auto ml-3">
        <Link href="/">
          <Image
            src="https://links.papareact.com/qd3"
            fill
            className="object-contain object-left"
            alt="AirBnB"
          />
        </Link>
      </div>

      {/* Midlle header */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start Your Search"}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full cursor-pointer p-2 md:mx-2" />
      </div>

      {/* Rigth header */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 mr-3">
        <p className="hidden md:inline hover:border-b-2">Become a host</p>
        <GlobeAltIcon className="hidden md-inline-flex h-6" />
        <button
          className="flex border-2 p-2 space-x-2 rounded-full hover:border-gray-300 hover:cursor-pointer"
          onClick={dropdownHandler}
        >
          <Bars3Icon className="h-4 md:h-6" />
          <UserCircleIcon className="h-4 md:h-6" />
        </button>
      </div>

      {/* Dropdown menu*/}
      {dropVal && (
        <div className="flex col-span-6 justify-end">
          <div
            id="dropdown"
            className="absolute
           z-100 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefault"
            >
              <li>
                <button
                  className="block py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={signInHandler}
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  className="block py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={signUpHandler}
                >
                  Sign Up
                </button>
              </li>
              <li className="sm:hidden">
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Become a host
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {userInput && (
        <div className="flex flex-col col-span-3 mx-auto flex-grow mt-5">
          <div className="md:hidden">
            <DateRange
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5861"]}
              onChange={calenderHandler}
            />
          </div>

          <div className="hidden md:inline-flex">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5861"]}
              onChange={calenderHandler}
            />
          </div>

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UserCircleIcon className="h-5" />
            <input
              value={numberOfGuest}
              onChange={(e) => setNumberGuest(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            ></input>
          </div>

          {/* Search and cancel button */}
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
