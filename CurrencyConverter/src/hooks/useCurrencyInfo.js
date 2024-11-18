import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [lastFetchTime, setLastFetchTime] = useState(null);
  const cacheDuration = 5 * 60 * 1000; // 5 minutes

  useEffect(() => {
    const now = Date.now();

    // If the data is older than the cache duration, fetch new data
    if (!lastFetchTime || now - lastFetchTime > cacheDuration) {
      fetch(
        `http://api.exchangeratesapi.io/v1/latest?access_key=12674b7017a0be691082fe4223e4c7c4&format=1`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res && res.rates) {
            setData(res.rates);
            setLastFetchTime(now); // Update last fetch time
          }
        })
        .catch((error) => {
          console.error("Error fetching currency data:", error);
        });
    }
  }, [currency, lastFetchTime]);

  return data;
}

export default useCurrencyInfo;
