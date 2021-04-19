import HomeScreen from "../screens/Home/HomeScreen";
import FormularioDeRegistro from "../components/FormularioDeRegistro/FormularioDeRegistroComponents";

const routes = [
  { path: "/", Component: HomeScreen },
  { path: "/register", FormularioDeRegistro}
];

export default routes;