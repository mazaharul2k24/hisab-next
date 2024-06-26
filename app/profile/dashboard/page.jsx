import { AlertDemo } from './Alert'
import Time from './Time';
import { IoHomeOutline } from "react-icons/io5";
import { CalendarDemo } from './Calender';

export async function generateMetadata({ params }) {
    return {
      title: 'Dashboard',
    }
  }
  
export default function Dashboard() {



  return (
    <>

  <div className="main lg:flex items-center justify-between gap-3">
  <div className="main md:w-[70%] mx-auto">


    <div className="sHeader p-3">
        <h1 className='flex items-center gap-1 text-lg font-semibold'><IoHomeOutline /> Dashboard</h1>
      </div>
      <div className="date mt-4">
  <Time/>
    </div>
<div className="alertOpt py-2 w-[95%] md:w-full items-center mx-auto">
<AlertDemo/>
</div>
      <div className='grid gap-1  md:grid-cols-2 lg:grid-cols-3 grid-cols-2 mx-auto items-center  mt-6'>

      <div className="sbox   m-2 bg-sky-400 text-gray-900 py-4 px-6 text-center  rounded-xl shadow-xl shadow-gray-200">
            <p>1500 BDT</p>
            <b className='block'>Total revinew</b>
            <small>Last 28 days</small>
        </div>
      <div className="sbox m-2 bg-purple-400 text-gray-900 py-4 px-6 text-center  rounded-xl shadow-xl shadow-gray-200">
            <p>1500 BDT</p>
            <b className='block'>Total revinew</b>
            <small>Last 28 days</small>
        </div>
      <div className="sbox m-2 bg-indigo-400 text-gray-900 py-4 px-6 text-center  rounded-xl shadow-xl shadow-gray-200">
            <p>1500 BDT</p>
            <b className='block'>Total revinew</b>
            <small>Last 28 days</small>
        </div>
      <div className="sbox m-2 bg-green-400 text-gray-800 py-4 px-6 text-center  rounded-xl shadow-xl shadow-gray-200">
            <p>1500 BDT</p>
            <b className='block'>Total revinew</b>
            <small>Last 28 days</small>
        </div>
  
      <div className="sbox m-2 bg-gray-700 text-gray-300 py-4 px-6 text-center  rounded-xl shadow-xl shadow-gray-200">
            <p>1500 BDT</p>
            <b className='block'>Total revinew</b>
            <small>Last 28 days</small>
        </div>
  
        
       
      </div>

    </div>
    <div className="Calender hidden md:block my-4 w-fit mx-auto shadow-md rounded-md border p-3 mt-6">
   
<CalendarDemo/>
    </div>
  </div>
    
    
    </>
  )
}
