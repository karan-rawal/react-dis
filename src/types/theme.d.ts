// import original module declarations
import 'styled-components';
import { SolidButtonTheme } from '../components/buttons/SolidButton';
import { OutlinedButtonTheme } from '../components/buttons/OutlinedButton.component';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
        solid: SolidButtonTheme;
        outlined: OutlinedButtonTheme;
    },
  }
}