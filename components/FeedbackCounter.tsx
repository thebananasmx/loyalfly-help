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
    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-900 mb-4">¿Te resultó útil este artículo?</h3>
      {voted ? (
        <p className="text-green-600 font-medium">¡Gracias por tu feedback!</p>
      ) : (
        <div className="flex gap-4">
          <button
            onClick={() => handleVote(true)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            👍 Sí, fue útil
          </button>
          <button
            onClick={() => handleVote(false)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition"
          >
            👎 No mucho
          </button>
        </div>
      )}
    </div>
  );
}
