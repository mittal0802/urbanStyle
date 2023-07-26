import {
  PageTitle,
  PastOrdersContainer,
  PastOrdersPageContainer,
  EmptyMessage,
  EmptyMessageContainer,
} from "./past-orders-page.styles";
import PastOrder from "../../components/past-order/past-order.component";
import { useContext } from "react";
import { OrderContext } from "../../contexts/orders.context";

const PastOrdersPage = () => {
  const { orders } = useContext(OrderContext);
  return (
    <PastOrdersPageContainer>
      <PageTitle>Order History</PageTitle>
      <PastOrdersContainer>
        {orders.length ? (
          orders
            .slice()
            .reverse()
            .map((order) => <PastOrder key={order.id} order={order} />)
        ) : (
          <EmptyMessageContainer>
            <EmptyMessage>You have no past orders</EmptyMessage>
          </EmptyMessageContainer>
        )}
      </PastOrdersContainer>
    </PastOrdersPageContainer>
  );
};
export default PastOrdersPage;
