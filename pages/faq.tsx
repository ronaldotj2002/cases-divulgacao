import Link from 'next/link'
import React from 'react'
import Footer from '../src/components/footer'

export default function Faq() {
    return (
        <div >
            <h1 className="bg-slate-500">Faq</h1>
            <Link href="/">
                Home
            </Link>
            <div className="grid p-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 sm:p-0">                               
                <div className="bg-red-700 sm:col-start-2 sm:col-span-2">02</div>
                <div className="bg-orange-700 sm:col-span-3">03</div>                 
            </div>

            <Footer/>
        </div>
    )
}