import HomeScreen from "../screens/Home/HomeScreen";
import FormSignUp from "../components/FormSignUp/FormSignUpComponent";
import CashOutScreen from "../screens/CashOut/CashOutScreen";
import FormTopupMoney from '../components/FormTopupMoney/FormTopupMoneyComponent'
import ListFixedTermDeposit from '../components/ListFixedTermDeposit/ListFixedTermDepositComponent'
import BalanceScreen from "../screens/Balance/BalanceScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormSignUp },
  { path: "/cashout", Component: CashOutScreen },
  { path: "/topupMoney", Component: FormTopupMoney },
  { path: "/listFixedTermDeposit", Component: ListFixedTermDeposit },
  { path: "/balance", Component: BalanceScreen },
];

export default routes;