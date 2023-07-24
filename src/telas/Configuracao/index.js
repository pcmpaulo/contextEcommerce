import { Text, View, Switch } from 'react-native';
import { styles } from './estilos'
import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export default function Configuracao({ navigation }) {
  const {actualTheme, setActualTheme, selectedTheme} = useContext(ThemeContext);

  const componentStyle = styles(selectedTheme);

  return (
    <View style={componentStyle.container}>
      <Text style={componentStyle.titulo}>Configuração</Text>

      <View style={componentStyle.inputArea}>
      <Text style={componentStyle.subtitulo}>Tema: {actualTheme}</Text>
      <Switch
        onValueChange={() => {
          if (actualTheme === 'dark') {
            setActualTheme('light');
          } else {
            setActualTheme('dark');
          }
        }}
        value={actualTheme === 'light'}
      />
      </View>
    </View>
  );
}

