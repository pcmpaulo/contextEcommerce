import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { styles } from './estilos';
import { AuthContext } from '../../contexts/AuthenticationContext'
import { ProductContext } from '../../contexts/ProductsContext'
import { deleteProduct } from '../../services/requests/products'


export default function FinishPurchase({navigation}) {
  const {selectedTheme} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  const {productQuantity, products, deleteProducts} = useContext(ProductContext);

  const [totalAmount, setTotalAmount] = useState(0);

  const componentStyle = styles(selectedTheme);

  useEffect(() => {
    let total = 0
    products.forEach((product) => {total = total + product.preco});
    setTotalAmount(total);
  }, [])

  async function finishPurchase() {
    await deleteProducts();
    navigation.navigate('Principal');
  }

  return (
    <View style={componentStyle.container}>
      <StatusBar />
      <View style={componentStyle.informations}>
        <Text style={componentStyle.titulo}>Information:</Text>
        <Text style={componentStyle.tituloArea}>Name: {user.name}</Text>
        <Text style={componentStyle.tituloArea}>Email: {user.email}</Text>
        <Text style={componentStyle.tituloArea}>Address: {user.address}</Text>
        <Text style={componentStyle.tituloArea}>Phone Number: {user.phoneNumber}</Text>
      </View>

      <Text>The number of products is: {productQuantity}</Text>
      <Text>Total purchase amount is: {totalAmount}</Text>

      <TouchableOpacity
        style={componentStyle.botao}
        onPress={finishPurchase}
      >
        <Text style={componentStyle.botaoTexto}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

