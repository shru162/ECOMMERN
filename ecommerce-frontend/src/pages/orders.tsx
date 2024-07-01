import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";


type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "hhhffhf",
      amount: 7878,
      quantity: 6,
      discount: 5666,
      status: <span className="red">Processing</span>,
      action: <Link to={`/order/hhhffhf`}>View</Link>,
    },
  ]);

  return (
    <div className="container">
      <h1>My Orders</h1>
      <table className="dashboard-product-box">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quantity</th>
            <th>Discount</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row._id}>
              <td>{row._id}</td>
              <td>{row.quantity}</td>
              <td>{row.discount}</td>
              <td>{row.amount}</td>
              <td>{row.status}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
