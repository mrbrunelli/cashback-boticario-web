import { useContext } from "react";
import { SidebarContext } from "../contexts/Sidebar";
import { useForm } from "react-hook-form";
import styles from "../styles/components/Shopping.module.css";
import api from "../services/api";

export default function Shopping({ dealerData }) {
  const dealer = JSON.parse(dealerData);
  const { render } = useContext(SidebarContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = serializeFormData(data, dealer);
      console.log(formData);
      const res = await api.post("/order", formData, {
        headers: {
          authorization: dealer.token,
        },
      });
      alert(res.data.toString());
      // render("home");
    } catch (e) {
      alert(e.message);
    }
  };

  const serializeFormData = (data, dealer) => {
    const { cod, gloss_amount, date } = data;
    const { id, cashback_amount } = dealer;
    const net_amount = calculateNetAmount(gloss_amount, cashback_amount);
    const serializedFormData = {
      cod: Number(cod),
      gloss_amount: Number(gloss_amount),
      net_amount: Number(net_amount),
      date: String(date),
      dealer_id: Number(id),
    };
    return serializedFormData;
  };

  const calculateNetAmount = (gloss_amount, cashback_amount) => {
    return Number(gloss_amount) - Number(cashback_amount);
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Fechar Pedido</h1>
        <div className={styles.form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Código Pedido</label>
            <input
              {...register("cod")}
              type="number"
              maxLength="20"
              placeholder="Digite o código do pedido"
              required
            />
            <label>Valor Pedido</label>
            <input
              {...register("gloss_amount", {required: true, pattern: /\d/g})}
              type="number"
              placeholder="Digite o valor do pedido"
              required
            />
            <label>Data Pedido</label>
            <input
              {...register("date")}
              type="datetime-local"
              placeholder="Selecione a Data do Pedido"
              required
            />
            <button type="submit">Concluir</button>
          </form>
        </div>
      </div>
    </>
  );
}
