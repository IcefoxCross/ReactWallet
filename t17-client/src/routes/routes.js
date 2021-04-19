import HomeScreen from "../screens/Home/HomeScreen";
import FormularioDeRegistro from "../components/FormularioDeRegistro/FormularioDeRegistroComponents";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", Component: FormularioDeRegistro}
];

export default routes;