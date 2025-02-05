import "./global.css"
import {Provider} from "react-redux";
import {store} from "./src/shared/store/store";
import {ProductList} from "./src/pages/ProductList";

export default function App() {
  return (
      <Provider store={store}>
        <ProductList/>
      </Provider>
  );
}
