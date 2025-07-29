'use client';
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Union } from '@/svgs/Icons'
import { Heading, Paragraph } from "@/components/ui/typography";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email.trim() && password.trim()) {
            router.push('/verify-login')
        } else {
            alert('Please fill in both email and password.')
        }
    }
    return (
        <>
            <div className='min-h-screen w-full flex items-center justify-center px-4 '>

                <div className='flex flex-col bg-White rounded-[10px] shadow-[0px_9px_34px_0px_#0000001A] gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] max-w-[432px]
                p-[18px] sm:p-[19px] md:p-[20px] lg:p-[22px] xl:p-[23px] 2xl:p-[24px] w-full
            '>

                    {/* top */}
                    <div className='space-y-[10px] sm:space-y-[11px] md:space-y-[13px] lg:space-y-[14px] xl:space-y-[15px] 2xl:space-y-[16px]
                    text-center'>
                        <div className='flex justify-center'>
                            <div className='w-[25.1px] h-[25.1px] sm:w-[29.3px] sm:h-[29.3px] md:w-[33.5px] md:h-[33.5px] lg:w-[36.7px] lg:h-[36.7px] xl:w-[39px] xl:h-[39px] 2xl:w-[41.1px] 2xl:h-[41.1px]
                            '>
                                <Union />
                            </div>
                        </div>
                        <Heading level="h1" className="font-bold text-Gray900">
                            Sign in
                        </Heading>
                        <Paragraph size="md" className="text-Gray700 font-medium font-satoshi">Sign in to access TheraMynd</Paragraph>
                    </div>


                    {/* Form */}
                    <form onSubmit={handleSubmit} className='flex flex-col gap-[20px] sm:gap-[23px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px]'>
                        {/* Input Feilds */}
                        <div className='space-y-[16px] sm:space-y-[18px] md:space-y-[20px] lg:space-y-[22px] xl:space-y-[23px] 2xl:space-y-[24px]'>
                            <div>
                                <Label htmlFor="email" className='mb-[8px]'>
                                    <Paragraph size="label" className="text-Gray900 font-bold">Email</Paragraph>
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div>
                                    <Label htmlFor="password" className='mb-[8px]'>
                                        <Paragraph size="label" className="text-Gray900 font-bold">Password</Paragraph>
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>

                                <div className='mt-[14px]'>
                                    <Paragraph size="sm" className="text-Gray900 font-medium text-center">Forgot password?<Link href='/reset-password'><span className='text-blue-600 ml-[1px]'>Reset</span></Link></Paragraph>
                                </div>
                            </div>

                        </div>

                        {/* Button */}
                        <div className=''>
                            <div className=''>
                                <Button variant="secondary" className='w-full' type='submit'>
                                        <Paragraph size="btnText" className="text-White font-black font-satoshi">Sign in
                                        </Paragraph>
                                </Button>
                            </div>
                            <div className='mt-[12px] sm:mt-[13px] md:mt-[14px] lg:mt-[15px] xl:mt-[15.5px] 2xl:mt-[16px]
'>
                                <Paragraph size="sm" className="text-Gray900 font-medium text-center">Don't have an account yet?<Link href='/create-account'><span className='text-blue-600 ml-[1px]'>Sign up now</span></Link></Paragraph>
                            </div>
                        </div>
                    </form>


                </div>

            </div>

        </>
    )
}

