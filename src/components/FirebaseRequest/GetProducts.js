import { getFirestore } from '../../firebase/index';
const db = getFirestore();

const getProduct = (categoryKey, setLoader, setItems, setError) => {

    //reset error
    setError(false)

    //filter. It can return all items or by their category
    let productsCollection = categoryKey ? db.collection('products').where('category', '==', parseInt(categoryKey)) : db.collection('products');
    
    setLoader(true)
    productsCollection
        .get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                throw new Error('empty')
            } else {
                setItems(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            }
        })
        .catch((error) => setError(error))
        .finally(() => setLoader(false));

}

export const getCategoryByKey = (key, setBannerText) => {

    const categoriesCollection = db.collection('categories').where('key', '==', parseInt(key))
    categoriesCollection
        .get()
        .then(querySnapshot => {
            if (querySnapshot.empty) {
                setBannerText(false)
            } else {
                let category = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setBannerText(category[0].name)
            }
        })

}

export const getProductById = (id, setLoader, setItem) => {

    const productsCollection = db.collection('products');
    const product = productsCollection.doc(id);

    setLoader(true)
    product
        .get()
        .then(doc => {
            if (!doc.exists) {
                console.log('el producto no existe')
            } else {
                setItem({ id: doc.id, ...doc.data() })
            }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false));
}
export default getProduct;