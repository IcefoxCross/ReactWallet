import HomeScreen from "../screens/Home/HomeScreen";
import FormSignUp from "../components/FormSignUp/FormSignUpComponent";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormSignUp}
];

export default routes;