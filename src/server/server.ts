import { createServer, Model, Factory, Response } from "miragejs";
import { faker } from "@faker-js/faker";

// --- Define your TS interfaces ---
export interface Book {
  id: string;
  title: string;
  author: string;
  publishedYear: number;
}

export function makeServer() {
  return createServer({
    models: {
      book: Model.extend<Partial<Book>>({}),
    },

    factories: {
      book: Factory.extend({
        id() {
          faker.string.ulid();
        },

        title() {
          return faker.book.title();
        },

        author() {
          return faker.book.author();
        },

        publishedAt() {
          return faker.date.between({ from: "1800", to: "2025" });
        },

        genre() {
          return faker.book.genre();
        },

        publisher() {
          return faker.book.publisher();
        },

        isbn() {
          return faker.commerce.isbn();
        },
      }),
    },

    seeds(server) {
      server.createList("book", 20);
    },
  });
}
