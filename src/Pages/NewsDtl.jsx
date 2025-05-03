import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homelayout/RightAside';
import NewsDtlCard from '../Components/homelayout/NewsDtlCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDtl = () => {
    const data=useLoaderData()
    const {id}=useParams()
    const [news,setNews]=useState({})

    // console.log(data,id,news);
    useEffect(()=>{
        const newsDetails=data.find((singleNews)=>singleNews.id==id)
        setNews(newsDetails)
    },[data,id,news])
    
    return (
        <div>
         <header>
            <Header></Header>
         </header>
         <main className='w-11/12 mx-auto grid grid-cols-12 gap-10 py-10'>
         <section className='col-span-9'>
            <h1 className='font-bold text-xl mb-5 text-orange-700'>News</h1>
            <NewsDtlCard news={news}></NewsDtlCard>
         </section>
<aside className='col-span-3 sticky top-10 h-fit'>
    <RightAside>

    </RightAside>
</aside>
         </main>
        </div>
    );
};

export default NewsDtl;