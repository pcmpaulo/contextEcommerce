import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../estilosGlobais';

export const styles = (theme = defaultTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.fundo,
      alignItems: 'stretch',
      justifyContent: 'space-between',
      paddingTop: 12,
    },
    informations: {
      flex: 1,
    },
    tituloArea: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      marginBottom: 16,
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.titulo,
    },
    botao: {
      margin: 16,
      marginBottom: 32,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: theme.botao,
    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: '600',
      textAlign: 'center',
      color: theme.preto,
    }
  });
}


