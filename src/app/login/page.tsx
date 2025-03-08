import Image from 'next/image';
import Student from "../../assets/photo/student.jpg"

export default function Login(){
    return(
        <div className="flex w-full h-screen">
            <div className="w-2/3 bg-[#705C53] h-full">
            {/* <img src={Student.src} alt="" className='bg-cover w-full h-full' /> */}
            </div>
            <div className="w-1/3 bg-[#B9E5E8] h-full flex-col flex justify-center items-center">
            <div className="flex-col flex gap-4">
            <h1 className="font-bold text-2xl text-yellow-500">Scholaria</h1>
            <form action="" className="flex-col flex">
                <label className="floating-label">
                        <input type="email" placeholder="Email" className="input input-lg validator" />
                        <div className="validator-hint">Enter valid email address</div>
                    <span>Email</span>
                </label>
                <label className="floating-label">
                        <input type="password" placeholder="Password" className="input input-lg validator" 
                        required
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"/>
                        <p className="validator-hint">
                          Must be more than 8 characters
                          {/* <br/>At least one number
                          <br/>At least one lowercase letter
                          <br/>At least one uppercase letter */}
                        </p>
                    <span>Password</span>
                </label>
                <button type="submit" className="bg-blue-500 rounded-lg py-2 font-semibold border border-white text-white cursor-pointer hover:bg-blue-700">Login</button>
            </form>
            </div>
            </div>
        </div>
    )
}