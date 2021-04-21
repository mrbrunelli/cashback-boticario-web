import styles from "../styles/components/Profile.module.css";
import { formatBRL, formatCpf } from "../helpers";
import { FiMail, FiTag, FiUser } from "react-icons/fi";

export default function Profiler({ dealerData }) {
  const dealer = JSON.parse(dealerData);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle}>
          <FiUser size="5rem" />
        </div>
        <div className={styles.details}>
          <h2>Olá, {dealer.name}</h2>
          <h3>
            Saldo CashBack: &nbsp;
            <span className={styles.badge}>
              {formatBRL(dealer.cashback_amount)}
            </span>
          </h3>
          <small>E-mail: {dealer.email}</small>
          <br />
          <small>CPF: {formatCpf(dealer.cpf)}</small>
        </div>
      </div>
    </>
  );
}
