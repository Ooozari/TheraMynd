import React from 'react'
import {Checkins} from '@/views'
function Page({ params }) {
    return (
        <>
            <Checkins id={params.id}/>
        </>
    )
}

export default Page
