import React, {createContext, useState} from 'react';
import {OrderListData} from '../Data/orderListData';
import {OrderDetailData} from '../Data/orderDetailData';
export const OrderContext = createContext();

const OrderProvider = ({children}) => {
  const [orderData, setOrderData] = useState({
    listOrder: OrderListData,
    detailOrderList: OrderDetailData,
  });
  const [quantity, setQuantity] = useState({
    pending: 3,
    picking: 3,
    shipping: 3,
    rating: 2,
    completed: 2,
    cancelled: 2,
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
    let newQuantity = {
      pending: quantity.pending + 1,
    };
    setQuantity({...quantity, ...newQuantity});
  };
  const updateStatusOrder = (invoiceID, status) => {
    let newStatus;
    let newOrderData = {...orderData};
    switch (status) {
      case 'PENDING':
        newStatus = 'CANCELLED';
        newStatusProcess = 'Cancelled';
        let newQuantity = {
          pending: quantity.pending - 1,
          cancelled: quantity.cancelled + 1,
        };
        setQuantity({...quantity, ...newQuantity});
        break;
      case 'SHIPPING':
        newStatus = 'COMPLETED';
        newStatusProcess = 'Completed';
        newQuantity = {
          shipping: quantity.shipping - 1,
          completed: quantity.completed + 1,
        };
        setQuantity({...quantity, ...newQuantity});
        break;
      case 'COMPLETED':
        newStatus = 'REMOVE';
        newQuantity = {
          completed: quantity.completed - 1,
        };
        setQuantity({...quantity, ...newQuantity});
        break;
      case 'CANCELLED':
        newStatus = 'PENDING';
        newStatusProcess = 'Waiting to confirm';
        newQuantity = {
          pending: quantity.pending + 1,
          cancelled: quantity.cancelled - 1,
        };
        setQuantity({...quantity, ...newQuantity});
        break;
    }
    for (let index = 0; index < newOrderData.listOrder.length; index++) {
      if (parseInt(invoiceID) === newOrderData.listOrder[index].invoiceID) {
        if (status === 'COMPLETED') newOrderData.listOrder.splice(index, 1);
        else {
          newOrderData.listOrder[index].statusInvoice = newStatus;
          newOrderData.listOrder[index].statusProcess = newStatusProcess;
        }
        break;
      }
    }
    for (let index = 0; index < newOrderData.detailOrderList.length; index++) {
      if (
        parseInt(invoiceID) === newOrderData.detailOrderList[index].invoiceID
      ) {
        if (status === 'COMPLETED')
          newOrderData.detailOrderList.splice(index, 1);
        else {
          newOrderData.detailOrderList[index].statusInvoice = newStatus;
        }
        break;
      }
    }
    setOrderData(newOrderData);
  };

  return (
    <OrderContext.Provider
      value={{orderData, quantity, placeOrder, updateStatusOrder}}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
