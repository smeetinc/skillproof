import Image from "next/image";
import React from "react";

export default function SkillNFT() {
  return (
    <div className="bg-[#F1F1F1] py-6 px-4" id="my-nfts">
      <div className="flex justify-between items-center my-4">
        <h4>My Skill NFT</h4>
        <div className="flex items-center gap-4">
          <input
            type="search"
            className="rounded"
            placeholder="search NFT..."
          />
          <button className="px-4 py-3 font-semibold text-sm">
            All Skills
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div className="w-full bg-white py-3 px-1 ">
          <div className="w-full">
            <Image
              src="/skill1.png"
              alt="nft skills 1"
              width={484}
              height={363}
              className="object-contain w-full"
            />
          </div>
          <div className="pl-4 pr-8 pt-4 pb-8 mb-4">
            <div className="flex justify-between items-center">
              <h5 className="font-bold">Crypto Wallet Integration</h5>
              <button className="w-fit rounded py-1 px-6 bg-[#78F9C6] font-bold text-[#286442F7]">
                Verified
              </button>
            </div>
            <div>
              <p>
                Integrated multi-chain wallet functionality into client’s
                existing platform with enhanced security.
              </p>
            </div>
            <div className="my-4 flex  items-center gap-4">
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Web3.js
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Solidity
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Filecoin
              </button>
            </div>
            <div className="flex justify-between">
              <div className="max-w-2xs">
                <p>
                  Client: <strong>Blockchain Solutions</strong>
                </p>
              </div>
              <p>
                Value: <strong>3.2 ETH</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-3 px-1 ">
          <div className="w-full">
            <Image
              src="/skill2.png"
              alt="nft skills 1"
              width={484}
              height={363}
              className="object-contain w-full"
            />
          </div>
          <div className="pl-4 pr-8 pt-4 pb-8 mb-4">
            <div className="flex justify-between items-center">
              <h5 className="font-bold">Food Blog</h5>
              <button className="w-fit rounded py-1 px-6 bg-[#78F9C6] font-bold text-[#286442F7]">
                Verified
              </button>
            </div>
            <div>
              <p>
                Food mastery on the blockchain. You can build a responsive
                website.
              </p>
            </div>
            <div className="my-4 flex  items-center gap-4">
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Web3.js
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Solidity
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Filecoin
              </button>
            </div>
            <div className="flex justify-between">
              <div className="max-w-2xs">
                <p>
                  Client: <strong>Tasty Hand Solutions</strong>
                </p>
              </div>
              <p>
                Value: <strong>5.0 ETH</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-3 px-1 ">
          <div className="w-full">
            <Image
              src="/skill1.png"
              alt="nft skills 1"
              width={484}
              height={363}
              className="object-contain w-full"
            />
          </div>
          <div className="pl-4 pr-8 pt-4 pb-8 mb-4">
            <div className="flex justify-between items-center">
              <h5 className="font-bold">Crypto Wallet Integration</h5>
              <button className="w-fit rounded py-1 px-6 bg-[#78F9C6] font-bold text-[#286442F7]">
                Verified
              </button>
            </div>
            <div>
              <p>
                Integrated multi-chain wallet functionality into client’s
                existing platform with enhanced security.
              </p>
            </div>
            <div className="my-4 flex  items-center gap-4">
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Web3.js
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Solidity
              </button>
              <button className="bg-[#6C51D93D] w-fit px-4 py-3 rounded text-[#8E35EA] text-sm">
                Filecoin
              </button>
            </div>
            <div className="flex justify-between">
              <div className="max-w-2xs">
                <p>
                  Client: <strong>Blockchain Solutions</strong>
                </p>
              </div>
              <p>
                Value: <strong>3.2 ETH</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center my-6">
        <button className="text-[#171F4280] border border-[#171F4280] rounded-lg px-4 py-4 cursor-pointer">
          Load More NFTs
        </button>
      </div>
    </div>
  );
}
