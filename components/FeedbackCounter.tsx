'use client';

import { useState } from 'react';
// import { doc, updateDoc, increment } from 'firebase/firestore';
// import { db } from '@/lib/firebase';

export default function FeedbackCounter({ articleId }: { articleId: string }) {
  const [voted, setVoted] = useState(false);

  const handleVote = async (isHelpful: boolean) => {
    if (voted) return;

    // En un entorno real con Firebase:
    /*
    try {
      const docRef = doc(db, 'help_articles', articleId);
      await updateDoc(docRef, {
        [isHelpful ? 'helpfulCount' : 'notHelpfulCount']: increment(1)
      });
      setVoted(true);
    } catch (error) {
      console.error("Error updating feedback:", error);
    }
    */

    // Mock behavior
    console.log(`Voted ${isHelpful ? 'Yes' : 'No'} for article ${articleId}`);
    setVoted(true);
  };

  return (
    <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
      <h3 className="text-xl font-bold text-text-main mb-6">¿Te resultó útil este artículo?</h3>
      {voted ? (
        <div className="px-6 py-3 bg-green-50 text-green-700 font-semibold rounded-xl border border-green-100">
          ¡Gracias por tu feedback! Nos ayuda a mejorar.
        </div>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => handleVote(true)}
            className="px-6 py-3 bg-white text-text-main font-semibold border border-gray-200 rounded-xl hover:border-primary hover:text-primary hover:bg-primary-bg transition-all duration-200 shadow-sm flex items-center gap-2"
          >
            <span>👍</span> Sí, fue útil
          </button>
          <button
            onClick={() => handleVote(false)}
            className="px-6 py-3 bg-white text-text-main font-semibold border border-gray-200 rounded-xl hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 shadow-sm flex items-center gap-2"
          >
            <span>👎</span> No mucho
          </button>
        </div>
      )}
    </div>
  );
}
