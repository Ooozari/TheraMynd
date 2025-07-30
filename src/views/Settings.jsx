import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {PersonalInfo} from '@/components/shared'

function Settings() {
    return (
        <>
            <div>
                <Tabs defaultValue="Billing" className="w-full h-full">
                    <TabsList>
                        <TabsTrigger value="Billing">Billing & Payment</TabsTrigger>
                        <TabsTrigger value="Personal">Personal info </TabsTrigger>
                        <TabsTrigger value="Membership">Membership</TabsTrigger>
                        <TabsTrigger value="password">Password & Security</TabsTrigger>
                        <TabsTrigger value="Notification">Notification Settings</TabsTrigger>
                    </TabsList>
                        <TabsContent value="Billing">Make changes to your account here.</TabsContent>
                        <TabsContent value="Personal">< PersonalInfo /></TabsContent>
                        <TabsContent value="Membership">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                        <TabsContent value="Notification">Make changes to your account here.</TabsContent>
                </Tabs>
            </div>
        </>
    )
}

export default Settings
