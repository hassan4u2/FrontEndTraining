let bookmarksList = [];

/** ------------------------------------------------------- */

const clearBookmarksFromLocalStorage = () => {
    localStorage.bookmarksList = JSON.stringify([]);
    location.reload();
}
// clearBookmarksFromLocalStorage();

// Function save on local storage
function saveOnLocalStorage(listToSave) {
    localStorage.setItem('bookmarks', JSON.stringify(listToSave));
}

// function to reset local storage
function resetLocalStorage() {
    localStorage.clear();
    bookmarksList = [];
    showBookmarks();
}

// show bookmarks
const showBookmarks = () => {
    let bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
    newBookmarks = ``;
    // sort and assign id to bookmarks
    let bookmarkId;
    for (let i = 0; i < bookmarksList.length; i++) {
        let bookmarkUrl = bookmarksList[i].bookmarkUrl;
        let bookmarkName = bookmarksList[i].bookmarkName;
        let bookmarkTag = bookmarksList[i].bookmarkTag;
        bookmarkId = i;
        newBookmarks += `
        <li class="card mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
            <!-- Bookmark Name -->
            <h4 class="card-title">
                <i class="fas fa-star m-auto"></i>
                <span id="bookmarkNameField">(${bookmarkId + 1}) - ${bookmarkName}</span>
            </h4>
            <!-- Edit/Delete Buttons -->
            <div class="d-flex">
                <button id="updateBookmarkBtn" onclick="updateBookmark(${bookmarkId})" class="btn btn-warning me-1">
                    <i class="fas fa-edit me-1"></i>
                    <span>Edit</span>
                </button>
                <button id="deleteBookmarkBtn" onclick="deleteBookmark(${bookmarkId})" class="btn btn-outline-danger">
                    <i class="fas fa-trash-alt me-1"></i>
                    <span>Delete</span>
                </button>
            </div>
        </div>
        <div class="card-body p-3 d-flex justify-content-between">
            <p class="card-text">
                <i class="fas fa-link me-1"></i>
                ${bookmarkUrl}
            </p><p class="card-text">
                <i class="fas fa-tags me-1"></i>
                ${bookmarkTag}
            </p>
        </div>
        <div class="card-footer d-flex justify-content-center">
            <a href="${bookmarkUrl}" target="_blank" class="btn btn-outline-primary btn-block">
                <i class="fas fa-eye me-1"></i>
                View
            </a>
        </div>
    </li>
            `;
    }

    document.getElementById('bookmarksList').innerHTML = newBookmarks;
};
/** ------------------------------------------------------- */

/** ------------------------------------------------------- */

const initBookmarkApp = () => {
    if (localStorage.getItem('bookmarksList') === null) {
        // set to localStorage
        localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
        return bookmarksList;
    } else {
        // get bookmarks from localStorage
        let bookmarksList = JSON.parse(localStorage.getItem('bookmarks'));
        return bookmarksList;
    }
}
bookmarks = initBookmarkApp();
showBookmarks();

/** ------------------------------------------------------- */


/** ------------------------------------------------------- */
const clearFormInputs = () => {
    let bookmarkUrl = document.getElementById('bookmarkUrl').value = '';
    let bookmarkName = document.getElementById('bookmarkName').value = '';
    let bookmarkTag = document.getElementById('bookmarkTag').value = '';
    if (bookmarkUrl === '' && bookmarkName === '' && bookmarkTag === '') {
        console.log('inputs cleared');
    }
}
/** ------------------------------------------------------- */

const getFormValues = () => {
    let bookmarkUrl = document.getElementById('bookmarkUrl').value;
    let bookmarkName = document.getElementById('bookmarkName').value;
    let bookmarkTag = document.getElementById('bookmarkTag').value;
    // assign id to bookmark
    let bookmarkId = bookmarksList.length;
    return {
        bookmarkId: bookmarkId,
        bookmarkUrl,
        bookmarkName,
        bookmarkTag
    }
}
/** ------------------------------------------------------- */

const validateFormData = (bookmarkData) => {
    let bookmarkName, bookmarkUrl, bookmarkTag;
    let bookmarkItem = bookmarkData;
    bookmarkUrl = bookmarkItem.bookmarkUrl;
    bookmarkName = bookmarkItem.bookmarkName;
    bookmarkTag = bookmarkItem.bookmarkTag;
    let bookmarkValidatioErrors = {};
    if (bookmarkUrl === '' || bookmarkName === '' || bookmarkTag === '') {
        bookmarkValidatioErrors.bookmarkUrl = '* bookmarkUrl is required';
        bookmarkValidatioErrors.bookmarkName = '* bookmarkName is required';
        bookmarkValidatioErrors.bookmarkTag = '* bookmarkTag is required';
    }
    if (bookmarkValidatioErrors.length > 0) {
        return bookmarkValidatioErrors;
    } else {
        return bookmarkValidatioErrors;
    }
}
/** ------------------------------------------------------- */

// add bookmark
const addBookmark = () => {
    console.log('addBookmark');
    // get form values
    let bookmarkItem = getFormValues();
    let bookmarkValidation = validateFormData(bookmarkItem);
    // get bookmarks from localStorage
    let bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
    // check if bookmark already exists
    for (let i = 0; i < bookmarksList.length; i++) {
        if (bookmarksList[i].bookmarkUrl === bookmarkItem.bookmarkUrl) {
            bookmarkValidation.bookmarkUrl = 'bookmark already exists';
        }
    }


    console.error(bookmarkValidation);

    // if valid add bookmark to bookmarksList and show success message
    if (Object.keys(bookmarkValidation) == 0) {
        console.log('bookmark is valid');
        // add bookmark to bookmarksList in localStorage
        bookmarksList.push(bookmarkItem);
        localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
        // show success message
        document.getElementById('alertMsg').innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Success!</strong> Bookmark ${bookmarkItem.bookmarkTag || bookmarkName} successfully.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        // clear form inputs
        clearFormInputs();
        // show bookmarks
        showBookmarks();

    } else {
        let newInnerHtml = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Error!</strong>`;
        // print all error messages
        for (let key in bookmarkValidation) {
            // get lebgth of object
            if (Object.keys(bookmarkValidation).length > 1)
                newInnerHtml += `
                    <p class="mt-2">${bookmarkValidation[key]}</p>
                    `;
            else if (i == Object.keys(bookmarkValidation).length) {
                newInnerHtml += `
                    <p>${bookmarkValidation[key]}</p>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `;
            }
        }
        document.getElementById('alertMsg').innerHTML = newInnerHtml;
    };
};
/** ------------------------------------------------------- */

/** ------------------------------------------------------- */

const deleteBookmark = (bookmarkId) => {
    console.log('deleteBookmark');
    // get bookmarks from localStorage
    let bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
    // remove bookmark from bookmarksList
    bookmarksList.splice(bookmarkId, 1);
    // update bookmarksList in localStorage
    localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
    // show success message
    document.getElementById('alertMsg2').innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Bookmark successfully deleted.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    // show bookmarks
    showBookmarks();
}
/** ------------------------------------------------------- */

/** ------------------------------------------------------- */

const updateBookmark = (bookmarkId) => {
    // get bookmarks from localStorage
    let bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));// FILL IN FORM

    document.getElementById('bookmarkUrl').value = bookmarksList[bookmarkId].bookmarkUrl;
    document.getElementById('bookmarkName').value = bookmarksList[bookmarkId].bookmarkName;
    document.getElementById('bookmarkTag').value = bookmarksList[bookmarkId].bookmarkTag;

    // hide add bookmark button
    document.getElementById('addBookmarkBtn').style.display = 'none';
    // show update bookmark button
    document.getElementById('saveupBtn').style.display = 'block';
    // show cancel update button
    document.getElementById('cancelupBtn').style.display = 'block';

}

/** ------------------------------------------------------- */
const cancelUpdate = () => {
    // clear form inputs
    clearFormInputs();
    document.getElementById('addBookmarkBtn').style.display = 'block';
    document.getElementById('saveupBtn').style.display = 'none';
    document.getElementById('cancelupBtn').style.display = 'none';
}
/** ------------------------------------------------------- */
const saveUpdate = () => {
    document.getElementById('saveupBtn').style.display = 'none';
    document.getElementById('cancelupBtn').style.display = 'none';
    document.getElementById('addBookmarkBtn').style.display = 'block';

    // get form values  
    let bookmarkItem = getFormValues();
    // get bookmarks from localStorage
    let bookmarksList = JSON.parse(localStorage.getItem('bookmarksList'));
    // update bookmark in bookmarksList
    bookmarksList.splice(bookmarkItem.bookmarkId, 1);
    bookmarksList.push(bookmarkItem);
    localStorage.setItem('bookmarksList', JSON.stringify(bookmarksList));
    // show success message
    document.getElementById('alertMsg').innerHTML = `

        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> Bookmark successfully updated.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    showBookmarks();
    clearFormInputs();


}

/** ------------------------------------------------------- */
