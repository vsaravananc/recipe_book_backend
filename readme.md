# Recipe book api

Recipe book api's built with node js and express.


## 🛠 Tech Stack
- Node.js
- Express.js
- supabase
- JWT Authentication
- dotenv
- bcrypt
- dotenv
- nodemon

## Project structure
```
── 📁recipe_book_backend
    └── 📁lib
        └── 📁controller
            ├── auth_controller.js
            ├── product_controller.js
        └── 📁db
            ├── categorie_table.js
            ├── db_config.js
            ├── user_table.js
        └── 📁helper
            ├── failer_helper.js
            ├── validator.js
        └── 📁routes
            └── 📁v1
                ├── product_route.js
            ├── auth_route.js
            ├── middleware.js
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── readme.md
    └── server.js
```

## ⚙️ Installation

1. Clone the repository
```
git clone: https://github.com/vsaravananc/recipe_book_backend.git
```

2. nav to folder
```
cd recipe-book-api
```

3. install dependencies
```
npm i
```

4. run the server
```
npm run start
```

## Env 
```
PORT= 3000
SUPABASE_URL = your_url
SUPABASE_ANON_KEY = your_key
BREAR_TOKEN= your_brear
```

## API End Points

|    Methods    |  End Points   |
| ------------- | ------------- |
| POST  | \auth  |
| POST  | \sign  |
| GET  | \categories  |
| GET  | \product\:categorie  |
| GET  | \product\detail\:idMeal  |

