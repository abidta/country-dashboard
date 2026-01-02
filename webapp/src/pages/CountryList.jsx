import React, { useEffect, useState } from "react";
import { getAllCountries, getCountriesByRegion, getCountryByName } from "../services/api";
import CountryCard from "../components/CountryCard";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 12;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);

        // this not ideal for large datasets
        const uniqueRegions = [
          ...new Set(data.map((c) => c.region).filter(Boolean)),
        ];
        setRegions(uniqueRegions);
      } catch (err) {
        setError("Failed to fetch countries");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRegions = async () => {
      try {
        setLoading(true);
        const data = await getCountriesByRegion(region.toLowerCase());
        setCountries(data);
      } catch (err) {
        setError("Failed to fetch regions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    const fetchSearchCountries = async () =>{
        try {
          setLoading(true);
          const data = await getCountryByName(searchTerm.toLowerCase());
          setCountries(data);
        } catch (err) {
          setError("Failed to fetch regions");
          console.error(err);
        } finally {
          setLoading(false);
        }
    }
     if(searchTerm){
      fetchSearchCountries()
     }
     if(region){
      fetchRegions();
     }
     if(!searchTerm && !region){
       fetchCountries();
     }

  }, [region, searchTerm]);


  const indexOfLast = currentPage * countriesPerPage;
  const indexOfFirst = indexOfLast - countriesPerPage;
  const currentCountries = countries?.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(countries?.length / countriesPerPage);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));


  if (loading)
    return (
      <p className="text-center mt-10 dark:text-slate-300">
        Loading countries...
      </p>
    );
  if (error) return <p className="text-center mt-10 text-red-500">{'no result found'}</p>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filters
          region={region}
          setRegion={setRegion}
          regions={regions}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentCountries.map((country) => (
          <CountryCard key={country.cca2} country={country} cca2={country.cca2} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-500 px-4 py-3 rounded-xl shadow-md">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-3 py-1.5 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition"
          >
            Prev
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (num) =>
                num === 1 ||
                num === totalPages ||
                Math.abs(num - currentPage) <= 1
            )
            .map((num, index, arr) => (
              <React.Fragment key={num}>
                {index > 0 && num - arr[index - 1] > 1 && (
                  <span className="px-2 text-gray-400">...</span>
                )}

                <button
                  onClick={() => goToPage(num)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition
              ${
                currentPage === num
                  ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow"
                  : "bg-gray-100  text-gray-700 hover:bg-gray-200"
              }`}
                >
                  {num}
                </button>
              </React.Fragment>
            ))}

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1.5 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
