import HomeScreen from "../screens/Home/HomeScreen";
import FormSignUp from "../components/FormSignUp/FormSignUpComponent";
import CashOutScreen from "../screens/CashOut/CashOutScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormSignUp },
  { path: "/cashout", Component: CashOutScreen },
];

export default routes;