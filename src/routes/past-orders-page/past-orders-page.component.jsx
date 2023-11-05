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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCurrentUser } from "../../store/user/user.selector";
const PastOrdersPage = () => {
  const { orders } = useContext(OrderContext);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/");
  }
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
