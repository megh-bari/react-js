import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [currency]);

  // Log the data when it changes
  useEffect(() => {
    console.log(data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
