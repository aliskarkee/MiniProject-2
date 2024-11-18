import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisable = false,
  currencyDisable = false,
}) {
  const inputId = useId();

  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-col text-right">
        <label className="text-black/40 mb-2">Currency Type</label>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;