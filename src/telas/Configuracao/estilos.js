import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../estilosGlobais';


export const styles = (theme = defaultTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 25,
      fontWeight: 'bold',
      color: theme.texto,
      marginBottom: 20,
    },
    subtitulo: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.texto,
      marginBottom: 20,
    },
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
