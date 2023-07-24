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
    inputArea: {
      height: 200,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width: '90%',
      backgroundColor: theme.input,
      marginBottom: 15,
      padding: 10,
      borderRadius: 5,
      color: theme.preto,
    },
    botao: {
      height: 40,
      width: 100,
      backgroundColor: theme.botao,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: '400',
      color: theme.preto,
    }
  });
}

