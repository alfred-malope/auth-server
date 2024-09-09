import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const MAILTRAP_TOKEN = process.env.MAILTRAP_TOKEN || "";

// if (!MAILTRAP_TOKEN || !MAILTRAP_ENDPOINT) {
// 	throw new Error("Mailtrap token is not defined in the environment variables.");
// }

export const mailtrapClient = new MailtrapClient({
	token: MAILTRAP_TOKEN,
});
export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Alfred Malope",
};
