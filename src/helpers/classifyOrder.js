import {OrderStatus} from '../utilities/Constant';

export const classifyOrder = listOrders => {
  let filterResults = {
    'placed-order': [],
    handling: [],
    deliveried: [],
    shipped: [],
    cancelled: [],
    rating: []
  };
  listOrders.forEach(order => {
    switch (order.status) {
      case OrderStatus.PLACED_ORDER:
        filterResults['placed-order'].push(order);
        break;
      case OrderStatus.IN_HANDLING:
        filterResults['handling'].push(order);
        break;
      case OrderStatus.DELIVERIED: {
        if (order.statusDetail === 'Reviewed')
          filterResults['rating'].push(order);
        else filterResults['deliveried'].push(order);
        break;
      }
      case OrderStatus.SHIPPED:
        filterResults['shipped'].push(order);
        break;
      case OrderStatus.CANCELLED:
        filterResults['cancelled'].push(order);
        break;
      default:
        break;
    }
  });
  return filterResults;
};
