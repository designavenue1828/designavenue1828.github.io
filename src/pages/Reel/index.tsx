import React, { useRef, useState, useEffect } from 'react';
import './Reel.css';

const BASE = import.meta.env.BASE_URL;
const r = (file: string) => `${BASE}assets/reels/${file}`;
const p = (file: string) => `${BASE}assets/projects/${file}`;

interface ReelItem {
    id: number;
    title: string;
    description: string;
    src: string;
    poster: string;
    featured?: boolean;
}

const reels: ReelItem[] = [
    {
        id: 1,
        title: 'Interior Design Reel',
        description: 'Luxury interiors — a curated showcase',
        src: r('reel-01.mp4'),
        poster: p('nd-liv-01.jpg'),
        featured: true,
    },
    {
        id: 2,
        title: 'Modern Villa — Walkthrough I',
        description: 'Exterior & entrance tour',
        src: r('reel-02.mp4'),
        poster: p('cp-ext-01.jpg'),
    },
    {
        id: 3,
        title: 'Modern Villa — Walkthrough II',
        description: 'Ground floor interiors',
        src: r('reel-03.mp4'),
        poster: p('cp-rec-02.jpg'),
    },
    {
        id: 4,
        title: 'Modern Villa — Walkthrough III',
        description: 'Living spaces & details',
        src: r('reel-04.mp4'),
        poster: p('cp-liv-02.jpg'),
    },
    {
        id: 5,
        title: 'Modern Villa — Walkthrough IV',
        description: 'Upper floors & terrace',
        src: r('reel-05.mp4'),
        poster: p('cp-stair-01.jpg'),
    },
    {
        id: 6,
        title: 'Modern Villa — Walkthrough V',
        description: 'Foyer & corridor',
        src: r('reel-06.mp4'),
        poster: p('cp-cor-01.jpg'),
    },
    {
        id: 7,
        title: 'Modern Villa — Full Tour',
        description: 'Complete project walkthrough',
        src: r('reel-07.mp4'),
        poster: p('cp-foy-01.jpg'),
        featured: true,
    },
];

const ReelPage: React.FC = () => {
    const [active, setActive] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const openReel = (id: number) => {
        setActive(id);
    };

    const closeReel = () => {
        videoRef.current?.pause();
        setActive(null);
    };

    useEffect(() => {
        if (active === null) return;
        videoRef.current?.play().catch(() => {});
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeReel(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [active]);

    const activeReel = reels.find(r => r.id === active) ?? null;

    return (
        <div className="reel-page">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title">Reels</h1>
                    <p className="page-description">
                        Video walkthroughs and design showcases of our completed projects.
                    </p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="reels-grid">
                        {reels.map(reel => (
                            <div
                                key={reel.id}
                                className={`reel-card glass-card ${reel.featured ? 'reel-card-featured' : ''}`}
                                onClick={() => openReel(reel.id)}
                            >
                                <div className="reel-thumb">
                                    <img src={reel.poster} alt={reel.title} loading="lazy" />
                                    <div className="reel-play-overlay">
                                        <span className="reel-play-btn">▶</span>
                                    </div>
                                </div>
                                <div className="reel-info">
                                    <h3 className="reel-title">{reel.title}</h3>
                                    <p className="reel-desc">{reel.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video lightbox */}
            {activeReel && (
                <div className="reel-lightbox" onClick={closeReel}>
                    <button className="lightbox-close" onClick={closeReel}>✕</button>
                    <div className="reel-lightbox-inner" onClick={e => e.stopPropagation()}>
                        <video
                            ref={videoRef}
                            key={activeReel.src}
                            src={activeReel.src}
                            poster={activeReel.poster}
                            controls
                            playsInline
                            className="reel-lightbox-video"
                        />
                        <div className="reel-lightbox-caption">
                            <h3>{activeReel.title}</h3>
                            <p>{activeReel.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReelPage;
