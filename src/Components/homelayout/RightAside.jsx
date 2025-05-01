import React, { Suspense } from 'react';
import SocialLogin from './SocialLogin';

const RightAside = () => {
    return (
        <div>
            <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <SocialLogin></SocialLogin>
            </Suspense>
           
        </div>
        </div>
    );
};

export default RightAside;