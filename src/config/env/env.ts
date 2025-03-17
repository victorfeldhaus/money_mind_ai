import z from "zod";
import config from "dotenv/config"

const envSchema = z.object({
    OPENAI_KEY: z.string(),
});


export const env = envSchema.parse(process.env);