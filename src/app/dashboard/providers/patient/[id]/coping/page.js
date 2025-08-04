import React from 'react'
import {Copying} from '@/views'
function Page({ params }) {
    return (
        <>
            <Copying id={params.id}/>
        </>
    )
}

export default Page
