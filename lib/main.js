const { addDoc, collection, getFirestore, getDocs } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

/**
 * Class to upload and update data to Firebase.
 */
class FirebaseUpload {
   /**
    * Constructor of the FirebaseUpload class.
    * @param {object} firebaseConfig - Firebase configuration.
    * @param {array} data - Array of data to upload to Firebase.
    * @param {string} collection - Name of the collection where the data will be stored.
    */
   constructor(firebaseConfig, data, collection) {
      this.db = getFirestore(initializeApp(firebaseConfig))
      this.data = data
      this.collection = collection
   }

   /**
    * Method to upload data to Firebase.
    * @returns {object} - An object with a status message and a success or error message.
    */
   async upload() {
      try {
         await Promise.all(this.data.map(async (res) => {
            await addDoc(collection(this.db, this.collection), res)
         }))
         return { status: 201, message: 'Success' }
      } catch (err) {
         return { status: 400, error: err.message }
      }
   }

   /**
    * Method to update data in Firebase.
    * @param {string} filter - Field in the collection to filter by.
    * @returns {object} - An object with a status message and a success or error message.
    */
   async update(filter) {
      try {
         const resDb = await getDocs(collection(this.db, this.collection))
         const dataDb = resDb.docs.map((doc) => (doc = { ...doc.data() }))
         dataDb.map((resData) => {
            this.data.map((res, index) => {
               if (res[filter] === resData[filter]) {
                  this.data.splice(index, 1)
               }
            })
         })
         await this.upload()
         return { status: 201, message: 'Success' }
      } catch (err) {
         return { status: 400, error: err.message }
      }
   }
}

/**
 * Function to initialize uploading or updating data to Firebase.
 * @param {object} firebaseConfig - Firebase configuration.
 * @param {array} data - Array of data to upload to Firebase.
 * @param {string} collection - Name of the collection where the data will be stored.
 * @returns {FirebaseUpload} - An instance of the FirebaseUpload class.
 */
const initializeFirebase = (firebaseConfig, data, collection) => {
   return new FirebaseUpload(firebaseConfig, data, collection)
}

module.exports = initializeFirebase