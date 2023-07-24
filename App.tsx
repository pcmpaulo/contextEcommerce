import Rotas from "./src/rotas";
import {ThemeProvider} from './src/contexts/ThemeContext';
import {AuthProvider} from './src/contexts/AuthenticationContext';
import {ProductProvider} from './src/contexts/ProductsContext';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProductProvider>
          <Rotas />
        </ProductProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
