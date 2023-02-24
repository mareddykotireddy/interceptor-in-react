import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Interceptor from './interceptor'
const Home = () => {
    const navigation = useNavigate()
// const Home=async()=>{
    // const Home =await Interceptor.get('/api/Auth/login')
// }


    const goingHome = () => {
        // alert("ok")
        navigation('/login')

    }

    return (
        <div>
            <center>
                <h1> Welcome to Home page</h1>
                <button style={{ color: "white", textAlign: "center", backgroundColor: 'black', width: "100px", padding: "17px 13px", borderRadius: "10px" }}
    onClick={() => {
        localStorage.removeItem('token');
        goingHome();
    }}>Logout</button>

                    {/* <button style={{ color: "white", textAlign: "center", backgroundColor: 'black', width: "100px", padding: "17px 13px", borderRadius: "10px" }}
    onClick={() => {
        localStorage.removeItem('token');
        goingHome();
    }}>Logout</button> */}

            </center>
        </div>
    )

}

export default Home