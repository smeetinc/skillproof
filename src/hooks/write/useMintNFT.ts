import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { toast } from 'react-hot-toast'
import SKILLPROOF from "@/constants/abis/SkillProof.json"
import { SKILLPROOF_CONTRACT } from '@/constants/addresses/Skillproof-contract'
import { useRouter } from 'next/navigation'

export function useMintNFT() {
  const router = useRouter()
  const { writeContract, data: hash } = useWriteContract()
  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash })

  const mintNFT = async (
    freelancerAddress: string,
    projectName: string,
    description: string,
    completionDate: number,
    metadataURI: string,
    signature: string
  ) => {
    try {
      const mintToast = toast.loading('Minting NFT...')

      await writeContract({
        address: SKILLPROOF_CONTRACT,
        abi: SKILLPROOF,
        functionName: 'mintSkillNFT',
        args: [
          freelancerAddress,
          projectName,
          description,
          completionDate,
          metadataURI,
          signature
        ]
      })

      toast.dismiss(mintToast)
      
      if (isSuccess) {
        toast.success('NFT minted successfully!')
        // Store minting details in localStorage
        const mintingDetails = {
          tokenId: hash, // Using transaction hash as temporary token ID
          walletAddress: freelancerAddress,
          ipfsUri: metadataURI,
          transactionHash: hash,
          mintedAt: new Date().toLocaleDateString(),
          network: 'Ethereum',
          projectName: projectName
        }
        localStorage.setItem('mintingDetails', JSON.stringify(mintingDetails))
        
        // Redirect to success page
        router.push('/mint_success')
        return true
      }

      return false
    } catch (error) {
      console.error('Error minting NFT:', error)
      toast.error('Failed to mint NFT')
      return false
    }
  }

  return {
    mintNFT,
    isMinting: isLoading,
    mintingSuccess: isSuccess,
    transactionHash: hash
  }
}