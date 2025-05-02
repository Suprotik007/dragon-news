import React from 'react';
import { Link } from 'react-router';

const NewsDtlCard = ({news}) => {
    console.log(news);
    
    return (
        <div className='space-y-5'>
            <img className='w-full  h-[410px] object-cover mb-5' src={news.image_url} alt="" />
            <h1 className='text-2xl font-semibold '>{news.title}</h1>
            <p className='text-accent mt-3'>{news.details}</p>

            <Link  to={`/category/${news.category_id}`}><button className='btn btn-secondary'>Back to category</button></Link>
        </div>
    );
};

export default NewsDtlCard;