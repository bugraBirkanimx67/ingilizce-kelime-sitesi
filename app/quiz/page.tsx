'use client';

import { useState } from 'react';
import Link from 'next/link';

// Örnek quiz soruları
const questions = [
  {
    id: 1,
    question: 'What is the meaning of "Serendipity"?',
    options: [
      'Hoş bir tesadüf',
      'Geçici',
      'Her yerde bulunan',
      'Sinerji'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'What is the meaning of "Ephemeral"?',
    options: [
      'Hoş bir tesadüf',
      'Geçici',
      'Her yerde bulunan',
      'Sinerji'
    ],
    correctAnswer: 1
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-gradient-x mb-8">
              Quiz Tamamlandı!
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-200 mb-8">
              Skorunuz: {score} / {questions.length}
            </p>
            <div className="space-y-4">
              <button
                onClick={restartQuiz}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Tekrar Başla
              </button>
              <Link
                href="/words"
                className="block w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transform hover:scale-105 transition-all duration-300"
              >
                Kelime Listesine Dön
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Soru {currentQuestion + 1} / {questions.length}
              </h1>
              <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Skor: {score}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-gray-900 dark:text-white mb-6">
              {questions[currentQuestion].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                      : selectedAnswer === index
                      ? index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                      : index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 