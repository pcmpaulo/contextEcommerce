import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { produtos } from './produtos';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { styles } from '../Principal/estilos';
import { AuthContext } from '../../contexts/AuthenticationContext'
import { ProductContext } from '../../contexts/ProductsContext'


export default function Principal({navigation}) {
  const {selectedTheme} = useContext(ThemeContext);
  const {user} = useContext(AuthContext);
  const {productQuantity, lastSeeProducts} = useContext(ProductContext);

  const componentStyle = styles(selectedTheme);

  return (
    <View style={componentStyle.container}>
      <StatusBar />
      <View style={componentStyle.tituloArea}>
        <Text style={componentStyle.titulo}>Olá, {user.name}</Text>
        <View style={componentStyle.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Summary')}>
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
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={componentStyle.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() =>
          <View>
            {lastSeeProducts.length > 0 &&
              <View style={componentStyle.ultimosVistos}>
                <Text style={componentStyle.tituloUltimosVistos}>Últimos vistos</Text>
                <FlatList
                  data={lastSeeProducts}
                  keyExtractor={item => Math.random()}
                  renderItem={({ item }) => <Produto item={item} adicionar={false} />}
                  style={componentStyle.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>}
            <Text style={[componentStyle.titulo, { paddingLeft: 16 }]}>Produtos</Text>
          </View>
        }
      />
    </View>
  );
}

