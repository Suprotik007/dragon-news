import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Find Us</h1>

            <div>
            <div className="join join-vertical w-full border-1 border-gray-200">
  <button className="btn bg-base-200 join-item hover:bg-gray-300 border   justify-start"> <FaFacebook></FaFacebook>Facebook</button>
  <button className="btn hover:bg-gray-300 bg-base-200 join-item border-1 justify-start"> <FaTwitter></FaTwitter> Twitter</button>
  <button className="btn hover:bg-gray-300 bg-base-200 join-item  border-1 justify-start"><FaInstagram></FaInstagram> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;