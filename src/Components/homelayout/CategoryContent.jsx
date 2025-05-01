import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';

const CategoryContent = () => {
    const {id}=useParams()
    const data=useLoaderData()
    // console.log(id,data);
const [categoryContent,setCategoryContent]=useState([])
    useEffect(()=>{
        if(id=='0'){
            setCategoryContent(data)
        }else if(id=='1'){
            
            const filteredNews=data.filter((news)=>news.others.is_today_pick==true)
            setCategoryContent(filteredNews)
        }else{
            const filteredNews=data.filter((news)=>news.category_id ==id)
            setCategoryContent(filteredNews)
        }
       
        
    },[data,id])
    
    return (
        <div>
            <div>
            <h1 className='font-bold mb-5'>
           Total News- <span className='text-orange-700'>{categoryContent.length}</span>
                </h1> 
            </div>

            <div className='grid grid-cols-1  gap-5'>
                {
                    categoryContent.map((news)=>(
                        <NewsCard key={news.id} news={news}>
                            
                        </NewsCard>
                    ))
                }

            </div>
        </div>
    );
};

export default CategoryContent;