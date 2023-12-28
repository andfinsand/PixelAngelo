import Head from 'next/head';
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <head>
        <title>PixelAngelo</title>
        <meta
          name="description"
          content="Upscale images using RealESRGAN"
        />
      </head>
      <main className='flex min-h-screen flex-col items-center font-poppins bg-bgColor text-white'>
        <Header />
      </main>
    </>
  )
}
