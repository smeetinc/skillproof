"use client";

import { useState, ChangeEvent, FormEvent, DragEvent } from "react";
import { Upload, X, Plus, Calendar, Link2 } from "lucide-react";
import { useRef } from "react";

interface FormData {
  projectName: string;
  walletAddress: string;
  projectDescription: string;
  completionDate: string;
  projectValue: string;
  projectLink: string;
}

interface UploadedFile {
  id: number;
  name: string;
  size: number;
  type: string;
  file: File;
}

export default function RequestWorkVerification() {
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    walletAddress: "",
    projectDescription: "",
    completionDate: "",
    projectValue: "",
    projectLink: "",
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "UI Design",
    "Figma",
    "JavaScript",
  ]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragOver, setDragOver] = useState<boolean>(false);

  const availableSkills: string[] = [
    "UI Design",
    "Figma",
    "JavaScript",
    "React",
    "Node.js",
    "HTML/CSS",
    "TypeScript",
    "Python",
    "Adobe XD",
    "Sketch",
    "Vue.js",
    "Angular",
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSkillToggle = (skill: string): void => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleFileUpload = (files: FileList | null): void => {
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setDragOver(false);
  };

  const removeFile = (fileId: number): void => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      skills: selectedSkills,
      files: uploadedFiles,
    });
    // Handle form submission logic here
  };

  return (
    <div className="bg-[#F1F1F1] pt-16 ">
      {/* Main Content */}
      <div className="w-4/5 mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 text-center mb-8">
            Request Work Verification
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-between items-center">
              {/* Project Name */}
              <div className="w-2/5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  placeholder="E-commerce website"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Wallet Address */}
              <div className="w-2/5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  placeholder="0x0..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
                placeholder="Describe the work completed..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Completion Date and Project Value */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Completion Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="completionDate"
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Value (ETH)
                </label>
                <input
                  type="number"
                  name="projectValue"
                  value={formData.projectValue}
                  onChange={handleInputChange}
                  placeholder="0.0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* On-chain Contributions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                On-chain Contributions
              </label>
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleSkillToggle(skill)}
                      className="ml-1 text-purple-600 hover:text-purple-800"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <div className="relative">
                <select
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    if (
                      e.target.value &&
                      !selectedSkills.includes(e.target.value)
                    ) {
                      handleSkillToggle(e.target.value);
                    }
                    e.target.value = "";
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">+ Add Skill</option>
                  {availableSkills
                    .filter((skill) => !selectedSkills.includes(skill))
                    .map((skill) => (
                      <option key={skill} value={skill}>
                        {skill}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* File Upload */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach Work Sample
                </label>
                <div
                  className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer transition-colors ${
                    dragOver
                      ? "border-blue-400 bg-blue-50"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() =>
                    document.getElementById("file-upload")?.click()
                  }
                >
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-500">
                    Drag and drop files here, or click to browse work
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Max file size: 50mb (PNG, JPG, ZIP)
                  </p>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".png,.jpg,.jpeg,.zip"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleFileUpload(e.target.files)
                  }
                  className="hidden"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Link
                </label>
                <div className="relative">
                  <input
                    type="url"
                    name="projectLink"
                    value={formData.projectLink}
                    onChange={handleInputChange}
                    placeholder="https://github.com/yourproject"
                    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Link2 className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Paste a link to your completed work here
                </p>
              </div>
            </div>

            {/* Uploaded Files Display */}
            {uploadedFiles.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Uploaded Files
                </label>
                <div className="space-y-2">
                  {uploadedFiles.map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <Upload className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formatFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="w-full text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Submit for Verification
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
