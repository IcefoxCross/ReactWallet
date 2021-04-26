import HomeScreen from "../screens/Home/HomeScreen";
import FormSignUp from "../components/FormSignUp/FormSignUpComponent";
import LoginScreen from '../screens/login/LoginScreen';
import CashOutScreen from "../screens/CashOut/CashOutScreen";
import FormTopupMoney from '../components/FormTopupMoney/FormTopupMoneyComponent'
import ListFixedTermDeposit from '../components/ListFixedTermDeposit/ListFixedTermDepositComponent'

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormSignUp },
  { path: "/login", Component: LoginScreen},
  { path: "/cashout", Component: CashOutScreen },
  { path: "/topupMoney", Component: FormTopupMoney },
  {path: "/listFixedTermDeposit", Component: ListFixedTermDeposit}
];

export default routes;