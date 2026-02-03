import { useState } from 'react';

interface ResumeDownloadProps {
  onDownload: () => void;
  isDownloading: boolean;
}

const ResumeDownload = ({ onDownload, isDownloading }: ResumeDownloadProps) => {
  return (
    <button 
      onClick={onDownload}
      disabled={isDownloading}
      className="w-full sm:w-fit bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-[1.03] transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/30 disabled:opacity-50"
    >
      <span className="material-symbols-outlined">download</span> 
      {isDownloading ? 'Downloading...' : 'Download Full Resume (PDF)'}
    </button>
  );
};

export default ResumeDownload;