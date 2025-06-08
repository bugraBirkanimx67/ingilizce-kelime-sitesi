'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada geri bildirim gönderme işlemi yapılabilir
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
            Hakkında
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            İngilizce kelime öğrenme platformu hakkında bilgiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Amacımız
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              İngilizce kelime öğrenmeyi daha eğlenceli ve etkili hale getirmek için tasarlanmış bir platformuz. 
              Kategorize edilmiş kelimeler, interaktif quizler ve sesli telaffuz özellikleri ile dil öğrenme sürecinizi 
              kolaylaştırmayı hedefliyoruz.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Nasıl Kullanılır?
            </h2>
            <ul className="space-y-4 text-gray-700 dark:text-gray-200">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Kelime listesinden istediğiniz kategoriyi seçin</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Kelimeleri detaylı inceleyin ve telaffuzlarını dinleyin</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Quiz bölümünde bilgilerinizi test edin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Geri Bildirim
          </h2>
          {submitted ? (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 dark:text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl text-gray-700 dark:text-gray-200">
                Geri bildiriminiz için teşekkür ederiz!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Yeni geri bildirim gönder
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Görüşleriniz
                </label>
                <textarea
                  id="feedback"
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Platform hakkında görüşlerinizi paylaşın..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Gönder
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
} 