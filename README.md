# Upload Json/Mock Firebase

This package allows you to upload and update data to Firebase using the Firebase SDK for JavaScript.

### Installation

You can install the package using npm:

```
npm install upload-json-mock-firebase
```

## Usage

This package is compatible with both CommonJS (`require`) and ES modules (`import`). You can use it in your code like this:

```js
// using CommonJS
const initializeFirebase = require("upload-json-mock-firebase");

//or

// using ES modules
import initializeFirebase from "upload-json-mock-firebase";
```

### Uploading Data

To upload data to Firebase, you can use the `upload` method of the `FirebaseUpload` class.

```js
const initializeFirebase = require("upload-json-mock-firebase");

// Firebase configuration
//This configuration is extracted from the SDK of your Firebase project.
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-message-sender-id",
  appId: "your-app-id",
};

// Data to upload
//The "data" variable can be a mock of data or an imported JSON file.
const data = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 25,
  },
];

// Collection name
const collection = "users";

// Initialize FirebaseUpload
const firebaseUpload = initializeFirebase(firebaseConfig, data, collection);

// Upload data
firebaseUpload
  .upload()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

### Updating Data

To update data in Firebase, you can use the `update` method of the `FirebaseUpload` class.

```js
const initializeFirebase = require("upload-json-mock-firebase");

// Firebase configuration
//This configuration is extracted from the SDK of your Firebase project.
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-message-sender-id",
  appId: "your-app-id",
};

// Data to update
//The "data" variable can be a mock of data or an imported JSON file.
const data = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 31,
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 26,
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    age: 40,
  },
];

// Collection name
const collection = "users";

// Initialize FirebaseUpload
const firebaseUpload = initializeFirebase(firebaseConfig, data, collection);

// Field to filter by
//In this case, this filter ensures that emails that already exist in the database are not uploaded again.
const filter = "email";

// Update data
firebaseUpload
  .update(filter)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

## API

### `initializeFirebase(firebaseConfig, data, collection)`

This function returns an instance of the `FirebaseUpload` class, which you can use to upload or update data to Firebase.

- `firebaseConfig`: Firebase configuration object.
- `data`: Array of data to upload or update.
- `collection`: Name of the collection where the data will be stored.

### `FirebaseUpload`

This class allows you to upload and update data to Firebase.

#### `constructor(firebaseConfig, data, collection)`

This method creates an instance of the `FirebaseUpload` class.

- `firebaseConfig`: Firebase configuration object.
- `data`: Array of data to upload or update.
- `collection`: Name of the collection where the data will be stored.

#### `upload()`

This method uploads data to Firebase.

#### `update(filter)`

This method updates data in Firebase.

- `filter`: Field in the collection to filter by.

## Author

This project was developed by [Copilot Dev](https://github.com/EfimeroM). If you have any questions or comments, please feel free to contact me via email at [send email](mailto:copilot.dev.info@gmail.com).

## License

This package is released under the [MIT License](https://opensource.org/licenses/MIT).