import { Route } from "react-router-dom";
import Welcome from "./screens/Welcome";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetail";
import MainHeader from "./components/MainHeader";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
				<Route path="/products/:productId">
					<ProductDetail />
				</Route>
			</main>
		</div>
	);
}

export default App;
