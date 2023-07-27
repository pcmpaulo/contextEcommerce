import { useContext, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native'
import { styles } from './estilos';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthenticationContext'

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {selectedTheme} = useContext(ThemeContext);
  const {login} = useContext(AuthContext);
  const componentStyle = styles(selectedTheme);


  function authUser() {
    const response = login(email, password);
    if (response) {
      navigation.navigate('Principal');
    } else {
      Alert.alert('Invalid credentials');
    }
  }

  return (
    <View style={componentStyle.container}>
      <StatusBar />
      <Text style={componentStyle.titulo}>Login</Text>

      <View style={componentStyle.inputArea}>
        <TextInput
          style={componentStyle.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={componentStyle.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
    </View>
  );
}

