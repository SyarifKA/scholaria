export default function Login(){
    return(
        <div className="flex w-full h-screen">
            <div className="w-2/3 bg-blue-500 h-full">test</div>
            <div className="w-1/3 bg-red-300 h-full flex-col flex justify-center items-center">
            <div className="flex-col flex gap-8">
            <h1 className="font-bold">Scholaria</h1>
            <form action="" className="flex-col flex gap-8">
                <label className="floating-label">
                        <input type="email" placeholder="Email" className="input input-lg validator" />
                        <div className="validator-hint">Enter valid email address</div>
                    <span>Email</span>
                </label>
                <label className="floating-label">
                        <input type="password" placeholder="Password" className="input input-lg validator" 
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"/>
                        <p className="validator-hint">
                          Must be more than 8 characters, including
                          <br/>At least one number
                          <br/>At least one lowercase letter
                          <br/>At least one uppercase letter
                        </p>
                    <span>Password</span>
                </label>
            </form>
            </div>
            </div>
        </div>
    )
}