

import './SalesTable.css';

function SalesTable({ depositAmount }) {

  console.log(depositAmount);
  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }
  const date = getCurrentDate()

  const salesData = [
    { id: 1, name: 'SS',deposited:5 },
    { id: 2, name: 'SS',deposited:''  },
    { id: 3, name: 'SS',deposited:'20' },
    { id: 4, name: 'SS' },
    { id: 5, name: 'SS',deposited:'21' },
    { id: 6, name: 'SS',deposited:'22' },
  ];
  

  return (
    <>
      <div id="sales-table">
        <h2>History Table</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Name</th>
              <th>Deposit Amount</th>
              <th>Amount</th>
              <th>Remaining Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* Map and render 'salesData' to display sales records */}
            {salesData.map((record, index) => (
              <tr key={index}>
                <td>{date}</td>
                <td>{record.name}</td>
                <td>{record.deposited}</td>
                <td>{depositAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}

export default SalesTable;
