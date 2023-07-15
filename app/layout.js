import './globals.css'
import './add.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../context/ThemeContext'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })


//متا دیتای صفحه 
export const metadata = {
  title: 'Pouria Blog',
  description: 'My Full Stack Blog!',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='main-container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
