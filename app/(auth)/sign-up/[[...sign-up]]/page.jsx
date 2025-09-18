import { SignUp } from "@clerk/nextjs";
import React from 'react';

export async function generateStaticParams() {
  return [
    { 'sign-up': [] },
    // Add more paths as needed, e.g. { 'sign-up': ['extra'] }
  ];
}

const SignUpPage = () => {
    return <SignUp/>;
};

export default SignUpPage;