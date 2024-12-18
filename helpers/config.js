import {config} from "dotenv";

config();

export const {
    PORT,
    SECRETKEY,
    DB_USER,
    LANGUAGE,
    TOKEN_TIMEOUT,
    CART_TIMEOUT,
    SENDGRID_API_KEY,
    SENDGRID_VERIFIED_SENDER,
    CONTACT_FORM_TIMEOUT,
    MP_ACCESS_TOKEN,
} = process.env;

export const CART_MAXAGE = parseInt(process.env.CART_COOKIE_TIMEOUT); // 1 hora.