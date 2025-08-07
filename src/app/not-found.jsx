'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Heading, Paragraph } from '@/components/ui/typography';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 gap-[16px] sm:gap-[20px] md:gap-[24px] bg-[#F9F9F9]">
      <Heading level="cardmd" className="text-MindfulBrown90 font-urbanist font-[800]">
        Page Not Found
      </Heading>

      <Paragraph size="normal" className="text-[#4D4D4D] max-w-[400px]">
        The page you’re looking for doesn’t exist or has been moved. Please check the URL or return to the home page.
      </Paragraph>

      <Link href="/" passHref>
        <Button variant="secondary" className="px-[20px] py-[10px] rounded-[12px]">
          <Paragraph size="btnText" className="text-White font-black font-satoshi">
            Return Home
          </Paragraph>
        </Button>
      </Link>
    </div>
  );
}
