'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heading, Paragraph } from '@/components/ui/typography';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen px-6 sm:px-20 py-20 gap-16 bg-[#FAFAFA]">
      <div className="text-center">
        <Heading level="lgText" className="text-MindfulBrown90 font-urbanist font-[800]">
          Welcome to TheraMynd
        </Heading>
        <Paragraph size="subText" className="text-[#4D4D4D] mt-2">
          Navigate to any screen below
        </Paragraph>
      </div>

      <div className="grid gap-4 w-full max-w-md">
        <Link href="/create-account">
          <Button variant="secondary" className="w-full">
            <Paragraph size="btnText" className="text-white font-black font-satoshi">Create Account</Paragraph>
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="secondary" className="w-full">
            <Paragraph size="btnText" className="text-white font-black font-satoshi">Login</Paragraph>
          </Button>
        </Link>
        <Link href="/dashboard/providers">
          <Button variant="secondary" className="w-full">
            <Paragraph size="btnText" className="text-white font-black font-satoshi">Dashboard</Paragraph>
          </Button>
        </Link>
        <Link href="/reset-password">
          <Button variant="secondary" className="w-full">
            <Paragraph size="btnText" className="text-white font-black font-satoshi">Reset Password</Paragraph>
          </Button>
        </Link>
        <Link href="/verify-login">
          <Button variant="secondary" className="w-full">
            <Paragraph size="btnText" className="text-white font-black font-satoshi">Verify Login</Paragraph>
          </Button>
        </Link>
      </div>
    </div>
  );
}
