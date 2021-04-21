import { useEffect, useState } from "react";
import api from "../services/api";
import styles from "../styles/components/Report.module.css";
import {
  calculateCashBack,
  calculateDiscountPercent,
  formatBRL,
  formatDate,
} from "../helpers";

export default function Report({ dealerData }) {
  const dealer = JSON.parse(dealerData);
  const [orders, setOrders] = useState();

  const getOrdersByDealerId = async (id, token) => {
    try {
      const res = await api.get(`/order/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return res.data;
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    (async () => {
      const orders = await getOrdersByDealerId(dealer.id, dealer.token);
      if (orders) {
        setOrders(orders);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h2>Relatório de Pedidos</h2>
        <p>Cód. Revendedor: {dealer.id}</p>
        <div className={styles.cardContainer}>
          {orders && orders.map((o) => (
            <div className={styles.card}>
              <p>Cód: {o.cod}</p>
              <small>Data: {formatDate(o.date, "pt-BR")}</small>
              <small>
                Valor Bruto: <strong>{formatBRL(o.gloss_amount)}</strong>
              </small>
              <small>
                Valor Líquido: <strong>{formatBRL(o.net_amount)}</strong>
              </small>
              <small>
                % Desconto:{" "}
                <strong>
                  {calculateDiscountPercent(o.gloss_amount, o.net_amount)} %
                </strong>
              </small>
              <small>
                Cashback Gerado:{" "}
                <strong>{formatBRL(calculateCashBack(o.net_amount, 3))}</strong>
              </small>
              <small>
                Status: <strong>{o.order_status_description}</strong>
              </small>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
