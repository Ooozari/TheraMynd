import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfo,Password,Notification,Biling,Membership } from '@/components/shared'
function TabLayout() {
    return (
        <Tabs defaultValue="Billing" className="w-full h-full">
            <TabsList>
                <TabsTrigger value="Billing">Billing & Payment</TabsTrigger>
                <TabsTrigger value="Personal">Personal info</TabsTrigger>
                <TabsTrigger value="Membership">Membership</TabsTrigger>
                <TabsTrigger value="password">Password & Security</TabsTrigger>
                <TabsTrigger value="Notification">Notification Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="Billing"><Biling /></TabsContent>
            <TabsContent value="Personal">< PersonalInfo /></TabsContent>
            <TabsContent value="Membership"><Membership /></TabsContent>
            <TabsContent value="password"><Password /></TabsContent>
            <TabsContent value="Notification"><Notification /></TabsContent>
        </Tabs>
    )
}

export default TabLayout
