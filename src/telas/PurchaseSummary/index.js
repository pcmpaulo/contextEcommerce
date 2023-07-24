import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { styles } from './estilos';
import { AuthContext } from '../../contexts/AuthenticationContext'
import { ProductContext } from '../../contexts/ProductsContext'


export default function PurchaseSummary({navigation}) {
  const {selectedTheme} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  const {productQuantity, products, lastSeeProducts} = useContext(ProductContext);

  const componentStyle = styles(selectedTheme);

  return (
    <View style={componentStyle.container}>
      <StatusBar />
      <View style={componentStyle.tituloArea}>
        <Text style={componentStyle.titulo}>Olá, {user.name}</Text>
        <View style={componentStyle.carrinhoArea}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name="shopping-cart" size={30} color="#fff" style={componentStyle.carrinhoIcon} />
          </TouchableOpacity>
          { productQuantity > 0 &&
            <View style={componentStyle.carrinhoQuantidadeArea}>
              <Text style={componentStyle.carrinhoQuantidade}>{productQuantity}</Text>
            </View>
          }
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={componentStyle.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={componentStyle.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={false} />}
        style={componentStyle.lista}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={componentStyle.botao}
        onPress={() => navigation.navigate('Finish')}
      >
        <Text style={componentStyle.botaoTexto}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
}

