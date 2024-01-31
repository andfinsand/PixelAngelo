import Head from 'next/head';
import Header from '../components/Header'
import DropZone from '../components/DropZone'
import Examples from '../components/Examples'
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer'
import Divider from '../components/Divider'

export default function Home() {
  return (
    <>

      {/* Metadata */}
      <Head>
        <title>PixelAngelo - Enhance images with 2x resolution</title>
        <meta
          name='description'
          content='Enhance and upscale images with 2x resolution using RealESRGAN'
        />
        <meta
          name='keywords'
          content='pixelangelo, image upscaling, upscale resolution, super resolution, image sharpness, photo enhancement, 2x upscaler, realesrgan, ai, nextjs, flask, python, tailwind, docker, runpod, backblaze, cloud storage, cloud gpu'
        />
        <meta
          name='author'
          content='Andrew Finsand'
        />
        <meta
          name='viewport'
          content='width=device-width'
        />
      </Head>

      <main className='flex flex-col min-h-screen items-center justify-between bg-gradient-to-br from-bgColorFrom to-bgColorTo text-white font-poppins'>

        {/* Header */}
        <div className='flex flex-col items-center w-full'>
          <Header />
          <Divider />
        </div>

        {/* Drop zone area */}
        <div className='flex flex-col w-full'>
          <DropZone />
          <Divider />
        </div>

        {/* Examples */}
        <div className='flex flex-col items-center w-full'>
          <Examples />
          <Divider />
        </div>

        {/* Privacy policy */}
        <div className='flex flex-col items-center w-full'>
          <PrivacyPolicy />
          <Divider />
        </div>

        {/* Footer */}
        <div className='flex flex-col items-center w-full'>
          <Footer />
        </div>
      </main>

    </>
  )
}
