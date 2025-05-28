# React + TypeScript + TailwindCSS + MirageJS + TanStack Query powered by Vite

CRUD operations:
GET /items → fetch all items
GET /items/:id → fetch single item
POST /items → create a new item
PUT /items/:id → update an item
DELETE /items/:id → delete an item

Pagination:
GET /items?page=1&limit=10

Filter and searching:
GET /items?genre=sci_fi&sort=asc&search=keyword

Dependent Queries:
/item/:id then /item/:id/comments

Errors:
500 Internal Server Error
403 Forbidden
404 Not Found

src/
├── hooks/ # Hooks
│ ├── books.ts # useBooks(), useBook(), useCreateBook(), etc.
│ ├── comments.ts # useComments(bookId)
│...
│ └── authors.ts etc
│
├── UI/ # Reusable UI components
│
│
├── server/ # Mirage JS setup
│ ├── server.ts # makeServer() as you have it
│ ├── models/ # Mirage models
│ │ ├── book.ts
│ │ └── comment.ts
│ ├── factories/ # Mirage factories
│ │ ├── book.ts
│ │ └── comment.ts
│ ├── routes/ # Modular route files
│ ├── books.ts
│ └── comments.ts
│
├── types/ # Shared TS types
│ └── book.ts
│
├── App.tsx
├── main.tsx
