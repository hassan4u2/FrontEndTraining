

// Store products
let productsList = [];

// console.log(defaultProductsList);


function fillDefaultLocalStorageData() {
    if (productsList.length === 0) {
        productsList = defaultProductsList;

        for (let i = 0; i < productsList.length; i++) {
            productsList[i].id = i + 1;
            productsList[i].created_at = getDateTime();
            productsList[i].updated_at = getDateTime();
        }
        saveOnLocalStorage(productsList);
    }
}

// Function to get date and time in format dd/mm/yyyy || hh:mm:ss AM/PM format
function getDateTime() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const dateTime = `${day}/${month}/${year} || ${hour}:${min}:${sec} ${ampm}`;
    return dateTime;
}
// run function to display default products if local storage is empty check products key in local storage and convert to array then check length of array
if (localStorage.getItem('products')) {
    productsList = JSON.parse(localStorage.getItem('products'));
    fillDefaultLocalStorageData();
} else {
    fillDefaultLocalStorageData();
}
// show products on page load
displayProducts();
// Function to display products


// Function to get inputs
function getInputs() {
    const productName = document.getElementById('p_name').value;
    const productPrice = document.getElementById('p_price').value;
    const productQty = document.getElementById('p_qty').value;
    const productCategory = document.getElementById('p_category').value;
    const productDesc = document.getElementById('p_desc').value;
    const product = {
        name: productName,
        price: productPrice,
        qty: productQty,
        category: productCategory,
        desc: productDesc
    };
    return product;
}

// Function save on local storage
function saveOnLocalStorage(productsList) {
    localStorage.setItem('products', JSON.stringify(productsList));
}

// Function to get products from local storage
function getProductsFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem('products'));
    if (products) {
        productsList = products;
    }
    return products;
}

// function to reset local storage
function resetLocalStorage() {
    localStorage.clear();
    productsList = [];
    displayProducts();
}


// Function to add a product
function addProduct() {
    let error_msg = '';
    let valid = false;
    const product = getInputs();
    product.id = productsList.length + 1;
    product.created_at = getDateTime();
    product.updated_at = getDateTime();
    // check if NaN or negative 
    if (isNaN(product.price) || isNaN(product.qty) || product.price < 0 || product.qty < 0 || product.price === '' || product.qty === '') {
        valid = false;
        error_msg += '* Enter a valid price and quantity.<br>';
        console.log('price or qty is not valid');
    }
    // check len of name and desc and category
    if (product.name.length < 5 || product.desc.length < 5 || product.category.length < 5) {
        valid = false;
        error_msg += '* Enter a valid name, description and category.<br>';
        console.log('name or desc or category is not valid');
    }
    // check if product already exists
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name === product.name) {
            valid = false;
            error_msg += '* Product already exists.<br>';
            console.log('product already exists');

            break;
        }
    }
    // validate inputs before adding
    for (const key in product) {
        if (product[key] === '') {
            valid = false;
            error_msg += `* Dont leave any field empty.<br>`;
            console.log('empty field');
            break;
        } else {
            valid = true;
        }
    }
    if (valid) {
        productsList.push(product);
        saveOnLocalStorage(productsList);
        displayProducts();
        clearForm();
        // show alert
        // count down to hide alert and disappear it in alert-info div
        document.getElementById('alert-info').style.display = 'block';
        document.getElementById('alert-info').innerHTML = `<div id="success" class="alert alert-success" role="alert">
        <p id="success-msg">Product ${product.name} added successfully</p></div>`;
        setTimeout(() => {
            document.getElementById('alert-info').style.display = 'none';
        }
            , 10000);
    } else {
        // show alert
        document.getElementById('alert-info').style.display = 'block';
        document.getElementById('alert-info').innerHTML = `<div id="error" class="alert alert-danger" role="alert">
        <p id="error-msg">${error_msg}</p>
        </div>`;
        setTimeout(() => {
            document.getElementById('alert-info').style.display = 'none';
        }
            , 10000);

    }
}

// Function to clear form
function clearForm() {
    document.getElementById('p_name').value = '';
    document.getElementById('p_price').value = '';
    document.getElementById('p_qty').value = '';
    document.getElementById('p_category').value = '';
    document.getElementById('p_desc').value = '';
}

// Function to display products in table
function displayProducts() {
    const tbody = document.getElementById('tbody-info');
    tbody.innerHTML = ``;
    // checck local storage and display products
    const localS = getProductsFromLocalStorage();
    if (localS !== null) {
        productsListLS = localS;
        for (let i = 0; i < productsListLS.length; i++) {
            tbody.innerHTML += `
            <tr class="">
                <td>${productsListLS[i].id}</td>
                <td class="">
                    <button id="" class="btn btn-primary btn-sm m-1" onclick="updateProduct(${productsListLS[i].id})">Update</button>  
                    <button id="" class="btn btn-danger btn-sm m-1" onclick="deleteProduct(${productsListLS[i].id})">Delete</button>
                </td>
                <td>${productsListLS[i].name}</td>
                <td>${productsListLS[i].price}</td>
                <td>${productsListLS[i].qty}</td>
                <td>${productsListLS[i].category}</td>
                <td>${productsListLS[i].desc}</td>
                <td>${productsListLS[i].created_at}</td>
                <td>${productsListLS[i].updated_at}</td>
                
            </tr>
            `;
        }
    }
}


// Function to delete a product
function deleteProduct(id) {
    productsList = productsList.filter(product => product.id !== id);
    // reassign ids
    for (let i = 0; i < productsList.length; i++) {
        productsList[i].id = i + 1;
    }

    saveOnLocalStorage(productsList);
    displayProducts();

}


// Function to edit a product
function updateProduct(id) {
    const product = productsList.find(product => product.id === id);
    document.getElementById('p_name').value = product.name;
    document.getElementById('p_price').value = product.price;
    document.getElementById('p_qty').value = product.qty;
    document.getElementById('p_category').value = product.category;
    document.getElementById('p_desc').value = product.desc;
    document.getElementById('addbtn').style.display = 'none';
    document.getElementById('updatesavebtn').style.display = 'block';
    document.getElementById('updatesavebtn').onclick = function () {
        const product = getInputs();
        product.id = id;
        product.created_at = productsList[id - 1].created_at;
        product.updated_at = getDateTime();
        productsList[id - 1] = product;
        saveOnLocalStorage(productsList);
        displayProducts();
        clearForm();
        document.getElementById('addbtn').style.display = 'block';
        document.getElementById('updatesavebtn').style.display = 'none';
    };
    // scroll to top
    window.scrollTo(0, 0);

}


// real time search
function searchRealTimeProduct(searchInput) {
    const tbody = document.getElementById('tbody-info');
    tbody.innerHTML = ``;
    const searchTerm = searchInput.toLowerCase().replace(new RegExp(' ', 'g'), '');
    const highlightSearchText = (text, searchTerm) => {
        return text.replace(searchTerm, match => `<mark>${match}</mark>`);
    }

    for (let i = 0; i < productsList.length; i++) {
        const product = productsList[i];
        if (
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.desc.toLowerCase().includes(searchTerm)
        ) {
            tbody.innerHTML += `
            <tr class="">
                <td>${product.id}</td>
                <td class="">
                    <button id="" class="btn btn-primary btn-sm m-1" onclick="updateProduct(${product.id})">Update</button>  
                    <button id="" class="btn btn-danger btn-sm m-1" onclick="deleteProduct(${product.id})">Delete</button>
                </td>
                <td>${highlightSearchText(product.name, searchInput)}</td>   
                <td>${product.price}</td>
                <td>${product.qty}</td>
                <td>${highlightSearchText(product.category, searchInput)}</td>   
                <td>${highlightSearchText(product.desc, searchInput)}</td>   
                <td>${product.created_at}</td>
                <td>${product.updated_at}</td>
            </tr>
            `;
        }
    }

    if (tbody.innerHTML === '') {
        tbody.innerHTML += `
            <tr class="">
                <td colspan="12" class="p-3 fw-bold fs-2 text-light" >No product found</td>
            </tr>
        `;
    }
}



// Function to search a product
function btnSearchProduct() {
    var searchInput = document.getElementById('search-btn-inp').value;
    var searchInputLower = searchInput.toLowerCase();
    console.log(searchInputLower);
};
