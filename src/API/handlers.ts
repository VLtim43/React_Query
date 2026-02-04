import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";

export const handlers = [
  http.get(
    "/api/test",

    () => {
      return HttpResponse.json("test");
    },
  ),
];
