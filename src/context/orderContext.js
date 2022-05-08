// import React, {createContext, useState} from 'react';
// import {OrderListData} from '../Data/orderListData';
// import {OrderDetailData} from '../Data/orderDetailData';
// export const OrderContext = createContext();

// const OrderProvider = ({children}) => {
//   const [orderData, setOrderData] = useState({
//     listOrder: OrderListData,
//     detailOrderList: OrderDetailData,
//   });
  
//   const updateStatusOrder = (invoiceID, status) => {
//     let newStatus;
//     let newOrderData = {...orderData};
//     switch (status) {
//       case 'PENDING':
//         newStatus = 'CANCELLED';
//         newStatusProcess = 'Cancelled';
//         let newQuantity = {
//           pending: quantity.pending - 1,
//           cancelled: quantity.cancelled + 1,
//         };
//         setQuantity({...quantity, ...newQuantity});
//         break;
//       case 'SHIPPING':
//         newStatus = 'COMPLETED';
//         newStatusProcess = 'Completed';
//         newQuantity = {
//           shipping: quantity.shipping - 1,
//           completed: quantity.completed + 1,
//         };
//         setQuantity({...quantity, ...newQuantity});
//         break;
//       case 'COMPLETED':
//         newStatus = 'REMOVE';
//         newQuantity = {
//           completed: quantity.completed - 1,
//         };
//         setQuantity({...quantity, ...newQuantity});
//         break;
//       case 'CANCELLED':
//         newStatus = 'PENDING';
//         newStatusProcess = 'Waiting to confirm';
//         newQuantity = {
//           pending: quantity.pending + 1,
//           cancelled: quantity.cancelled - 1,
//         };
//         setQuantity({...quantity, ...newQuantity});
//         break;
//     }
//     for (let index = 0; index < newOrderData.listOrder.length; index++) {
//       if (parseInt(invoiceID) === newOrderData.listOrder[index].invoiceID) {
//         if (status === 'COMPLETED') newOrderData.listOrder.splice(index, 1);
//         else {
//           newOrderData.listOrder[index].statusInvoice = newStatus;
//           newOrderData.listOrder[index].statusProcess = newStatusProcess;
//         }
//         break;
//       }
//     }
//     for (let index = 0; index < newOrderData.detailOrderList.length; index++) {
//       if (
//         parseInt(invoiceID) === newOrderData.detailOrderList[index].invoiceID
//       ) {
//         if (status === 'COMPLETED')
//           newOrderData.detailOrderList.splice(index, 1);
//         else {
//           newOrderData.detailOrderList[index].statusInvoice = newStatus;
//         }
//         break;
//       }
//     }
//     setOrderData(newOrderData);
//   };

//   return (
//     <OrderContext.Provider
//       value={{orderData, quantity, updateStatusOrder}}>
//       {children}
//     </OrderContext.Provider>
//   );
// };

// export default OrderProvider;
