import React from "react";

const OrdersTab = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <div>
        <p className="text-center text-p1 font-bold">No orders Yet!</p>
      </div>
    );
  }
  return <div>OrdersTab</div>;
};

export default OrdersTab;
