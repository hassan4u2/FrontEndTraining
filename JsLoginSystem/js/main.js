/**
 * LOGIN SYSTEM (LocalStorage)
 *  - Login
 *  - Register
 *  - Logout
 *  map - filter - find 
 * validate register data
let data = {
    name: 'John',
    email: 'hassan@gmail.com',
    passwd: 'hassan',
    passwd2: 'hassan'
}
let data2 = {
    email: 'hassan@gmail.com',
    passwd: 'hassan',
}

* */


// GLOBAL VARIABLES
let usersList = [];
let loggedIn = false;
let loggedUser = {};

// prepare Local Storage
const prepareLocalStorage = () => {
    if (localStorage.getItem('usersList') === null) {
        localStorage.setItem('usersList', JSON.stringify(usersList));
        localStorage.setItem('LSloggedIn', JSON.stringify(false));
        localStorage.setItem('LSloggedUser', JSON.stringify(loggedUser));
    } else {
        usersList = JSON.parse(localStorage.getItem('usersList'));
        loggedIn = JSON.parse(localStorage.getItem('LSloggedIn'));
        loggedUser = JSON.parse(localStorage.getItem('LSloggedUser'));
    }
};

// validate register data
const validateRegisterData = (data) => {
    let errors = [];
    if (data.name === '') {
        errors.push('Name is required');
    };
    if (data.email === '') {
        errors.push('Email is required');
    };
    if (data.passwd === '') {
        errors.push('Password is required');
    };
    if (usersList.find(user => user.email === data.email)) {
        errors.push(`Email ${data.email} is already registered`);
    };
    if (data.passwd.length < 6) {
        errors.push('Password must be at least 6 characters');
    };
    if (data.passwd !== data.passwd2) {
        errors.push('Passwords do not match');
    };
    if (data.email.includes('@') === false) {
        errors.push('Email must be valid');
    };
    // return errors
    if (Object.keys(errors).length === 0) {
        return true;
    } else {
        return errors;
    };

};

// register user
const registerUser = (data) => {
    // validate data
    let validate = validateRegisterData(data);
    if (validate === true) {
        // assign id
        data.id = usersList.length + 1;
        // add user to usersList
        usersList.push(data);
        localStorage.setItem('usersList', JSON.stringify(usersList));
        // return success
        console.log('User registered');
        // show login form
        document.getElementById('login_section').classList.remove('d-none');
        document.getElementById('register_section').classList.add('d-none');
    } else {
        // return errors
        console.log(validate);
        // show errors
        document.getElementById('registerAlertBox').classList.remove('d-none');
        let innerErrors = ``;
        for (let i = 0; i < validate.length; i++) {
            innerErrors += `<p>${validate[i]}</p>`
        }
        innerErrors += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
        document.getElementById('registerAlert').innerHTML = innerErrors;
    }
};


const validateLoginData = (data) => {
    console.log(data);
    let errors = [];
    if (data.email === '') {
        errors.push('Email is required');
    }
    if (data.passwd === '') {
        errors.push('Password is required');
    }
    // iterate usersList and check email and pw in localStorage
    let user = usersList.find(user => user.email === data.email && user.passwd === data.passwd);
    if (user) {
        localStorage.setItem('LSloggedUser', JSON.stringify(user));
        return true;
    } else {
        if (data.email !== '' && data.passwd !== '')
            errors.push('Bad Username or Password');
        return errors;
    }
};

const loginUser = (data) => {
    let validate = validateLoginData(data);
    if (validate === true) {
        localStorage.setItem('LSloggedIn', JSON.stringify(true));
        console.log('User logged in');
        // reload page
        location.reload();
    } else {
        localStorage.setItem('LSloggedIn', JSON.stringify(false));
        console.log(validate);
        //  show errors
        document.getElementById('loginAlertBox').classList.remove('d-none');
        let innerErrors = ``;
        for (let i = 0; i < validate.length; i++) {
            innerErrors += `<p>${validate[i]}</p>`
        }
        innerErrors += `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`
        document.getElementById('loginAlert').innerHTML = innerErrors;
    }
};

// logout user
const logoutUser = () => {
    localStorage.setItem('LSloggedIn', JSON.stringify(false));
    localStorage.setItem('LSloggedUser', JSON.stringify({}));
    // reload page
    location.reload();
};

// check if user is logged in
const checkLoggedIn = () => {
    if (localStorage.getItem('LSloggedIn') === null) {
        localStorage.setItem('LSloggedIn', JSON.stringify(loggedIn));
        loggedUser = JSON.parse(localStorage.getItem('LSloggedUser'));

    } else {
        loggedIn = JSON.parse(localStorage.getItem('LSloggedIn'));
        loggedUser = JSON.parse(localStorage.getItem('LSloggedUser'));
    }
};

const loggedUserEvents = () => {
    loggedUser = JSON.parse(localStorage.getItem('LSloggedUser'));
    // show logout btn 
    document.querySelector('.nav_section .dropBtn').classList.remove('d-none');
    // show user page
    document.getElementById('user_profile_section').classList.remove('d-none');
    // show data in user page
    document.querySelector('.user_profile_section #userProfileName').innerHTML = "Hello " + loggedUser.name;
    document.querySelector('.user_profile_section #userProfileEmail').innerHTML = loggedUser.email;
    // set event listener on logout btns
    // iter all logout btns and add event listener
    document.querySelectorAll('.logOutBtnCls').forEach(btn => {
        btn.addEventListener('click', logoutUser);
    });
};

const homePageEvents = () => {
    // show login and register btns
    document.querySelector('.nav_section .dropBtn').classList.add('d-none');
    // show login and register forms
    document.getElementById('login_section').classList.remove('d-none');
    // add event on signup page btn
    document.getElementById('signupPageBtn').addEventListener('click', () => {
        document.getElementById('login_section').classList.add('d-none');
        document.getElementById('register_section').classList.remove('d-none');
    });
    // add event on login page  btn
    document.getElementById('loginPageBtn').addEventListener('click', () => {
        document.getElementById('login_section').classList.remove('d-none');
        document.getElementById('register_section').classList.add('d-none');
    });
    // register btn and login btn
    document.getElementById('mainRegisterBtn').addEventListener('click', () => {
        // get data from form
        let regData = {
            name: document.getElementById('reg_user_name').value,
            email: document.getElementById('reg_user_email').value,
            passwd: document.getElementById('reg_user_passwd').value,
            passwd2: document.getElementById('reg_user_passwd_confirm').value
        }
        // register user
        registerUser(regData);
    });
    document.getElementById('MainLloginBtn').addEventListener('click', () => {
        // get data from form
        let logData = {
            email: document.getElementById('log_user_email').value,
            passwd: document.getElementById('log_user_passwd').value
        }
        // login user
        loginUser(logData);
    });
};
// registerUser(data);
// loginUser(data2)
// logoutUser();
// console.log('2', loggedIn);

// MIAN LOGIC
const eachRefresh = () => {
    prepareLocalStorage();
    // check if user is logged in to get data
    checkLoggedIn();
    if (loggedIn === true) {
        console.log('User is logged in');
        loggedUserEvents();
    } else {
        console.log('User is not logged in');
        homePageEvents();
    };
};

// run on each refresh
eachRefresh();

