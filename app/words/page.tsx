'use client';

import Link from 'next/link';

const categories = {
  'Günlük Hayat': {
    description: 'Günlük konuşmalarda sıkça kullanılan kelimeler',
    words: [
      { id: 1, english: 'Serendipity', turkish: 'Hoş bir tesadüf' },
      { id: 2, english: 'Ephemeral', turkish: 'Geçici, kısa ömürlü' },
      { id: 3, english: 'Ubiquitous', turkish: 'Her yerde bulunan' }
    ]
  },
  'İş Dünyası': {
    description: 'İş hayatında kullanılan profesyonel kelimeler',
    words: [
      { id: 4, english: 'Leverage', turkish: 'Kaldıraç, avantaj sağlamak' },
      { id: 5, english: 'Synergy', turkish: 'Sinerji, işbirliği' },
      { id: 6, english: 'Paradigm', turkish: 'Örnek, model' }
    ]
  },
  'Akademik': {
    description: 'Akademik metinlerde karşılaşılan kelimeler',
    words: [
      { id: 7, english: 'Hypothesis', turkish: 'Hipotez, varsayım' },
      { id: 8, english: 'Methodology', turkish: 'Metodoloji, yöntembilim' },
      { id: 9, english: 'Empirical', turkish: 'Deneysel, ampirik' }
    ]
  }
};

export default function WordsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
            Kelime Listesi
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Kategorilere göre düzenlenmiş kelimeler
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {Object.entries(categories).map(([category, data]) => (
            <div 
              key={category}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category}
                    </h2>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {data.description}
                    </p>
                  </div>
                  <Link
                    href={`/quiz?category=${encodeURIComponent(category)}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Quiz'e Başla
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.words.map((word) => (
                    <Link
                      key={word.id}
                      href={`/words/${word.id}`}
                      className="group block p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {word.english}
                          </h3>
                          <p className="mt-1 text-gray-600 dark:text-gray-300">
                            {word.turkish}
                          </p>
                        </div>
                        <svg 
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transform group-hover:translate-x-1 transition-all" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 