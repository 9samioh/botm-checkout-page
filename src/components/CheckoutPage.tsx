import { useState } from "react";
import type { Address, Book, OrderConfirmation } from "../types/types";
import { testFetch } from "../api/checkout";

type Status = "idle" | "loading" | "success" | "error";

interface CheckoutPageProps {
  books: Book[];
  address: Address;
}

export function CheckoutPage({ books, address }: CheckoutPageProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [confirmation, setConfirmation] = useState<OrderConfirmation | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  async function placeOrder() {
    setStatus("loading");
    setError(null);

    const bookIds = books.map((book) => book.id);
    try {
      //   const response = await fetch("/api/checkout", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ bookIds }),
      //   });
      const response = await testFetch(bookIds);

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
    <div>
      <div>books</div>
      <div>
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
      </div>
      <div>
        <button onClick={placeOrder}>Place Order</button>
        <p>{status}</p>
        {status === "success" && confirmation && <div>confirmed</div>}

        {status === "error" && error && <div>{error}</div>}
      </div>
    </div>
  );
}
