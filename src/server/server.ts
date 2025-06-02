import { createServer, Model, Factory, belongsTo, hasMany } from "miragejs";
import { randUuid, randFullName, randMovie, randNumber } from "@ngneat/falso";
import genresData from "./genres.json";

export function makeServer() {
  return createServer({
    models: {
      author: Model.extend({ books: hasMany() }),
      genre: Model.extend({ books: hasMany() }),
      book: Model.extend({
        author: belongsTo(),
        genre: belongsTo(),
      }),
    },

    factories: {
      author: Factory.extend({
        id() {
          return randUuid();
        },
        name() {
          return randFullName();
        },
      }),

      book: Factory.extend({
        id() {
          return randUuid();
        },
        title() {
          return randMovie();
        },
        isbn() {
          return `${randNumber({ min: 1000000000000, max: 9999999999999 })}`;
        },
      }),
    },

    seeds(server) {
      // Create unique genres from JSON
      genresData.forEach((genre) => {
        server.create("genre", { id: randUuid(), name: genre.name });
      });

      const authors = server.createList("author", 10);
      const genres = server.schema.all("genre").models;

      server.createList("book", 20).forEach((book) => {
        const randomAuthor =
          authors[Math.floor(Math.random() * authors.length)];
        const randomGenre = genres[Math.floor(Math.random() * genres.length)];
        book.update({ author: randomAuthor, genre: randomGenre });
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.all("book");
      });

      this.get("/genres", (schema) => {
        return schema.all("genre");
      });

      this.get("/authors", (schema) => {
        return schema.all("author");
      });
    },
  });
}
