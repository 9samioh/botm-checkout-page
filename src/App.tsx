import "./App.css";
import { CheckoutPage } from "./components/CheckoutPage/CheckoutPage";
import { Header } from "./components/Header/Header";
import { testBooks, testAddress } from "./data/checkoutData";

function App() {
  return (
    <div>
      <Header />
      <CheckoutPage books={testBooks} address={testAddress} />
    </div>
  );
}

export default App;
