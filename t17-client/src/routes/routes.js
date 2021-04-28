import HomeScreen from "../screens/Home/HomeScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import LoginScreen from '../screens/login/LoginScreen';
import CashOutScreen from "../screens/CashOut/CashOutScreen";
import FormTopupMoney from '../components/FormTopupMoney/FormTopupMoneyComponent'
import ListFixedTermDeposit from '../components/ListFixedTermDeposit/ListFixedTermDepositComponent'
import ListTopupMoneyScreen from '../screens/TopupMoneyList/TopupMoneyListScreen'
import CashOutListScreen from '../screens/CashOutList/CashOutListScreen'

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: RegisterScreen },
  { path: "/login", Component: LoginScreen},
  { path: "/cashout", Component: CashOutScreen },
  { path: "/topupMoney", Component: FormTopupMoney },
  { path: "/listFixedTermDeposit", Component: ListFixedTermDeposit},
  { path: "/listTopupMoney", Component: ListTopupMoneyScreen},
  { path: "/listCashOut", Component: CashOutListScreen}
];

export default routes;