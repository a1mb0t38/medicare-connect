// import SideBar from '@/components/SideBar';

import { auth } from '@/lib/auth';
import { authClient } from '@/lib/auth-client';
import { headers } from 'next/headers';
import React from 'react';

const DashBoardPage = async() => {

  // const session = await auth.api.getSession({
  //   headers: await headers()
  // })
  // const user = session?.user;
  // console.log(user, "user data")

    return (
        <div>
            <div className='min-h-screen flex items-center justify-center'>
              <h2>Note for New registered doctor: in order to get yourself listed on find doctor section for patient, you need to save your info. go to doctor info in sidebar and there You have to put your info and save it. then patient will find you and make appointment for you.</h2>
            </div>
        </div>
    );
};

export default DashBoardPage;