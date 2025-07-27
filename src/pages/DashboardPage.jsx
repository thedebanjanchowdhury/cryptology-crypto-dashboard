import React, { useEffect, useState, useMemo } from "react";
import Tabs from "../components/Dashboard/Tabs";
import Header from "../components/common/Header";
import axios from "axios";
import Search from "../components/Dashboard/Search";
import Pagination from "../components/Dashboard/Pagination";
import Loader from "../components/common/Loader";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = value - 1 * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = useMemo(() => {
    return coins.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.symbol.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [coins, search]);

  useEffect(() => {
    setPage(1);
    setPaginatedCoins(filteredCoins.slice(0, 10));
  }, [coins, search]);

  useEffect(() => {
    const startIdx = (page - 1) * 10;
    setPaginatedCoins(filteredCoins.slice(startIdx, startIdx + 10));
  }, [page, filteredCoins]);

  useEffect(() => {
    axios
      .get("/api/api/v3/coins/markets/?vs_currency=usd&order=market_cap_desc")
      .then((res) => {
        setCoins(res.data);
        setPaginatedCoins(res.data.slice(0, 10));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Search search={search} onSearchChange={onSearchChange} />
          <Tabs coins={paginatedCoins} />
          <Pagination page={page} handleChange={handlePageChange} />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
