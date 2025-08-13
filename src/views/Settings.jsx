import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfo,Password,Notification,Biling,Membership } from '@/components/shared'
import { Heading, Paragraph } from "@/components/ui/typography";

function Settings() {
    return (
        <>
            <div className='flex flex-col gap-[20px] sm:gap-[24px] md:gap-[28px] lg:gap-[33px] xl:gap-[36px] 2xl:gap-[39px]'>
                <div>
                    <Heading level="cardmd" className="font-[800] text-[#292929] font-urbanist">
                        Settings
                    </Heading>
                </div>

                <div>
                    <Tabs defaultValue="Billing" className="w-full h-full">
                        <TabsList>
                            <TabsTrigger value="Billing">Billing & Payment</TabsTrigger>
                            <TabsTrigger value="Personal">Personal info </TabsTrigger>
                            <TabsTrigger value="Membership">Membership</TabsTrigger>
                            <TabsTrigger value="password">Password & Security</TabsTrigger>
                            <TabsTrigger value="Notification">Notification Settings</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Billing"><Biling/></TabsContent>
                        <TabsContent value="Personal">< PersonalInfo /></TabsContent>
                        <TabsContent value="Membership"><Membership /></TabsContent>
                        <TabsContent value="password"><Password /></TabsContent>
                        <TabsContent value="Notification"><Notification /></TabsContent>
                    </Tabs>
                </div>

            </div>
        </>
    )
}

export default Settings
