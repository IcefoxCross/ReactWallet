import BalanceScreen from "../screens/Balance/BalanceScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/balance", Component: BalanceScreen },
];

export default routes;