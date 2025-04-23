import { Box } from '@mui/material';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import ClientLayout from '@/components/layouts/ClientLayout';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'MotorCar',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
        <ClientLayout>
            <ThemeRegistry>
              <Box component="main">
                {children}
              </Box>
            </ThemeRegistry>
        </ClientLayout>
      </body>
    </html>
  );
}