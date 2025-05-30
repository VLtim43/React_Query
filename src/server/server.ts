import { createServer, Model, Factory, belongsTo, hasMany } from "miragejs";
import { faker } from "@faker-js/faker";

type Author = {
  id: string;
  name: string;
};

type Genre = {
  id: string;
  name: string;
};

export function makeServer() {
  return createServer({
    models: {
      author: Model.extend({
        books: hasMany(),
      }),
      genre: Model.extend({
        books: hasMany(),
      }),
      book: Model.extend({
        author: belongsTo(),
        genre: belongsTo(),
      }),
    },

    factories: {
      author: Factory.extend({
        id() {
          return faker.string.alphanumeric({ casing: "lower", length: 8 });
        },
        name() {
          return faker.person.fullName();
        },
      }),

      genre: Factory.extend({
        id() {
          return faker.string.alphanumeric({ casing: "lower", length: 8 });
        },
        name() {
          return faker.book.genre();
        },
      }),

      book: Factory.extend({
        id() {
          return faker.string.alphanumeric({ casing: "lower", length: 8 });
        },
        title() {
          return faker.book.title();
        },
      }),
    },

    seeds(server) {
      const authors = server.createList("author", 5);
      const genres = server.createList("genre", 6);
      const books = server.createList("book", 10);

      books.forEach((book) => {
        const randomAuthor = faker.helpers.arrayElement(authors);
        const randomGenre = faker.helpers.arrayElement(genres);
        book.update({
          author: randomAuthor,
          genre: randomGenre,
        });
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.all("book").models.map((book) => {
          const { authorId, genreId, ...rest } =
            book.attrs as typeof book.attrs & {
              authorId?: string;
              genreId?: string;
            };

          const author = book.author as Author;
          const genre = book.genre as Genre;

          return {
            ...rest,
            author: {
              id: author.id,
              name: author.name,
            },
            genre: {
              id: genre.id,
              name: genre.name,
            },
          };
        });
      });

      this.get("/authors", (schema) => {
        return schema.all("author");
      });

      this.get("/genres", (schema) => {
        return schema.all("genre");
      });
    },
  });
}
