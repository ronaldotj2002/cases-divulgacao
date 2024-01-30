import Link from 'next/link'
import React from 'react'

export default function Page404() {
    return (
        <div>
            <h1>404</h1>
            <Link href="/">
                Home
            </Link>
        </div>
    )
}