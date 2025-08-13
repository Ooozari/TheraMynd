import React from 'react'
import {
    Userinfotabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/userinfotabs";
import { PersonalInfo, Password, Notification, Biling, Membership } from '@/components/shared'
function UserInfoTabLayout() {
    return (
        <>
            <Userinfotabs defaultValue="Billing" className="w-full">
                {/* Scrollable only for tabs list */}
                <div className="w-full overflow-x-auto">
                    <TabsList
                        className="
                        bg-[#ededed]
                        xl:mx-0
                        mx-auto
                        h-[42px] sm:h-[44px]
                        px-[5px]
                        w-max
                        flex flex-nowrap
                        whitespace-nowrap
                        ">
                        <TabsTrigger value="Billing" className="h-[36px] sm:h-[38px] max-w-fit whitespace-nowrap">
                            Billing & Payment
                        </TabsTrigger>
                        <TabsTrigger value="Personal" className="max-w-fit h-[36px] sm:h-[38px] whitespace-nowrap">
                            Personal info
                        </TabsTrigger>
                        <TabsTrigger value="Membership" className="max-w-fit h-[36px] sm:h-[38px] whitespace-nowrap">
                            Membership
                        </TabsTrigger>
                        <TabsTrigger value="password" className="max-w-fit h-[36px] sm:h-[38px] whitespace-nowrap">
                            Password & Security
                        </TabsTrigger>
                        <TabsTrigger value="Notification" className="h-[36px] sm:h-[38px] max-w-fit whitespace-nowrap">
                            Notification Settings
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/* Tab Contents - No horizontal scroll */}
                <TabsContent value="Billing"><Biling /></TabsContent>
                <TabsContent value="Personal"><PersonalInfo /></TabsContent>
                <TabsContent value="Membership"><Membership /></TabsContent>
                <TabsContent value="password"><Password /></TabsContent>
                <TabsContent value="Notification"><Notification /></TabsContent>
            </Userinfotabs>


        </>
    )
}

export default UserInfoTabLayout
