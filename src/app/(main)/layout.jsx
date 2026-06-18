import NavBar from '@/components/NavBar';
import React from 'react';

const MainPagelayout = ({children}) => {
    return (
        <>
          <NavBar></NavBar>
          {children}  
        </>
    );
};

export default MainPagelayout;