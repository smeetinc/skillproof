"use client";
import { Wallet } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
export default function Header() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
    // Placeholder for wallet connection logic
    setIsWalletConnected(!isWalletConnected);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="skillproof logo"
              width={40}
              height={35}
              className="object-contain"
            />
            <span className="text-xl font-bold text-gray-900">SkillProof</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#my-nfts"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              My NFTs
            </a>
            <a
              href="#verify-work"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Verify Work
            </a>
            <a
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </a>
          </nav>

          {/* Connect Wallet Button */}
          <button
            onClick={handleConnectWallet}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Wallet className="w-4 h-4" />
            <span>
              {isWalletConnected ? "Wallet Connected" : "Connect Wallet"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
