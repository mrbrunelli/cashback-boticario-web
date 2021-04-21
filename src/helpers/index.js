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

/**
 * @param {number} bigger
 * @param {number} smaller
 */
export const calculateDiscountPercent = (bigger, smaller) => {
  const percent = ((bigger - smaller) / bigger) * 100;
  return percent.toFixed(2);
};

/**
 * Example: 3% of 25 = 24.25 = R$ 0.75 of CashBack
 * @param {number} amount - Amount value to calculate - Ex: 25
 * @param {number} percent - Percentage of CashBack - Ex: 3
 */
 export const calculateCashBack = (amount, percent) => {
  const percentFormated = 1 - (percent / 100);
  return amount - (amount * percentFormated);
};