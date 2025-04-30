import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';

const HomeLayout = () => {
    return (
        <div>
            <header>
<Header></Header>
            </header>
<section>
    <Latest></Latest>
</section>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='eight-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;