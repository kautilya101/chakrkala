import Header from '../../components/Header'

const Home = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col flex-grow'>
        <Header />
        <main className='flex-grow flex items-center justify-center text-wrap text-center '>
          <span className='flex flex-col items-center justify-center gap-6'>    
            <h2 className='text-5xl md:text-8xl text-center opacity-70'>
              Fill Your Walls With
            </h2>
            <h1 className='text-7xl md:text-9xl text-center opacity-70'>
              Mandala
            </h1>
          </span>
        </main>
      </div>
    </>
  )
}

export default Home
