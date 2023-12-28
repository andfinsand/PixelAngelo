import Head from 'next/head';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <>

      <Head>
        <title>PixelAngelo</title>
        <meta
          name='description'
          content='Upscale images using RealESRGAN'
        />
      </Head>

      <main className='flex min-h-screen flex-col items-center justify-between font-poppins bg-bgColor text-white'>
        {/* Header */}
        <div className='flex flex-col items-center w-screen'>
          <Header />
          <Divider />
        </div>
        {/* Footer */}
        <div className='flex flex-col items-center w-screen'>
          <Divider />
          <Footer />
        </div>
      </main>
    </>
  )
}
