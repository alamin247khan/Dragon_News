import React from 'react'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import NavBar from '../components/NavBar'
import LeftNavbar from '../components/Layout_components/LeftNavbar';
import RightNavebar from '../components/Layout_components/RightNavebar';

export default function HomeLayout() {
  return (
    <div className='font-poppins'>
      <header>
        <Header />
        <section className='w-11/12 mx-auto '>
          <LatestNews />
        </section>
      </header>
      <nav className='w-11/12 mx-auto py-2'>
        <NavBar />
      </nav>
      <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-2'>
        <aside className='col-span-3'>
          <LeftNavbar />
        </aside>
        <section className='col-span-6'>Main Content</section>
        <aside className='col-span-3'>
          <RightNavebar />
        </aside>
      </main>
    </div>
  )
}
