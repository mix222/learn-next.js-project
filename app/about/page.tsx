import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>About Page</h1>
        <Link href="/">Home</Link>
    </div>
  )
}

export default page