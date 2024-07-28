import React from "react";

//using a function with props that I lift into the parent component
function BankFee({ feeAmount, setFeeAmount, isFixedFee, setIsFixedFee }) {
  return (
    <div>
      {/*using inline styling*/}
      <label
        style={{
          fontSize: "21px",
          fontWeight: "500",
          padding: "8px",
        }}
      >
        {/*using a different input as with the rest*/}
        <input
          style={{ accentColor: "rgb(32, 183, 112)", marginRight: "8px" }}
          type="checkbox"
          checked={isFixedFee}
          onChange={(event) => setIsFixedFee(event.target.checked)}
        />
        Fixed bank fee
      </label>
      <br />
      {/*condition*/}
      {!isFixedFee && (
        <input
          type="number"
          onChange={(event) => setFeeAmount(event.target.value)}
          placeholder="Enter bank fee(%)"
          value={feeAmount}
        />
      )}
    </div>
  );
}
export default BankFee;
