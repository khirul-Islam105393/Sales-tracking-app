import { useRef, useState } from "react";
import './App.css'
import SalesTable from "./components/SalesTable/SalesTable";

const App = () => {
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showAddSales, setShowAddSales] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const depositAmountRef = useRef(null);
  const handleShowDepositForm = () => {
    setShowDepositForm(true);
    setShowAddSales(false);
  };

  const handleShowAddSales = () => {
    setShowDepositForm(false);
    setShowAddSales(true);
  };

  

  const handleDepositAmountChange = () => {
    const value = depositAmountRef.current.value;
    setDepositAmount(value)
   console.log(depositAmount);
    depositAmountRef.current.value = ''
  };



  return (

    <div id="app">
    <section>
      <h1>Sales Tracking App</h1>
      <div className="buttons-container">
        <button type="button" onClick={handleShowDepositForm}>
          Deposit
        </button>
        <button type="button" onClick={handleShowAddSales}>
          Add a Sale
        </button>
      </div>
      {showDepositForm && (
        <div id="deposit-form">
          <h2>Deposit Money</h2>
          <input type="number" placeholder="Deposit Amount" ref={depositAmountRef}/>
          <button id="deposit-money" onClick={handleDepositAmountChange}>Deposit</button>
        </div>
      )}
      {showAddSales && (
        <div id="add-sales">
          <h2>Add Sale</h2>
          <input type="text" placeholder="Product Name" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <button id="add-sale">Add Sale</button>
        </div>
      )}
      {
      }
    </section>
    <SalesTable depositAmount={depositAmount}/>
  </div>
  )
};

export default App;



