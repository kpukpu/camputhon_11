//로딩페이지
import React from "react";
import {BarLoader} from "react-spinners";
import '../styles/text.css';

const Loading = () => {

    const override = {
        span: '20px',
        margin : '0 auto',
        marginTop:'220px',
        textAlign : 'center',
        color : '#fff',
        size : '20'
    };

    return (
        <div >
            <BarLoader
                cssOverride = {override}
            />
            <p className='loading'>로딩 중...</p>
        </div>
    )
}

export default Loading