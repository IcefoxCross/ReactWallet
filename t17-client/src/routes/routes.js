import HomeScreen from "../screens/Home/HomeScreen";
import FormSignUp from "../components/FormSignUp/FormSignUpComponent";
import CreateFixedTermDepositScreen from "../screens/CreateFixedTermDeposit/CreateFixedTermDepositScreen";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormSignUp },
  { path: "/create-ftd", Component: CreateFixedTermDepositScreen },
];

export default routes;