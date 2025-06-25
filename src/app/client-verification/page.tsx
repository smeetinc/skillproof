"use client";

import { useState, useEffect } from "react";
import {
  Download,
  Shield,
  User,
  Calendar,
  Clock,
  FileText,
  AlertTriangle,
  Check,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface SubmittedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  downloadUrl: string;
}

interface ProjectVerificationData {
  id: string;
  projectName: string;
  freelancerName: string;
  freelancerWallet: string;
  completedDate: string;
  submittedDate: string;
  status: "pending" | "approved" | "rejected";
  projectDescription: string;
  technologies: string[];
  submittedFiles: SubmittedFile[];
  projectValue: string;
  projectLink?: string;
}

export default function ClientWorkVerification() {
  const router = useRouter();
  const [verificationData, setVerificationData] =
    useState<ProjectVerificationData | null>(null);
  const [comment, setComment] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Mock API call to fetch verification data
  useEffect(() => {
    const fetchVerificationData = async () => {
      // Simulate API call
      setTimeout(() => {
        const mockData: ProjectVerificationData = {
          id: "verification-123",
          projectName: "E-commerce website",
          freelancerName: "JubiDuke",
          freelancerWallet: "0x45d3.........Z3d",
          completedDate: "May 10, 25",
          submittedDate: "May 10, 25",
          status: "pending",
          projectDescription:
            "Redesigned the entire e-commerce platform with modern UI/UX principles. Implemented responsive design, and optimized for mobile devices. Added new product filtering system and improved checkout flow. The product included comprehensive user research, wireframing, prototyping, and final implementation with React and Tailwind CSS.",
          technologies: [
            "React",
            "TypeScript",
            "UI/UX Design",
            "Responsive Design",
          ],
          submittedFiles: [
            {
              id: "file-1",
              name: "Final-design.zip",
              size: 5242880, // 5.2MB
              type: "application/zip",
              downloadUrl: "/api/files/download/final-design.zip",
            },
            {
              id: "file-2",
              name: "Final-design.zip",
              size: 5242880,
              type: "application/zip",
              downloadUrl: "/api/files/download/final-design-2.zip",
            },
            {
              id: "file-3",
              name: "Final-design.zip",
              size: 5242880,
              type: "application/zip",
              downloadUrl: "/api/files/download/final-design-3.zip",
            },
          ],
          projectValue: "2.5",
          projectLink: "https://github.com/jubiduke/ecommerce-project",
        };
        setVerificationData(mockData);
        setIsLoading(false);
      }, 1000);
    };

    fetchVerificationData();
  }, []);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const handleFileDownload = (file: SubmittedFile): void => {
    // Simulate file download
    console.log("Downloading file:", file.name);
    // In real implementation, you would trigger actual file download
    const link = document.createElement("a");
    link.href = file.downloadUrl;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApprove = async (): Promise<void> => {
    if (!verificationData) return;

    setIsProcessing(true);
    try {
      // Simulate API call to approve and mint NFT
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to success page
      router.push("/mint_success");
    } catch (error) {
      console.error("Error approving verification:", error);
      setIsProcessing(false);
    }
  };

  const handleReject = async (): Promise<void> => {
    if (!verificationData) return;

    setIsProcessing(true);
    try {
      // Simulate API call to reject verification
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Handle rejection logic (could show confirmation or redirect)
      alert("Verification rejected successfully");
      setIsProcessing(false);
    } catch (error) {
      console.error("Error rejecting verification:", error);
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading verification details...</p>
        </div>
      </div>
    );
  }

  if (!verificationData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Verification data not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-8">
      <div className="w-full mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Work Verification
            </h1>
            <p className="text-gray-600">Review and sign completed work</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview */}
            <div className="bg-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {verificationData.projectName}
              </h2>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{verificationData.freelancerName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Completed {verificationData.completedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Submitted {verificationData.submittedDate}</span>
                  </div>
                </div>

                <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full">
                  Pending Verification
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">
                    Freelancer wallet address
                  </span>
                </div>
                <p className="text-gray-900 font-mono text-sm">
                  {verificationData.freelancerWallet}
                </p>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Project Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {verificationData.projectDescription}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="bg-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {verificationData.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Submitted Files */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Submitted Files
              </h3>
              <div className="space-y-3">
                {verificationData.submittedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleFileDownload(file)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Verification Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Verification Actions
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Add Comment (Optional)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Leave a comment for the freelancer"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleApprove}
                  disabled={isProcessing}
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                >
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Check className="w-4 h-4" />
                  )}
                  Approve
                </button>

                <button
                  onClick={handleReject}
                  disabled={isProcessing}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium transition-colors"
                >
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <X className="w-4 h-4" />
                  )}
                  Reject
                </button>
              </div>
            </div>

            {/* Before Signing Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Before Signing:
                  </h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Review all submitted files carefully precisely</li>
                    <li>• Signing is irreversible and will mint an NFT</li>
                    <li>• Review all submitted files carefully precisely</li>
                    <li>• The freelancer will receive payment proof</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Summary */}
            <div className="bg-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Project Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Files Submitted</span>
                  <span className="font-medium text-gray-900">
                    {verificationData.submittedFiles.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skills Used</span>
                  <span className="font-medium text-gray-900">
                    {verificationData.technologies.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Date</span>
                  <span className="font-medium text-gray-900">
                    10th May, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
