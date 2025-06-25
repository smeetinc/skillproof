import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function VerifyWork() {
  const router = useRouter();
  return (
    <section className="py-16 bg-white" id="verify-work">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Verify Work as a Client
          </h2>
          <p className="text-gray-600 mb-6">
            Are you a client who needs to verify a freelancer’s work? Connect
            your wallet to access pending verification requests.
          </p>
          <button
            className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition cursor-pointer"
            onClick={() => router.push("/client-verification")}
          >
            Connect as Client →
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/person1.svg"
            alt="Client Verification Illustration"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
