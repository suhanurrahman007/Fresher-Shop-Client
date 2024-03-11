"use client"
import useAuth from '@/components/hooks/useAuth';
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  const {user} = useAuth()
  console.log(user?.photoURL);
  return (
    <div>
      {user?.displayName}
      <Image src={user?.photoURL} width={500} height={500} alt='ff'></Image>
      

    </div>
  );
};

export default HomePage;