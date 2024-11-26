import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { X } from 'lucide-react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl: string;
  title: string;
}

export function TrailerModal({
  isOpen,
  onClose,
  trailerUrl,
  title,
}: TrailerModalProps) {
  const videoId = trailerUrl.split('v=')[1];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-black shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/70 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="aspect-video">
                    <LiteYouTubeEmbed
                      id={videoId}
                      title={title}
                      poster="maxresdefault"
                      webp
                    />
                  </div>

                  <div className="p-6">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-white mb-2"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-white/70">
                        Watch the official trailer
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}