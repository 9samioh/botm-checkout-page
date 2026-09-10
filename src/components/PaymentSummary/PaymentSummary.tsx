import type { Address, Book, Status } from "../../types/types";
import styles from "./PaymentSummary.module.css";

interface PaymentSummaryProps {
  total: string;
  address: Address;
  status: Status;
  onPlaceOrder: () => void;
  error: string | null;
}

export function PaymentSummary({
  total,
  address,
  status,
  onPlaceOrder,
  error,
}: PaymentSummaryProps) {
  // the state variables and the onClick function are passed down here so that all the logic could be handled in the parent
  // loading state is shown clearly in the UI by button color and button text
  // not visible to the user, the button is also disabled to prevent multiple submissions while loading
  return (
    <div className={styles.summary}>
      <h3>Shipping Address</h3>
      <div className={styles.info}>
        <p>{address.name}</p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.state} {address.zip}
        </p>
      </div>

      <h3>Total Price</h3>
      <div className={styles.info}>
        <p>${total}</p>
      </div>

      <button
        onClick={onPlaceOrder}
        className={`${styles.button} ${
          status === "loading" ? styles.loading : ""
        }`}
        disabled={status === "loading"}
      >
        <p>{status === "loading" ? "Placing order..." : "Place Order"}</p>
      </button>

      {status === "error" && error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
