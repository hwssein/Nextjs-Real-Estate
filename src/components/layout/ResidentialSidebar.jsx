"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function ResidentialSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedItem, setSelectedItem] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [resetValue, setResetValue] = useState("");

  useEffect(() => {
    if (resetValue === "delete") {
      searchHandler();

      setResetValue("");
    }
  }, [resetValue]);

  useEffect(() => {
    const categoryQuery = searchParams.get("category");
    const searchQuery = searchParams.get("search");

    if (categoryQuery) {
      setSelectedItem(categoryQuery);
    } else {
      setSelectedItem("all");
    }

    if (searchQuery) setSearchValue(searchQuery);
  }, []);

  const categories = [
    { vila: "ویلا" },
    { apartment: "آپارتمان" },
    { store: "مغازه" },
    { commercial: "تجاری" },
    { land: "زمین" },
  ];

  const searchHandler = () => {
    const currentParams = new URLSearchParams(searchParams);

    if (searchValue) {
      currentParams.set("search", searchValue);
    } else {
      currentParams.delete("search");
    }

    router.push(`/residential-post?${currentParams.toString()}`);
  };

  const categoryHandler = (category) => {
    setSelectedItem(category);

    const currentParams = new URLSearchParams(searchParams);

    if (category === "all") {
      currentParams.delete("category");
    } else {
      currentParams.set("category", category);
    }

    router.replace(`/residential-post?${currentParams.toString()}`);
  };

  const resetSearch = () => {
    setSearchValue("");

    setResetValue("delete");
  };

  return (
    <>
      <div className="w-full p-1 flex flex-col items-center justify-center gap-4">
        <div className="w-full flex items-center justify-between gap-1">
          <button className="button1" onClick={searchHandler} type="submit">
            <FaMagnifyingGlass />
          </button>

          <div className="w-full p-1 border border-line rounded flex items-center justify-between">
            <input
              type="text"
              className="w-full bg-bgMain"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            <span
              className={`p-1 ${
                searchValue ? "block" : "invisible"
              } cursor-pointer`}
              onClick={resetSearch}
            >
              <IoCloseSharp />
            </span>
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-2 sm:flex-col sm:flex-nowrap">
          <span
            className={`button1 w-16 text-center ${
              selectedItem === "all" ? "!bg-secondary" : null
            } cursor-pointer sm:w-4/5`}
            onClick={() => categoryHandler("all", "all")}
          >
            همه
          </span>

          {categories.map((item) => (
            <span
              className={`button1 w-16 text-center ${
                selectedItem === Object.keys(item)[0] ? "!bg-secondary" : null
              } cursor-pointer sm:w-4/5`}
              key={Object.keys(item)[0]}
              onClick={() => categoryHandler(Object.keys(item)[0])}
            >
              {Object.values(item)[0]}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ResidentialSidebar;
