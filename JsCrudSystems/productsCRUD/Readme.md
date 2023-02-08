# Local Storage Product Manager

- This code implements a product manager that stores products in local storage using JavaScript. The code is designed to work with a webpage and interacts with the local storage using the JavaScript localStorage object.
- https://hassan4u2.github.io/FrontEndTraining/JsCrudSystems/bookmarkCRUD/
## Features

- Fill default product data in local storage if it's empty
- Display products on page load
- Add a product to the local storage
- Get inputs from form fields on a webpage
- Save product data to local storage
- Get products from local storage
- Reset local storage
- Validate input before adding a product
- Display error messages for invalid inputs

## Requirements

A browser with JavaScript enabled

## Usage

1. Clone the repository to your local machine
2. Open the `index.html` file in a browser
3. Fill in the form to add a product
4. The product will be saved in the local storage and displayed on the page
5. Refresh the page to see the product still exists

## Functions

- `fillDefaultLocalStorageData()`: Fill default product data in local storage if it's empty
- `getDateTime()`: Get the current date and time in the format dd/mm/yyyy || hh:mm:ss AM/PM
- `getInputs()`: Get inputs from form fields on a webpage
- `saveOnLocalStorage()`: Save product data to local storage
- `getProductsFromLocalStorage()`: Get products from local storage
- `resetLocalStorage()`: Reset local storage
- `addProduct()`: Add a product to the local storage after validating inputs
- `displayProducts()`: Display products on the page
- `clearForm()`: Clear form fields after adding a product

