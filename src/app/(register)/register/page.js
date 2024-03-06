// import Register from '@/components/shared/Register/Register';
import dynamic from 'next/dynamic';
import React from 'react';
const Register = dynamic(() => import ("../../../components/shared/Register/Register.js") )

const page = () => {
    return (
        <>
            <Register />
        </>
    );
};

export default page;