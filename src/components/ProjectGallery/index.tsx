import React, { useEffect, useState } from 'react';
import './ProjectGallery.css';

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    image: string;
}

const BASE = import.meta.env.BASE_URL;
const p = (file: string) => `${BASE}assets/projects/${file}`;

const projects: Project[] = [
    // ── Exterior ──────────────────────────────────────────────────────────────
    { id:  1, title: 'Luxury Residence',            category: 'Exterior',   year: '2024', image: p('project-1.jpg')  },
    { id:  2, title: 'Modern Villa',                category: 'Exterior',   year: '2023', image: p('project-2.jpg')  },
    { id:  3, title: 'Contemporary Home',           category: 'Exterior',   year: '2023', image: p('ext-04.jpg')     },
    { id:  4, title: 'Corporate Complex',           category: 'Exterior',   year: '2023', image: p('project-3.jpg')  },
    { id:  5, title: 'Design Avenue HQ',            category: 'Exterior',   year: '2024', image: p('ext-05.jpg')     },

    // ── Living Room ───────────────────────────────────────────────────────────
    { id:  6, title: 'Drawing Room',                category: 'Living Room', year: '2025', image: p('project-4.jpg')  },
    { id:  7, title: 'Luxury Living Lounge',        category: 'Living Room', year: '2025', image: p('wa-02.jpg')      },
    { id:  8, title: 'Living Room with Staircase',  category: 'Living Room', year: '2025', image: p('wa-10.jpg')      },
    { id:  9, title: 'Living Area & Lift Lobby',    category: 'Living Room', year: '2025', image: p('wa-03.jpg')      },
    { id: 10, title: 'Sitting Room',                category: 'Living Room', year: '2025', image: p('wa-04.jpg')      },
    { id: 11, title: 'Living Room with Fireplace',  category: 'Living Room', year: '2025', image: p('wa-09.jpg')      },
    { id: 12, title: 'Aquarium Feature Wall',       category: 'Living Room', year: '2025', image: p('wa-13.jpg')      },
    { id: 13, title: 'Marble TV Wall Lounge',       category: 'Living Room', year: '2025', image: p('am-liv-01.jpg')  },
    { id: 14, title: 'Botanical Mural Living Room', category: 'Living Room', year: '2025', image: p('am-liv-02.jpg')  },
    { id: 15, title: 'Classic Living Room',         category: 'Living Room', year: '2025', image: p('am-liv-03.jpg')  },

    // ── Bedroom ───────────────────────────────────────────────────────────────
    { id: 16, title: 'Master Bedroom — Blue Arch',  category: 'Bedroom',    year: '2024', image: p('project-5.jpg')  },
    { id: 17, title: 'Bedroom Suite — Beige',       category: 'Bedroom',    year: '2024', image: p('project-6.jpg')  },
    { id: 18, title: 'Blue Headboard Bedroom',      category: 'Bedroom',    year: '2024', image: p('azhar-1b.jpg')   },
    { id: 19, title: 'Bedroom — Wardrobe View',     category: 'Bedroom',    year: '2024', image: p('azhar-1c.jpg')   },
    { id: 20, title: 'Bedroom — Full View',         category: 'Bedroom',    year: '2024', image: p('azhar-1d.jpg')   },
    { id: 21, title: 'Beige Suite — Side View',     category: 'Bedroom',    year: '2024', image: p('azhar-2b.jpg')   },
    { id: 22, title: 'Beige Suite — Wide View',     category: 'Bedroom',    year: '2024', image: p('azhar-2c.jpg')   },
    { id: 23, title: 'Beige Suite — Detail',        category: 'Bedroom',    year: '2024', image: p('azhar-2d.jpg')   },
    { id: 24, title: 'Classic Bedroom',             category: 'Bedroom',    year: '2025', image: p('wa-01.jpg')      },
    { id: 25, title: 'Blue Arch Bedroom',           category: 'Bedroom',    year: '2025', image: p('wa-06.jpg')      },
    { id: 26, title: 'Zen Bamboo Bedroom',          category: 'Bedroom',    year: '2025', image: p('wa-08.jpg')      },
    { id: 27, title: 'Contemporary Bedroom',        category: 'Bedroom',    year: '2025', image: p('wa-14.jpg')      },
    { id: 28, title: 'Master Bedroom — Wood',       category: 'Bedroom',    year: '2025', image: p('am-bed-01.jpg')  },
    { id: 29, title: 'Bedroom — Natural Light',     category: 'Bedroom',    year: '2025', image: p('am-bed-02.jpg')  },
    { id: 30, title: 'Bedroom — TV Panel',          category: 'Bedroom',    year: '2025', image: p('am-bed-03.jpg')  },
    { id: 31, title: 'Bedroom — Floral Mural',      category: 'Bedroom',    year: '2025', image: p('am-bed-04.jpg')  },
    { id: 32, title: 'Master Suite — Dressing',     category: 'Bedroom',    year: '2025', image: p('am-bed-05.jpg')  },
    { id: 33, title: "Kids Room — Blush",           category: 'Bedroom',    year: '2025', image: p('am-bed-06.jpg')  },
    { id: 34, title: "Kids Room — Warm Tones",      category: 'Bedroom',    year: '2025', image: p('am-bed-07.jpg')  },
    { id: 35, title: "Kids Room — Cloud Headboard", category: 'Bedroom',    year: '2025', image: p('am-bed-08.jpg')  },
    { id: 36, title: "Kids Room — Pink Palette",    category: 'Bedroom',    year: '2025', image: p('am-bed-09.jpg')  },

    // ── Dining ────────────────────────────────────────────────────────────────
    { id: 37, title: 'Dining Room — Teal Accent',   category: 'Dining',     year: '2025', image: p('am-din-01.jpg')  },
    { id: 38, title: 'Dining Room — Green Wall',    category: 'Dining',     year: '2025', image: p('am-din-02.jpg')  },
    { id: 39, title: 'Dining — Botanical View',     category: 'Dining',     year: '2025', image: p('am-din-03.jpg')  },

    // ── Kitchen ───────────────────────────────────────────────────────────────
    { id: 40, title: 'Modern Kitchen',              category: 'Kitchen',    year: '2025', image: p('wa-11.jpg')      },
    { id: 41, title: 'Kitchen with Island',         category: 'Kitchen',    year: '2025', image: p('am-kit-01.jpg')  },

    // ── Commercial ────────────────────────────────────────────────────────────
    { id: 42, title: 'Jewellery Store — Play Area', category: 'Commercial', year: '2025', image: p('com-01.jpg')     },
    { id: 43, title: 'Jewellery Store — Counters',  category: 'Commercial', year: '2025', image: p('com-02.jpg')     },
    { id: 44, title: 'Jewellery Store — Main Hall', category: 'Commercial', year: '2025', image: p('com-03.jpg')     },
    { id: 45, title: 'Jewellery Store — Display',   category: 'Commercial', year: '2025', image: p('com-04.jpg')     },

    // ── Signature Details ─────────────────────────────────────────────────────
    { id: 46, title: 'Curved Staircase',            category: 'Detail',     year: '2025', image: p('wa-12.jpg')      },
];

const CATEGORIES = ['All', 'Exterior', 'Living Room', 'Bedroom', 'Dining', 'Kitchen', 'Commercial', 'Detail'];

const ProjectGallery: React.FC = () => {
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    const closeLightbox = () => setLightbox(null);
    const prev = () => setLightbox(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
    const next = () => setLightbox(i => (i !== null ? (i + 1) % filtered.length : null));

    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [lightbox, filtered.length]);

    return (
        <div className="project-gallery-wrapper">
            {/* Filters */}
            <div className="gallery-filters">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${active === cat ? 'active' : ''}`}
                        onClick={() => setActive(cat)}
                    >
                        {cat}
                        <span className="filter-count">
                            {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                        </span>
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="project-gallery grid grid-3">
                {filtered.map((project, idx) => (
                    <div key={project.id} className="project-card glass-card" onClick={() => setLightbox(idx)}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-image-hover">
                                <span className="zoom-icon">⤢</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <span className="project-category">{project.category}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-year">{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>✕</button>
                    <button className="lightbox-nav lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img
                            src={filtered[lightbox].image}
                            alt={filtered[lightbox].title}
                            className="lightbox-img"
                        />
                        <div className="lightbox-caption">
                            <span className="project-category">{filtered[lightbox].category}</span>
                            <h3>{filtered[lightbox].title}</h3>
                            <p>{filtered[lightbox].year} · {lightbox + 1} / {filtered.length}</p>
                        </div>
                    </div>
                    <button className="lightbox-nav lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>›</button>
                </div>
            )}
        </div>
    );
};

export default ProjectGallery;
