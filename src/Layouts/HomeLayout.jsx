import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import NavBar from '../Components/NavBar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
<Header></Header>

            </header>
            <section className='w-11/12 mx-auto my-3'>
    <Latest></Latest>
</section>
<nav className='w-11/12 mx-auto my-3'>
    <NavBar></NavBar>
</nav>

            <main className='mx-auto w-11/12 my-3 *: grid grid-cols-12'>
               <aside className='col-span-3'>
                <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                    </aside>
            </main>
        </div>
    );
};

export default HomeLayout;