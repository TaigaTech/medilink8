import { SignIn } from "@clerk/nextjs";
import React from 'react';

export async function generateStaticParams() {
    return [
        { 'sign-in': [] }, 

    ];
}

const SignInPage = () => {
    return <SignIn/>;
};

export default SignInPage;