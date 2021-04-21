import cookie from "cookie";

export const parseCookies = (req) => {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
};

/**
 * @param {object} data - Object cookie data - Ex: data.user
 */
export const haveCookies = (data) => {
  return !data ? false : true;
};

/**
 * @param {string} cpf
 */
export const formatCpf = (cpf) => {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/g, "$1.$2.$3-$4");
};

export const formatBRL = (money) => {
  return Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })
    .format(money);
};
