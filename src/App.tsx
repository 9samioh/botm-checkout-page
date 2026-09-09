import "./App.css";
import { CheckoutPage } from "./components/CheckoutPage";
import { testBooks, testAddress } from "./data/checkoutData";

function App() {
  return (
    <div>
      <h1>Get started</h1>
      <CheckoutPage books={testBooks} address={testAddress} />
    </div>
  );
}

export default App;
