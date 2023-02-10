# JS LoginSystem (LocalStorage)
- LivePage : https://hassan4u2.github.io/FrontEndTraining/JsLoginSystem/
- This is a website application with user registration and login functionalities. The application uses local storage to store the user data and maintain the user session. The following are the main functions of the application:

## Global Variables
- `usersList`: an array to store the list of registered users
- `loggedIn`: a boolean value to store the status of the user's login session
- `loggedUser`: an object to store the data of the currently logged-in user

## Preparation of Local Storage
- The function `prepareLocalStorage()` is used to initialize the values of the local storage data. 
- If the local storage data is not available, the function sets the default values for `usersList`, `loggedIn`, and `loggedUser`.
- If the local storage data is available, the function retrieves the values of `usersList`, `loggedIn`, and `loggedUser` from the local storage and assigns them to the respective global variables.

## Validation of Register Data
- The function `validateRegisterData(data)` is used to validate the data entered by the user during registration.
- The function checks for the following validation rules:
  - If the name field is empty
  - If the email field is empty
  - If the password field is empty
  - If the email is already registered
  - If the password length is less than 6 characters
  - If the password and confirm password fields don't match
  - If the email is not a valid email address
- If all validation rules are met, the function returns `true`. If there are any errors, the function returns an array of error messages.

## Registering the User
- The function `registerUser(data)` is used to register the user.
- The function first validates the data entered by the user.
- If the data is valid, the function assigns an `id` to the user, adds the user to the `usersList` array, and updates the local storage with the updated `usersList`.
- If the data is not valid, the function returns the error messages.

## Validation of Login Data
- The function `validateLoginData(data)` is used to validate the data entered by the user during login.
- The function checks for the following validation rules:
  - If the email field is empty
  - If the password field is empty
  - If the entered email and password match with any of the registered users
- If all validation rules are met, the function returns `true`. If there are any errors, the function returns an array of error messages.

## Logging in the User
- The function `loginUser(data)` is used to log in the user.
- The function first validates the data entered by the user.
- If the data is valid, the function updates the local storage with `loggedIn` set to `true` and `loggedUser` set to the data of the logged-in user.
- If the data is not valid, the function returns the error messages.

## Logging out the User
- The function `logoutUser()` is used to log out the user.
- The function updates the local storage with `loggedIn` set to `false` and `loggedUser` set to an empty object.

## Checking if the User is Logged In
- The function `checkLoggedIn()` is used to check if the user is logged in.
- If the `localStorage.getItem('LSloggedIn')` is null, the `localStorage` item for `LSloggedIn` is set to `false` and the `loggedUser` is set to an empty object using `JSON.stringify({})`. 
- If `localStorage.getItem('LSloggedIn')` is not null, the value of `loggedIn` is set to the parsed value of `localStorage.getItem('LSloggedIn')` and `loggedUser` is set to the parsed value of `localStorage.getItem('LSloggedUser')`. 



