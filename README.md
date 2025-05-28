# React + TypeScript + Vite + MirageJS + TanStack Query

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
