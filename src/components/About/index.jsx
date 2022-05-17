import React, { Component } from 'react'
//import background from "./img/sample.jpeg"
import './index.css';

export default () => {
    return (
        <section className="p-5 text-center text-md-start ">
            <div className="container" >
                <div className="row align-items-center justify-content-between">
                   <div className="col-lg p-5" >
                        <h1>山水老師 謝仁智</h1>
                        <div className="p-2">
                            <h3>現職</h3>
                            <p>哈佛企業顧問管理 資深講師</p>
                        </div>
                        <div className='p-2'>
                            <h3>學歷</h3>
                            <p>國立中央大學 企研所博士班</p>
                            <p>元智大學 經營管理研究所 EMBA</p>
                            <p>高雄醫學院 藥學系</p>
                        </div>
                        <div className='p-2'>
                            <h3>經歷</h3>
                            <p>聯和醫療器材股份有限公司 副總經理</p>
                            <p>科達製藥股份有限公司 副總經理/企劃部經理</p>
                            <p>生寶臍帶血公司 業務處處長</p>
                            <p>ACGT 先進基因公司 事業發展部經理</p>
                            <p>法國施維雅藥廠台灣分公司 產品行銷經理</p>
                            <p>端強實業公司 地區業務經理</p>
                            <p>中華中醫藥生技國際發展協會 人力培訓會副主委主任</p>
                            <p>第二屆兩岸美容高峰會 顧問</p>
                            <p>湖南中醫大學台灣同鄉會 顧問</p>
                        </div>
                    </div>
                    <img src="./img/henry.jpg" className="imgStyle" ></img>
                </div>
            </div>
        </section>
      
    )
  
}