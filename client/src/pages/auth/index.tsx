import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
  } from "@clerk/clerk-react";
  
  export const Auth = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <SignedOut>
          <div className="space-x-4">
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>
  
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    );
  };
  