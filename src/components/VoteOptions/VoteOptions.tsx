import css from './VoteOptions.module.css';
import type { Votes } from '../../types/votes';

interface VoteOptionsProps {
  onVotes: (key: keyof Votes) => void;
  onReset: () => void;
  canReset: boolean;
}

export default function VoteOptions({
  onVotes,
  onReset,
  canReset,
}: VoteOptionsProps) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={() => onVotes('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onVotes('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onVotes('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
