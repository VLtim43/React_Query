import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// handlers is an array of handler calls
export const worker = setupWorker(...handlers);
