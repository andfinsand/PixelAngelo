import Head from 'next/head';
import Header from '../components/Header'
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
      <main className='flex min-h-screen flex-col items-center font-poppins bg-bgColor text-white'>
        <Header />
        <Divider />
      </main>
    </>
  )
}
