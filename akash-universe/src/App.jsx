import { useState, useMemo } from 'react';
import { timeline, memories, envelopes, storyLetter, finale } from './content.js';
import { LoveQuiz, KnowUs, HeartGame, RiddleGame } from './games.jsx';

export const HeartIcon = ({ size = 96 }) => (
  <svg className="heart" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <path d="M32 52C12 37 12 18 23 15c6-1 9 3 9 6 0-3 3-7 9-6 11 3 11 22-9 37z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
  </svg>
);

const Paras = ({ list, sign }) => (
  <div className="letter">
    {list.map((p, i) => <p key={i}>{p}</p>)}
    {sign && <p className="sign">{sign}</p>}
  </div>
);

function Particles() {
  const dots = useMemo(() => Array.from({ length: 22 }, (_, i) => ({
    left: Math.random() * 100, size: 2 + Math.random() * 3, dur: 14 + Math.random() * 16,
    delay: -Math.random() * 20, heart: i % 7 === 0,
  })), []);
  return (
    <div className="particles" aria-hidden="true">
      {dots.map((d, i) => d.heart
        ? <span key={i} className="p-heart" style={{ left: d.left + '%', animationDuration: d.dur + 's', animationDelay: d.delay + 's' }}><HeartIcon size={22} /></span>
        : <span key={i} className="p" style={{ left: d.left + '%', width: d.size, height: d.size, animationDuration: d.dur + 's', animationDelay: d.delay + 's' }} />)}
    </div>
  );
}

function Welcome({ go }) {
  return (
    <main className="screen center welcome">
      <div className="glow"><HeartIcon size={120} /></div>
      <h1 className="display">AN UNIVERSE MADE FOR YOU</h1>
      <p className="lead">FOR AKASH, WITH LOVE</p>
      <p className="muted">Created by Preethi</p>
      <button className="btn" onClick={() => go('menu')}>ENTER YOUR WORLD</button>
    </main>
  );
}

function Menu({ go }) {
  return (
    <main className="screen center">
      <div className="cards">
        <button className="card" onClick={() => go('story')}>
          <h2>OUR STORY</h2><p>Every moment has a meaning.</p>
        </button>
        <button className="card" onClick={() => go('games')}>
          <h2>ENTER THE GAME ROOM</h2><p>A little challenge, a little love.</p>
        </button>
      </div>
    </main>
  );
}

function Story({ go }) {
  const [flipped, setFlipped] = useState({});
  const [opened, setOpened] = useState({});
  const [letter, setLetter] = useState(false);
  return (
    <main className="screen">
      <h2 className="title">Our Story</h2>
      <ol className="timeline">
        {timeline.map((t, i) => (
          <li key={i}><span className="when">{t.when}</span><h3>{t.title}</h3><p>{t.text}</p></li>
        ))}
      </ol>
      <h3 className="sub">Memories</h3>
      <div className="grid">
        {memories.map((m, i) => (
          <button key={i} className={'mem' + (flipped[i] ? ' on' : '')} aria-pressed={!!flipped[i]}
            onClick={() => setFlipped({ ...flipped, [i]: !flipped[i] })}>
            {flipped[i] ? m.back : m.front}
          </button>
        ))}
      </div>
      <h3 className="sub">Hidden envelopes</h3>
      <div className="grid">
        {envelopes.map((e, i) => (
          <button key={i} className={'env' + (opened[i] ? ' on' : '')} aria-expanded={!!opened[i]}
            onClick={() => setOpened({ ...opened, [i]: true })}>
            {opened[i] ? e : 'Tap to open'}
          </button>
        ))}
      </div>
      <div className="center-row">
        {!letter
          ? <button className="btn" onClick={() => setLetter(true)}>OPEN MY LETTER</button>
          : <div className="paper"><Paras list={storyLetter.paragraphs} sign={storyLetter.sign} />
              <button className="btn" onClick={() => go('final')}>CONTINUE</button></div>}
      </div>
    </main>
  );
}

function Games({ go }) {
  const items = [['quiz', 'The Love Quiz', 'Five questions about us.'], ['know', 'How Well Do You Know Us?', 'Fun questions, one score.'],
    ['heart', 'Find the Golden Heart', 'One of them is hiding something.'], ['riddle', 'Unlock the Love Letter', 'Solve the riddle to open it.']];
  return (
    <main className="screen">
      <h2 className="title">Game Room</h2>
      <div className="cards">
        {items.map(([k, t, s]) => <button key={k} className="card" onClick={() => go(k)}><h2>{t}</h2><p>{s}</p></button>)}
      </div>
      <div className="center-row"><button className="btn ghost" onClick={() => go('final')}>A FINAL SURPRISE</button></div>
    </main>
  );
}

function Final() {
  const [open, setOpen] = useState(false);
  const [hug, setHug] = useState(false);
  return (
    <main className="screen center">
      <div className={'envelope' + (open ? ' open' : '')}>
        {!open && <button className="btn" onClick={() => setOpen(true)}>OPEN THE ENVELOPE</button>}
      </div>
      {open && (
        <div className="paper reveal">
          <div className="glow"><HeartIcon size={72} /></div>
          <Paras list={finale.paragraphs} />
          <p className="sign pre">{finale.sign}</p>
          {!hug
            ? <button className="btn" onClick={() => setHug(true)}>ONE LAST HUG</button>
            : <><div className="burst" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i} style={{ '--a': i * 30 + 'deg' }}><HeartIcon size={18} /></span>)}</div>
                <p className="lead" role="status">{finale.hugMessage}</p></>}
        </div>
      )}
    </main>
  );
}

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const go = (s) => { setScreen(s); window.scrollTo(0, 0); };
  const back = { menu: 'welcome', story: 'menu', games: 'menu', final: 'menu', quiz: 'games', know: 'games', heart: 'games', riddle: 'games' }[screen];
  const view = { welcome: <Welcome go={go} />, menu: <Menu go={go} />, story: <Story go={go} />, games: <Games go={go} />,
    final: <Final />, quiz: <LoveQuiz />, know: <KnowUs />, heart: <HeartGame />, riddle: <RiddleGame /> }[screen];
  return (
    <>
      <Particles />
      {screen !== 'welcome' && (
        <nav className="nav">
          <button className="link" onClick={() => go(back)} aria-label="Back">← Back</button>
          {screen !== 'menu' && <button className="link" onClick={() => go('menu')}>Home</button>}
        </nav>
      )}
      <div key={screen} className="fade">{view}</div>
    </>
  );
}
