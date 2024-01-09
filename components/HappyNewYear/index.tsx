import React from 'react'
import './newyear.css'
import Link from 'next/link'

const HappyNewYear = () => {
    return (
        <><section className="py-20 lg:py-25 xl:py-30 mt-[150px] mb-[200px]">
            <div className="feliz">Happy new year</div>
            <div className="ano_novo">
                <span>202</span>
                <span className="seis">3</span>
                <span className="sete">4</span>
                <div className="balao"></div>
            </div>
            <div className="fogos">
                <div className="f1">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div className="f2">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div className="f3">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div className="f4">
                    <span><i></i></span>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
            </div>

        </section>
            <Link href='/blog'>
                <button className="button-29" role="button">Go to Projects</button>
            </Link></>
    )
}

export default HappyNewYear