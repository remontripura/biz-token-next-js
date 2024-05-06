
import { isAuthenticated } from '@/app/utils/Auth';
import { redirect } from 'next/navigation';


const Admin = () => {
    const isAuth = isAuthenticated;


    if(!isAuth) {
        redirect("/login");
    }else{
        redirect('/all-users')
    }
  return (
    <main className="text-center h-screen flex justify-center items-center">
      <div>
        <h1>Admin Page</h1>
      </div>
    </main>
  );
};


export default Admin;