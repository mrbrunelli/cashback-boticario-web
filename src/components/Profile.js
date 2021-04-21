import styles from "../styles/components/Profile.module.css";
import { formatCpf, formatBRL } from "../helpers";
import { FiUser } from "react-icons/fi";

export default function Profiler({ dealerData }) {
  const dealer = JSON.parse(dealerData);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.circle}>
          <FiUser size="3rem" />
        </div>
        <h1>Perfil</h1>
        <div className={styles.details}>
          <p><strong>Nome: </strong>{dealer.name}</p>
          <p><strong>CPF: </strong>{formatCpf(dealer.cpf)}</p>
          <p><strong>E-mail: </strong>{dealer.email}</p>
          <p><strong>Saldo Cashback: </strong>{formatBRL(dealer.cashback_amount)}</p>
        </div>
      </div>
    </>
  );
}
