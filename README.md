#  Metsehaf
Metsehafe is a books store application with CRUD capabilities. It has a responsive client  UI/UX and fast backend api integration with Spring Boot and MySQL as database
## Usage
1. Get All Books in database at page start 
    - route = "/"
2. Create A Book in databsaes
    - Click the **__Add New Book__** Button
    - route = "/new-book"
3. View a Book detail (After creating a new book)
    - Click the **__Book Card__** at the first route of page
    - router = "/books/:bookId"
4. Update an existing Book in database (In Book Detail Page)
    - Click the **__Update__** Button
    - router = "/books/:bookId/edit"

5. Delete an existing Book from database (In Book Detail Page)
    - Click the **__Delete__** Button
    - router = "/books/:bookId"


## Recommendation
- Use VS code / Intellji Code Editors , they work well for Java projects
# Installation
1. Clone this repo
2. Install Java JDK >= 17
    - https://www.oracle.com/java/technologies/downloads/
3. Install MySQL
    - https://dev.mysql.com/downloads/mysql/

4. Install Node.js
    - https://nodejs.org/en/download/package-manager

## Backend Installation 
1. Open the _books-server_ directory(folder)
2. Open the **_build.gradle.kts_** and build application
3. Go to the **__src/main/resources__** , open the **.env** file and provide your MySQL database credentials
    - MYSQL_DATABASE=__database name__
    - MYSQL_USER=__database_user__
    - MYSQL_PASSWORD=__database_user_password__
    - MYSQL_PORT=__usually 3306__for_MySQL__
    - MYSQL_HOST=localhost

    
4. Go to **/src/main/java/com/mikiyas/books_server/BooksServerApplication.java** file and run backend

## Frontend Installaiton
1. Open the _books-client_ directory(folder)
2. run
    - **_npm install_**
    - **_npm run dev_**
    
3. Statrting Page will look like following
![The Startging Page of Application](/books-client/src/assets/client-starting-page.png)
## License

[MIT](https://choosealicense.com/licenses/mit/)

