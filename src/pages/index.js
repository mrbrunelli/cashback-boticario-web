import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import styles from "../styles/pages/Login.module.css";
import { useForm } from "react-hook-form";
import api from "../services/api";

export default function Login() {
  const [cookie, setCookie] = useCookies(["dealer"]);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);
      setCookie("dealer", JSON.stringify(res.data), {
        path: "/",
        maxAge: 3600 * 8,
        sameSite: true,
      });
      router.push("/home");
    } catch (e) {
      alert("Erro ao realizar Login.");
    }
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                type="email"
                id="email"
                placeholder="Digite seu E-mail"
                required
              />
              <input
                {...register("password")}
                type="password"
                id="password"
                placeholder="Digite sua Senha"
                maxLength="20"
                required
              />
              <button type="submit">
                Entrar
              </button>
              <small>
                Não tem uma conta?
                <Link href="/register">
                  <a> Cadastre-se aqui!</a>
                </Link>
              </small>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
