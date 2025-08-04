import React from 'react'
import {Journals} from '@/views'
function Page({ params }) {
    return (
        <>
            <Journals id={params.id}/>
        </>
    )
}

export default Page
