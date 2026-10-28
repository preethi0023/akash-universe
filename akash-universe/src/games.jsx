import { useState, useMemo } from 'react';
import { loveQuiz, knowUs, heartGame, riddle } from './content.js';
import { HeartIcon } from './App.jsx';

function Quiz({ data }) {
  const qs = data.questions;
  const [i, setI] = useState(0);
  const [picks, setPicks] = useState([]);
  const [done, setDone] = useState(false);
  const score = picks.filter((p, k) => p === qs[k].answer).length;
  const band = score === qs.length ? 2 : score >= qs.length / 2 ? 1 : 0;
  const reset = () => { setI(0); setPicks([]); setDone(false); };
  if (done) return (
    <main className="screen center">
      <h2 className="title">{score} / {qs.length}</h2>
      <p className="lead" role="status">{data.results[band]}</p>
      <button className="btn" onClick={reset}>PLAY AGAIN</button>
    </main>
  );
  const q = qs[i];
  return (
    <main className="screen">
      <h2 className="title">{data.title}</h2>
      <div className="bar" role="progressbar" aria-valuemin={1} aria-valuemax={qs.length} aria-valuenow={i + 1}><i style={{ width: ((i + 1) / qs.length) * 100 + '%' }} /></div>
      <p className="muted">Question {i + 1} of {qs.length}</p>
      <h3 className="q">{q.q}</h3>
      <div className="opts">
        {q.options.map((o, k) => (
          <button key={k} className={'opt' + (picks[i] === k ? ' sel' : '')} aria-pressed={picks[i] === k}
            onClick={() => { const n = [...picks]; n[i] = k; setPicks(n); }}>{o}</button>
        ))}
      </div>
      <div className="row">
        <button className="btn ghost" disabled={i === 0} onClick={() => setI(i - 1)}>PREVIOUS</button>
        {i < qs.length - 1
          ? <button className="btn" disabled={picks[i] === undefined} onClick={() => setI(i + 1)}>NEXT</button>
          : <button className="btn" disabled={picks[i] === undefined} onClick={() => setDone(true)}>SEE RESULT</button>}
      </div>
    </main>
  );
}
export const LoveQuiz = () => <Quiz data={loveQuiz} />;
export const KnowUs = () => <Quiz data={knowUs} />;

export function HeartGame() {
  const n = heartGame.hearts;
  const pick = () => Math.floor(Math.random() * n);
  const [secret, setSecret] = useState(pick);
  const [found, setFound] = useState(false);
  const [tries, setTries] = useState([]);
  const [msg, setMsg] = useState('Choose a heart.');
  const choose = (k) => {
    if (found || tries.includes(k)) return;
    if (k === secret) { setFound(true); setMsg(heartGame.secret); return; }
    setTries([...tries, k]);
    setMsg(heartGame.wrong[tries.length % heartGame.wrong.length]);
  };
  const reset = () => { setSecret(pick()); setFound(false); setTries([]); setMsg('Choose a heart.'); };
  return (
    <main className="screen center">
      <h2 className="title">Find the Golden Heart</h2>
      <div className="hearts">
        {Array.from({ length: n }, (_, k) => (
          <button key={k} className={'hbtn' + (tries.includes(k) ? ' dim' : '') + (found && k === secret ? ' win' : '')}
            aria-label={`Heart ${k + 1}`} onClick={() => choose(k)}><HeartIcon size={64} /></button>
        ))}
      </div>
      <p className="lead" role="status">{msg}</p>
      <button className="btn ghost" onClick={reset}>PLAY AGAIN</button>
    </main>
  );
}

export function RiddleGame() {
  const [val, setVal] = useState('');
  const [state, setState] = useState('idle');
  const norm = (s) => s.trim().toLowerCase().replace(/\s+/g, ' ');
  const check = (e) => {
    e.preventDefault();
    setState(riddle.answers.some((a) => norm(a) === norm(val)) && norm(val) ? 'ok' : 'bad');
  };
  if (state === 'ok') return (
    <main className="screen center">
      <div className="paper reveal">
        {riddle.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <p className="sign">{riddle.sign}</p>
        <button className="btn ghost" onClick={() => { setState('idle'); setVal(''); }}>LOCK AGAIN</button>
      </div>
    </main>
  );
  return (
    <main className="screen center">
      <h2 className="title">Unlock the Love Letter</h2>
      <p className="lead">{riddle.question}</p>
      <form onSubmit={check} className="riddle">
        <label htmlFor="ans" className="muted">Your answer</label>
        <input id="ans" value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" />
        <button className="btn" type="submit">UNLOCK</button>
      </form>
      {state === 'bad' && <p role="alert" className="muted">That is not the answer yet. {riddle.hint}</p>}
    </main>
  );
}
