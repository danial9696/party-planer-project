import type { AppProps } from 'next/app';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

import '../styles/main.scss';

// * Global styles
// import '../../styles/normalize.css';
// import '../../styles/reset.css';

// * Set axios-mock-adapter in whole project
import 'src/@fake-db';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme
      appearance='dark'
      accentColor='cyan'
      grayColor='gray'
      panelBackground='solid'
      scaling='100%'
      radius='full'
    >
      <Component {...pageProps} />
    </Theme>
  );
}
