import Sidebar from '@/components/sidebar';
import './globals.css';

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body className='font-primaryFont'>
            <div className='flex gap-5'>
               <Sidebar />
               <main className='w-full flex-1 mx-auto py-4'>{children}</main>
            </div>
         </body>
      </html>
   );
}
