import React from 'react';
import { X } from 'lucide-react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  title: string;
}

export default function TrailerModal({
  isOpen,
  onClose,
  trailerUrl,
  title,
}: TrailerModalProps) {
  if (!isOpen) return null;

  const videoId = trailerUrl.split('v=')[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-4xl bg-black/90 rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/80 hover:text-white bg-black/50 p-2 rounded-full"
        >
          <X size={20} />
        </button>
        <div className="aspect-video">
          <LiteYouTubeEmbed
            id={videoId}
            title={title}
            poster="maxresdefault"
          />
        </div>
      </div>
    </div>
  );
}