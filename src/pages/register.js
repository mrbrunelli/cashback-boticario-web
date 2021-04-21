import Head from "next/head";
import { useRouter } from "next/router";
import api from "../services/api";
import styles from "../styles/pages/Register.module.css";
import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  /**
   * @param {object} data
   * @param {string} data.name
   * @param {string} data.cpf
   * @param {string} data.email
   * @param {string} data.password
   */
  const onSubmit = async (data) => {
    try {
      const res = await api.post("/dealer", data);
      alert(res.data.toString());
      router.push("/");
    } catch (e) {
      alert("Erro ao realizar cadastro.");
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro - O Boticário</title>
        <link rel="shortcut icon" href="/boticario.png" type="image/x-icon" />
      </Head>
      <div className={styles.container}>
        <section className={styles.login}>
          <div className={styles.card}>
            <header>
              <h1>Cadastre-se</h1>
            </header>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Nome</label>
              <input
                {...register("name")}
                type="text"
                maxLength="50"
                placeholder="Digite seu Nome Completo"
                required
              />
              <label>CPF</label>
              <input
                {...register("cpf", { pattern: /\d{11}/g})}
                type="text"
                maxLength="11"
                minLength="11"
                placeholder="Digite seu CPF"
              />
              <label>E-mail</label>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Digite seu E-mail"
                required
              />
              <label>Senha</label>
              <input
                {...register("password")}
                type="password"
                id="password"
                minLength="8"
                maxLength="20"
                placeholder="Digite sua Senha"
                required
              />
              <button type="submit">
                Cadastrar
              </button>
            </form>
          </div>
        </section>
        <section className={styles.hello}>
          <h1>Faça seu cadastro</h1>
          <h4>E aproveite o melhor em Cosméticos.</h4>
        </section>
      </div>
    </>
  );
}
