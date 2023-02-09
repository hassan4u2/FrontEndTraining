# Bookmark Manager

A web application for managing bookmarks in localstorage.
  * https://hassan4u2.github.io/FrontEndTraining/JsCrudSystems/bookmarkCRUD/

## Table of Contents

- [Functions](#functions)
  - [clearBookmarksFromLocalStorage](#clearbookmarksfromlocalstorage)
  - [saveOnLocalStorage](#saveonlocalstorage)
  - [resetLocalStorage](#resetlocalstorage)
  - [showBookmarks](#showbookmarks)
  - [initBookmarkApp](#initbookmarkapp)
  - [clearFormInputs](#clearforminputs)
  - [getFormValues](#getformvalues)
  - [validateFormData](#validateformdata)

## Functions

### clearBookmarksFromLocalStorage

Clears all bookmarks from local storage and reloads the page.

### saveOnLocalStorage

Saves the bookmarks list to local storage.

### resetLocalStorage

Clears the local storage and sets the `bookmarksList` array to an empty array.

### showBookmarks

Displays the bookmarks stored in the local storage.

### initBookmarkApp

Checks if the bookmarks list exists in local storage, if not it sets the `bookmarksList` array to local storage.

### clearFormInputs

Clears the input fields in the form.

### getFormValues

Retrieves the values from the form inputs and returns an object with the `bookmarkId`, `bookmarkUrl`, `bookmarkName`, and `bookmarkTag`.

### validateFormData

Validates the data entered in the form.
