import { getFirestore } from '../../firebase';

const GetCategories = (setCategories) => {
    const db = getFirestore();
    let productsCollection = db.collection('categories')

    productsCollection
        .get()
        .then(querySnapshot => setCategories(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
        .catch((error) => console.log(error))

}

export default GetCategories
