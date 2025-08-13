# [Express Introduction](https://expressjs.com/)

Apa itu Express? Express adalah framework web untuk Node.js yang dirancang untuk membangun aplikasi dengan cepat dan efisien sehingga aplikasi kita bisa diakses melalui HTTP.

## Instalation

```
npm install express
```

## [Routing](https://expressjs.com/en/starter/basic-routing.html)
Routing adalah cara untuk menentukan bagaimana aplikasi kita akan "mendengarkan" permintaan user pada URL tertentu, dan kemudian memberikan respons yang sesuai. 

Example basic routing :
```js
const express = require('express') // require express module
const app = express() // create an instance of express
const port = 3000 // define the port to be used by the application

// app.get(endpoint, callback)
// endpoint: the URL path that the application will listen to
// callback: a handler function that will be executed when the endpoint is accessed
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.listen(port, callback)
// This method starts the server and makes it listen for incoming requests
// port: the port number that the application will listen to
// callback: a handler function that will be executed when the application starts listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

### Route Handlers
Route handlers adalah fungsi yang akan dieksekusi ketika permintaan diterima pada route tertentu. Fungsi tersebut menerima dua parameter: `req` (request) dan `res` (response). Parameter `req` berisi informasi tentang permintaan yang diterima, sedangkan `res` digunakan untuk mengirim respons kembali ke pengguna.

### [Routing Methods](https://expressjs.com/en/guide/routing.html#route-methods)
Method routing adalah cara untuk menentukan bagaimana aplikasi kita akan menangani permintaan HTTP berdasarkan metode yang digunakan. Berikut adalah beberapa metode routing yang umum digunakan:
- `app.get()`: Digunakan untuk menangani permintaan HTTP GET (Read).
- `app.post()`: Digunakan untuk menangani permintaan HTTP POST (Create).
- `app.put()`: Digunakan untuk menangani permintaan HTTP PUT (Update).
- `app.patch()`: Digunakan untuk menangani permintaan HTTP PATCH (Partial Update).
- `app.delete()`: Digunakan untuk menangani permintaan HTTP DELETE (Delete).

### [Route Paths](https://expressjs.com/en/guide/routing.html#route-paths)
Route paths adalah URL yang akan diakses oleh pengguna untuk berinteraksi dengan aplikasi kita. Kita bahkan dapat menggunakan parameter dinamis dalam route path untuk menangani permintaan yang berbeda berdasarkan nilai yang diberikan oleh pengguna.

Example route paths:
```js
// Simple route path
// path : http://localhost:3000/users
app.get('/users', (req, res) => {
  res.send('List of users')
})

// Route path with a dynamic parameter
// path : http://localhost:3000/users/1
app.get('/users/:id', (req, res) => {   
  const userId = req.params.id // Access the dynamic parameter from the request
  res.send(`User ID: ${userId}`)
})

// Route path with query parameters
// path : http://localhost:3000/users?search=John
app.get('/search', (req, res) => {
  const query = req.query.search // Access the query parameter from the request
  res.send(`Search results for: ${query}`)
})
```

## Demo
Buatlah sebuah aplikasi Express & Node-postgres untuk mengelola daftar game. Kita juga akan menggunakan `nodemon` supaya perubahan pada aplikasi kita dapat langsung terlihat tanpa perlu restart server.

### Setup
Database : game_app

```
npm init -y
npm i express pg
npm i -D nodemon
touch .gitignore
```

### Table
Table Games

| Column name     | type      | constraint |
|-----------------|:---------:|:----------:|
| name            | string    | NOT NULL   |
| gameImg         | string    | NOT NULL   |
| releaseDate     | date      | NOT NULL   |
| developer       | string    | NOT NULL   |
| genre           | string    | NOT NULL   |

## Endpoint
| Method | Route             | Deskripsi                                                              |
| :----- | :----             | :--------------------------------------------------------------------- |
| GET    | /games            | Menampilkan data seluruh `Game`                                        |
| GET    | /games/:id        | Menampilkan detail data `Game`                                         |

## **Searching**
Buatlah fitur search bedasarkan nama game dengan menggunakan `ILIKE` & `query` parameter pada route `/games`.