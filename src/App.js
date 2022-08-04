import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/welcome" />
					</Route>

					<Route path="/welcome">
						<Welcome />
					</Route>

					<Route path="/products" exact>
						<Products />
					</Route>
          
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
