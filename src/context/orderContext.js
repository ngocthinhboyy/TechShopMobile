import React, {createContext, useState} from 'react';
import {OrderListData} from '../Data/orderListData';
import {OrderDetailData} from '../Data/orderDetailData';
export const OrderContext = createContext();

const OrderProvider = ({children}) => {
  const [orderData, setOrderData] = useState({
    listOrder: OrderListData,
    detailOrderList: OrderDetailData,
  });
  const placeOrder = payload => {
    let newOrderData = {...orderData};

    let invoiceID = orderData.listOrder.length + 1;
    // handle order
    let newOrder = payload.order;
    newOrder.invoiceID = invoiceID;
    newOrderData.listOrder.push(newOrder);

    // handle detail order
    let newDetailOrder = payload.detail;
    newDetailOrder.invoiceID = invoiceID;
    // convert cart data => detailedInvoices
    newDetailOrder.detailedInvoices = newDetailOrder.detailedInvoices.map(
      invoice => {
        let newInfo = {
          totalPrice: invoice.productPrice * invoice.quantity,
          isReviewed: true,
        };
        return {...invoice, ...newInfo};
      },
    );
    newOrderData.detailOrderList.push(newDetailOrder);
    setOrderData(newOrderData);
  };
  return (
    <OrderContext.Provider value={{orderData, placeOrder}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
