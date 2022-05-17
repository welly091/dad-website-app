import React, { Component } from 'react'
import './index.css';
import Sub1 from './Sub1';

export default () => {
    return (
        <>
        <section className='text-center bg-light'>
            <div className='container '>
                <div className='d-md-flex justify-content-between align-items-center'>
                    <div className=''>
                        <h1>"您好，我是謝老師" </h1>&nbsp;
                        <p>將艱澀理論轉以活潑生動與生活化</p>
                        <p>透過引經據典，以實證證據或是研究結果作為基礎</p>
                        <p>喜歡雙向溝通 激發更多創意與經驗分享</p>
                    </div>
                    <img src="./img/henry.jpg" className="imgStyle" ></img>
                </div>
            </div>
        </section>
        <Sub1></Sub1>
        </>
    )
}
