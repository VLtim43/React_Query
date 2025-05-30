import { createServer, Model, Factory, belongsTo, hasMany } from "miragejs";
import { faker } from "@faker-js/faker";

type Author = {
  id: string;
  name: string;
};

export function makeServer() {
  return createServer({
    models: {
      author: Model.extend({
        books: hasMany(),
      }),
      book: Model.extend({
        author: belongsTo(),
      }),
    },

    factories: {
      author: Factory.extend({
        name() {
          return faker.person.fullName();
        },
      }),

      book: Factory.extend({
        title() {
          return faker.book.title();
        },
      }),
    },

    seeds(server) {
      const authors = server.createList("author", 5);
      const books = server.createList("book", 10);

      books.forEach((book) => {
        const randomAuthor = faker.helpers.arrayElement(authors);
        book.update({ author: randomAuthor });
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.all("book").models.map((book) => {
          const rest = book.attrs;
          const author = book.author as Author;

          return {
            ...rest,
            author: {
              id: author.id,
              name: author.name,
            },
          };
        });
      });

      this.get("/authors", (schema) => {
        return schema.all("author");
      });
    },
  });
}
