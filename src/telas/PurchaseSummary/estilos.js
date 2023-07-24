import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../estilosGlobais';

export const styles = (theme = defaultTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.fundo,
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 12,
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
    lista: {
      flex: 1,
      width: '100%',
    },
    ultimosVistos: {
      marginBottom: 16,
      paddingVertical: 16,
      backgroundColor: theme.ultimosVistos,
    },
    tituloUltimosVistos: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.titulo,
      marginHorizontal: 16,
      marginBottom: 8,
    },
    carrinhoArea: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    carrinhoIcon: {
      fontSize: 30,
      fontWeight: 'bold',
      color: theme.titulo,
    },
    carrinhoQuantidadeArea: {
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    carrinhoQuantidade: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "#fff",
    },
    iconArea: {
      marginLeft: 16,
    },
    icon: {
      color: theme.texto,
      fontSize: 30,
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


