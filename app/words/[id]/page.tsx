'use client';

import Link from 'next/link';
import { useState } from 'react';

// Örnek kelime verileri
const words: Record<string, {
  english: string;
  turkish: string;
  pronunciation: string;
  examples: string[];
  category: string;
}> = {
  '1': {
    english: 'Serendipity',
    turkish: 'Hoş bir tesadüf, beklenmedik güzel bir keşif',
    pronunciation: '[ser-uhn-dip-i-tee]',
    examples: [
      'Finding this book was pure serendipity.',
      'It was serendipity that we met at the conference.'
    ],
    category: 'Günlük Hayat'
  },
  '2': {
    english: 'Ephemeral',
    turkish: 'Geçici, kısa ömürlü',
    pronunciation: '[ih-fem-er-uhl]',
    examples: [
      'Social media fame is often ephemeral.',
      'The beauty of cherry blossoms is ephemeral.'
    ],
    category: 'Günlük Hayat'
  }
};

export default function WordDetailPage({ params }: { params: { id: string } }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const word = words[params.id];

  const speakWord = () => {
    try {
      if (!('speechSynthesis' in window)) {
        throw new Error('Tarayıcınız seslendirme özelliğini desteklemiyor.');
      }

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(word.english);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.volume = 1;
      utterance.pitch = 1;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setError(null);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
      };

      utterance.onerror = (event) => {
        console.error('Seslendirme hatası:', event);
        setIsSpeaking(false);
        setError('Seslendirme sırasında bir hata oluştu.');
      };

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Seslendirme hatası:', err);
      setError(err instanceof Error ? err.message : 'Beklenmeyen bir hata oluştu.');
      setIsSpeaking(false);
    }
  };

  if (!word) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Kelime Bulunamadı</h1>
          <Link 
            href="/words" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg 
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kelime listesine dön
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          href="/words" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 group"
        >
          <svg 
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kelime listesine dön
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
                {word.english}
              </h1>
              <button
                onClick={speakWord}
                disabled={isSpeaking}
                className={`p-3 rounded-full ${
                  isSpeaking 
                    ? 'bg-gray-100 dark:bg-gray-700 text-gray-400' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                } transition-all duration-200`}
                title="Kelimeyi Seslendir"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                  />
                </svg>
              </button>
            </div>
            {error && (
              <p className="text-red-500 dark:text-red-400 mt-2 text-sm">{error}</p>
            )}
            <p className="text-gray-600 dark:text-gray-300 font-medium">{word.pronunciation}</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Türkçe Anlamı</h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg">{word.turkish}</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Örnek Cümleler</h2>
              <ul className="space-y-4">
                {word.examples.map((example, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-200 text-lg">
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{index + 1}.</span> {example}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Kategori</h2>
              <p className="text-gray-700 dark:text-gray-200 text-lg">{word.category}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 