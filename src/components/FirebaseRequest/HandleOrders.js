import { getFirestore } from '../../firebase';
import { useHistory } from 'react-router-dom';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const db = getFirestore();
const orderCollection = db.collection('orders');

//crear orden con los productos del carrito (context), y los datos del user (formdata)
const infoUserObjectGenerator = (formData, cart, totalAmount) => {
    let buyer = {};
    for (let key of formData.keys()) {
        buyer[key] = formData.get(key);
    }
    const infoUser = {
        buyer,
        items: cart,
        total: totalAmount(),
        date: firebase.firestore.FieldValue.serverTimestamp()
    }
    return infoUser
}

//maneja la peticion de la orden, la envia a la bd y capta los resultados(el id)
const CreateOrder = (formdata, cart, totalAmount, setOrderRequest) => {
    const infoUser = infoUserObjectGenerator(formdata, cart, totalAmount)
    orderCollection
        .add(infoUser)
        .then(docRef => {
            setOrderRequest(docRef)
        })
        .catch(err => console.log(err))
        .finally(updateStocks(cart))
}

//actualiza stocks luego de realizar la orden
const updateStocks = (cart) => {
    cart.forEach(item => {
        const productsCollection = db.collection('products')
        const updateCollection = productsCollection.doc(item.id);
        updateCollection
            .update({ stock: item.stock - item.quantity })

    })
}

//borra una orden de la coleccion en la bd
export const RemoveOrder = (orderRequest) => {
    let history = useHistory();

    const productRef = orderCollection.doc(orderRequest.id)
    productRef.delete().then(() => { history.push('/') })
}
export default CreateOrder;