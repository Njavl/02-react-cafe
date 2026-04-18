import { useState } from 'react';

import css from './App.module.css';

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import { type Votes } from '../../types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(key: keyof Votes) {
    setVotes({
      ...votes,
      [key]: votes[key] + 1,
    });
  }

  function resetVote() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions
          onVotes={handleVote}
          onReset={resetVote}
          canReset={false}
        />
        <VoteStats votes={votes} totalVotes={0} positiveRate={0} />
      </div>
    </>
  );
}
