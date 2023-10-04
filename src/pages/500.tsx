import { ReactNode } from 'react';

import Link from 'next/link';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BlankLayout from 'src/@core/layouts/BlankLayout';

import { BoxWrapper, ErrorImg } from 'src/styles/pages/errors-pages/style';
import FooterIllustrations from 'src/views/components/misc/FooterIllustrations';

/* The `Error500` function is a React component that renders the UI for a 500 error page. It returns a
JSX element that represents the structure and content of the error page. */
function Error500(): JSX.Element {
  return (
    <Box className='content-center'>
      <Box
        sx={{
          p: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <BoxWrapper>
          <Typography variant='h1' sx={{ mb: 2.5 }}>
            500
          </Typography>

          <Typography variant='h5' sx={{ mb: 2.5, fontSize: '1.5rem !important' }}>
            خطای سرور داریم 🔐
          </Typography>

          <Typography variant='body2'>
            گویا سرورهامون سوخته. اما نگران نباش ما داریم روش کار می‌کنیم
          </Typography>
        </BoxWrapper>

        <ErrorImg alt='error-illustration' src='/images/pages/500.png' />

        <Button href='/' component={Link} variant='contained' sx={{ px: 5.5 }}>
          بازگشت به داشبورد
        </Button>
      </Box>
      <FooterIllustrations image='/images/pages/misc-500-object.png' />
    </Box>
  );
}

Error500.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Error500;
