import { useRef, useState } from "react";
import './App.css'
import SalesTable from "./components/SalesTable/SalesTable";

const App = () => {
  const [showDepositForm, setShowDepositForm] = useState(false);
  const [showAddSales, setShowAddSales] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');





  //get input value using useRef()

  const depositAmountRef = useRef();

  // Create refs to access the input elements
  const productNameRef = useRef();
  const priceRef = useRef();



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
    depositAmountRef.current.value = ''

  };


  console.log(productName, price);

  const handleAddSale = () => {
    // Access input values using refs
    const productNameValue = productNameRef.current.value;
    const priceValue = priceRef.current.value;

    setProductName(productNameValue)
    setPrice(priceValue)

    // Clear the input fields using refs
    productNameRef.current.value = '';
    priceRef.current.value = '';

    // Clear the state variables
    // setProductName('');
    // setPrice('');
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
            <input type="number" placeholder="Deposit Amount" ref={depositAmountRef} />
            <button id="deposit-money" onClick={handleDepositAmountChange}>Deposit</button>
          </div>
        )}
        {showAddSales && (
          <div id="add-sales">
            <h2>Add Sale</h2>
            <input type="text" placeholder="Product Name" autoComplete="off" ref={productNameRef} />
            <input type="number" placeholder="price" autoComplete="off" ref={priceRef} />
            <button id="add-sale" onClick={handleAddSale}>Add Sale</button>
          </div>
        )}
        {
        }
      </section>
      <SalesTable depositAmount={depositAmount} />
    </div>
  )
};

export default App;



