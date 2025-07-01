import { createServer, Model, Factory, belongsTo, hasMany } from "miragejs";
import { faker } from "@faker-js/faker";
import genresData from "./genres.json";
import type { Author, Genre, Book } from "./types";

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
          return faker.string.uuid();
        },
        name() {
          return faker.person.fullName();
        },
      }),

      book: Factory.extend({
        id() {
          return faker.string.uuid();
        },
        title() {
          return faker.book.title();
        },
      }),
    },

    seeds(server) {
      genresData.forEach((genre) => {
        server.create("genre", {
          id: genre.id,
          name: genre.name,
        });
      });

      const authors = server.createList("author", 200);
      const genres = server.schema.all("genre").models;

      const books = server.createList("book", 50);
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
          const { title } = book.attrs;
          const author = book.author as Author;
          const genre = book.genre as Genre;

          const bookResponse: Book = {
            id: book.id as string,
            title,
            author: {
              id: author.id,
              name: author.name,
            },
            genre: {
              id: genre.id,
              name: genre.name,
            },
          };

          return bookResponse;
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
