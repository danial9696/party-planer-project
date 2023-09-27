import '../styles/main.scss';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
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
