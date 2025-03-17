import OpenAI from "openai";
import { env } from "../config/env/env";

export const openai = new OpenAI({
    apiKey: env.OPENAI_KEY,
  });