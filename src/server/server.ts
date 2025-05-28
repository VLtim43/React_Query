import { createServer, Model, Factory, Response } from "miragejs";
import { faker } from "@faker-js/faker";

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
        id(i: number) {
          return String(i + 1);
        },
        title() {
          return faker.book.title();
        },
        author() {
          return faker.book.author();
        },
        publishedYear() {
          return faker.number.int({ min: 1900, max: 2024 });
        },
      }),
    },

    seeds(server) {
      server.createList("book", 10);
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.all("book");
      });

      this.get("/books/:id", (schema, request) => {
        const id = request.params.id;
        const book = schema.find("book", id);
        return book ?? new Response(404, {}, { error: "Book not found" });
      });
    },
  });
}
