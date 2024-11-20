import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_aEpEEfO7T8KqSs5nDnse9G0Sto5oVNt2TuFCANkm`
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const result = await response.json();

        const rates = result.data;
        if (rates && rates[currency]) {
          setData(rates); 
        } else {
          throw new Error("Currency not found in API response");
        }
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setError(err.message); 
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return { data, error }; 
}

export default useCurrencyInfo;
