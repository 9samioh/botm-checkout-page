import styles from "./ConfirmationPopup.module.css";

interface ConfirmationPopupProps {
  orderId: string;
  estimatedShipDate: string;
}

export function ConfirmationPopup({
  orderId,
  estimatedShipDate,
}: ConfirmationPopupProps) {
  // made the assumption that the date string is an iso string, so I'm formatting it to be readable
  const formattedDate = new Date(estimatedShipDate).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div>
          <h2 id="confirmation-title">Order Confirmed!</h2>
          <p>Thank you for your order. Happy reading &lt;3</p>
        </div>

        <div className={styles.info}>
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>
          <p>
            <strong>Estimated ship date:</strong> {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}
