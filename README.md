In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

---

BASE API URL: https://mighty-oasis-08080.herokuapp.com/api/

API Info:

    List of tags (GET)
        /api/tags

    Login (POST)
        /api/user
        Data Sample: {user: {email: "a@gmail.com", password: "hello123"}}

    Signup (POST)
        /api/users
        Data Sample: {user: {email: "a@gmail.com", password: "hello123", username: "test123"}}

    Signup (POST)
        /api/users
        Data Sample: {user: {email: "a@gmail.com", password: "hello123", username: "test123"}}

    Verify User (GET)
        /api/user
        You need to add authorization: Token ..

    Public Articles (GET)
        /api/articles?limit=10&offset=0

Tech Stack

    React Hooks
    Formik
