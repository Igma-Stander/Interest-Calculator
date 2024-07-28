import React from "react";
import { useState } from "react";
import Interest from "./Interest";
import BankFee from "./BankFee";

function Balance() {
  //setting state for the balance
  let [balance, setBalance] = useState(15000);
  //setting the state for the deposit amount
  let [depositAmount, setDepositAmount] = useState("");
  //state for withdraw amount
  let [withdrawAmount, setWithdrawAmount] = useState("");

  //state for interest rate depending on fixed or specified
  let [interestRate, setInterestRate] = useState("");
  let [isFixed, setIsFixed] = useState(false);
  let fixedInterestRate = 7;

  //state for banking fees also depending on fixed amount or user specified
  let [feeAmount, setFeeAmount] = useState("");
  let [isFixedFee, setIsFixedFee] = useState(false);
  let fixedFeeAmount = 2;

  //functions to handle change
  let handleDeposit = () => {
    if (depositAmount === "") {
      alert("Please enter an amount.");
      return;
    }
    setBalance(balance + parseFloat(depositAmount));
    setDepositAmount("");
  };

  //added an if statement to alert when in the negatives
  let handleWithdraw = () => {
    if (withdrawAmount === "") {
      alert("Please enter an amount.");
      return;
    }
    if (parseFloat(withdrawAmount) > balance) {
      alert("Insufficient funds");
      return;
    }
    //parseFloat used to turn string into number
    setBalance(balance - parseFloat(withdrawAmount));
    setWithdrawAmount("");
  };

  //if statement for when fixed option is checked
  let applyInterest = () => {
    if (!isFixed && interestRate === "") {
      alert("Please enter the interest rate.");
      return;
    }
    let newBalance;
    if (isFixed) {
      //divide by 100 to make a percentage
      let interestAmount = (balance * fixedInterestRate) / 100;
      newBalance = balance + interestAmount;
    } else {
      let interestAmount = (balance * parseFloat(interestRate)) / 100;
      newBalance = balance + interestAmount;
    }
    setBalance(newBalance);
  };

  //same as interest rate ,but just subtracting
  let applyBankFees = () => {
    if (!isFixedFee && feeAmount === "") {
      alert("Please enter the fee amount.");
      return;
    }
    let newBalance;
    if (isFixedFee) {
      let feeRate = (balance * fixedFeeAmount) / 100;
      newBalance = balance - feeRate;
    } else {
      let feeRate = (balance * parseFloat(feeAmount)) / 100;
      newBalance = balance - feeRate;
    }
    setBalance(newBalance);
  };

  //return with JSX
  return (
    <div>
      <h1 className="heading">
        {/*toFixed used to stop decimal places after 2 decimals*/}
        Your current balance is:
        <p style={{ color: "white" }}>R{balance.toFixed(2)}</p>
      </h1>

      {/*input and button for deposit*/}
      {/*used div tags to style better*/}
      <div className="body">
        <h4>Enter the amount you want to deposit: </h4>
        <br />
        <input
          type="number"
          onChange={(event) => setDepositAmount(event.target.value)}
          name="balance"
          placeholder="Enter amount here"
          value={depositAmount}
        />

        <button className="button" onClick={handleDeposit}>
          Deposit
        </button>
      </div>

      <hr className="hr" />

      {/*input and button for withdraw*/}
      <div className="body">
        <h4>Enter the amount you want to withdraw: </h4>
        <br />
        <input
          type="number"
          onChange={(event) => setWithdrawAmount(event.target.value)}
          name="withdraw"
          placeholder="Enter amount here"
          value={withdrawAmount}
        />

        <button className="button" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>

      <hr className="hr" />

      {/*using props from Interest tag that was imported*/}
      <div className="body">
        <Interest
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          isFixed={isFixed}
          setIsFixed={setIsFixed}
        />
        <button className="bigger" onClick={applyInterest}>
          Add interest
        </button>
      </div>

      <hr className="hr" />

      {/*same as interest rate with using of props*/}
      <div className="body">
        <BankFee
          feeAmount={feeAmount}
          setFeeAmount={setFeeAmount}
          isFixedFee={isFixedFee}
          setIsFixedFee={setIsFixedFee}
        />
        <button className="bigger" onClick={applyBankFees}>
          Add banking fees
        </button>
      </div>
      <hr className="hr" />
    </div>
  );
}
export default Balance;
