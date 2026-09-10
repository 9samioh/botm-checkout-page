import type { Book } from "../../types/types";
import styles from "./BookItem.module.css";

export function BookItem({ book }: { book: Book }) {
  return (
    <li className={styles.bookItem}>
      <img
        src={`/BookCovers/${book.coverImg}`}
        alt={`Cover of ${book.title}`}
        className={styles.cover}
      />
      <div className={styles.info}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div>
        <p>${book.price.toFixed(2)}</p>
      </div>
    </li>
  );
}
