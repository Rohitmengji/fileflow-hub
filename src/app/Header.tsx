import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className='border-b py-4 bg-gray-50'>
      <div className='items-center container mx-auto justify-between flex'>
        <div className='font-bold'>FileFlow Hub</div>
        <div className='flex gap-2'>
          <OrganizationSwitcher />
          <UserButton />
          <SignedOut>
            <SignInButton mode='modal'>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Header;
