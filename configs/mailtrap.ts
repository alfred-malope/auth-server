import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const MAILTRAP_TOKEN = process.env.MAILTRAP_TOKEN || "";
const MAILTRAP_ENDPOINT = process.env.MAILTRAP_ENDPOINT || "";

// if (!MAILTRAP_TOKEN || !MAILTRAP_ENDPOINT) {
// 	throw new Error("Mailtrap token or endpoint is not defined in the environment variables.");
// }

export const mailtrapClient = new MailtrapClient({
	// endpoint: MAILTRAP_ENDPOINT,
	token: MAILTRAP_TOKEN,
});

export const sender = {
	email: "mailtrap@demomailtrap.com",
	name: "Burak",
};
