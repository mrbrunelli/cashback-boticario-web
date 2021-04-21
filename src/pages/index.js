import Head from "next/head";
import Link from "next/link";
import styles from "../styles/pages/Login.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - O Boticário</title>
        <link rel="shortcut icon" href="/boticario.png" type="image/x-icon" />
      </Head>
      <div className={styles.container}>
        <section className={styles.hello}>
          <h1>O Boticário</h1>
          <h4>Frete GRÁTIS em todas as compras</h4>
        </section>
        <section className={styles.login}>
          <div className={styles.card}>
            <header>
              <h1>Faça seu Login</h1>
            </header>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu E-mail"
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua Senha"
                required
              />
              <button type="submit">
                Entrar
              </button>
              <small>
                Não tem uma conta?
                <Link href="/register"><a> Cadastre-se aqui!</a></Link>
              </small>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
