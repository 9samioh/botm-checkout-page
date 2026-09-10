import type {
  Address,
  Book,
  OrderConfirmation,
  Status,
} from "../../types/types";
import styles from "./CheckoutPage.module.css";
import { BookItem } from "../BookItem/BookItem";
import { PaymentSummary } from "../PaymentSummary/PaymentSummary";
import { useState } from "react";
import { testFetch } from "../../api/checkout";
import { ConfirmationPopup } from "../ConfirmationPopup/ConfirmationPopup";

interface CheckoutPageProps {
  books: Book[];
  address: Address;
}

export function CheckoutPage({ books, address }: CheckoutPageProps) {
  // react hooks to manage the loading state idle" | "loading" | "success" | "error
  // These live in the parent (Checkout Page) and are passed down to children (Payment Summary)
  const [status, setStatus] = useState<Status>("idle");

  // holds the api response if successfull
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(
    null
  );
  // holds the api response if failed
  const [error, setError] = useState<string | null>(null);

  // summing up the total here, so it's always accurate when {books} changes
  const bookIds = books.map((book) => book.id);
  const total = books.reduce((sum, book) => sum + book.price, 0).toFixed(2);

  async function placeOrder() {
    // set status and remove any old errors
    setStatus("loading");
    setError(null);

    try {
      // this was my mock fetch to test my UI locally
      // const response = await testFetch(bookIds);

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookIds }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        setStatus("error");
        return;
      } else {
        setConfirmation(data);
        setStatus("success");
      }
    } catch (err) {
      setError("Failed to fetch");
      setStatus("error");
    }
  }

  return (
    <div className={styles.checkoutPage}>
      <h1>Checkout</h1>

      <div className={styles.content}>
        <div className={styles.items}>
          <h2>Your Cart ({books.length})</h2>
          <ul className={styles.books}>
            {books.map((book) => (
              <BookItem book={book} key={book.id} />
            ))}
          </ul>
        </div>

        <div className={styles.summary}>
          <h2>Order Summary</h2>
          <PaymentSummary
            total={total}
            address={address}
            status={status}
            onPlaceOrder={placeOrder}
            error={error}
          />
        </div>
      </div>

      {status === "success" && confirmation && (
        <ConfirmationPopup
          orderId={confirmation.orderId}
          estimatedShipDate={confirmation.estimatedShipDate}
        />
      )}
    </div>
  );
}
