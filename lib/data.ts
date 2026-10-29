export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  status: 'published' | 'upcoming';
  publishedYear?: string;
  isbn?: string;
  publisher?: string;
  pages?: number;
  format?: string;
  genres?: string[];
  purchaseLinks?: {
    platform: string;
    url: string;
  }[];
  synopsis?: string;
  keyThemes?: string[];
  praise?: {
    quote: string;
    author: string;
    title: string;
  }[];
  tableOfContents?: string[];
  coverAccent: string;
  coverSymbol: 'labyrinth' | 'summit' | 'monolith' | 'seal';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  category: 'Articles';
  content: string[];
}

export interface PhilosophyPost {
  id: string;
  slug: string;
  title: string;
  shortThought: string;
  publishedDate: string;
  corePrinciple: string;
  extendedReflection?: string[];
}

// Alias for backward compatibility across modules
export type PhilosophyThought = PhilosophyPost;

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface AskSubmission {
  id: string;
  name: string;
  email: string;
  question: string;
  createdAt: string;
  status: 'pending_review' | 'answered' | 'archived';
  adminNotes?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
}

export const PUBLISHED_BOOKS: Book[] = [
  {
    id: 'book-1',
    slug: 'shadows-of-reason',
    title: 'Shadows of Reason',
    subtitle: 'The Architecture of Human Judgement and Existential Clarity',
    status: 'published',
    publishedYear: '2024',
    isbn: '978-0-14-313589-2',
    publisher: 'Aegis Literary Press',
    pages: 342,
    format: 'Hardcover & Premium Collector’s Foil Edition',
    genres: ['Philosophy', 'Epistemology', 'Human Agency'],
    purchaseLinks: [
      { platform: 'Amazon Worldwide', url: 'https://amazon.com' },
      { platform: 'Barnes & Noble', url: 'https://barnesandnoble.com' },
      { platform: 'Bookshop.org (Independent Stores)', url: 'https://bookshop.org' },
    ],
    synopsis:
      'Shadows of Reason examines the fractures within modern rationalism. Drawing from classical stoicism, continental epistemology, and contemporary psychological observation, Anant Chaudhary deconstructs how human beings formulate certainty in an inherently ambiguous world. The treatise investigates the discipline of conscious perception, the burden of moral sovereignty, and how individuals can construct immutable clarity amidst external noise.',
    keyThemes: [
      'The Mirage of Absolute Certainty',
      'The Burden of Intellectual Autonomy',
      'Discipline as the Anchor of Freedom',
      'The Dignity of Measured Action',
    ],
    praise: [
      {
        quote: 'A formidable philosophical inquiry that re-anchors moral clarity in an era of relentless distraction.',
        author: 'Dr. Evelyn Vance',
        title: 'Professor Emeritus of Moral Philosophy',
      },
      {
        quote: 'Chaudhary writes with the razor precision of a logician and the soul of an existentialist. Essential reading.',
        author: 'Julian Mercer',
        title: 'Senior Literary Critic, Continental Review',
      },
    ],
    tableOfContents: [
      'I. The Premise of Rational Selfhood',
      'II. The Anatomy of Modern Noise',
      'III. Sovereign Deliberation and Will',
      'IV. The Architecture of Silence',
      'V. The Resolution of Inevitability',
    ],
    coverAccent: '#B5121B',
    coverSymbol: 'labyrinth',
  },
  {
    id: 'book-2',
    slug: 'the-quiet-summit',
    title: 'The Quiet Summit',
    subtitle: 'On Discipline, Will, and the Solitude of Achievement',
    status: 'published',
    publishedYear: '2023',
    isbn: '978-0-06-298371-8',
    publisher: 'Crown & Iron Publications',
    pages: 288,
    format: 'Hardcover Cloth Bound & Digital',
    genres: ['Philosophy of Action', 'Personal Conduct', 'Ethics'],
    purchaseLinks: [
      { platform: 'Amazon Worldwide', url: 'https://amazon.com' },
      { platform: 'Barnes & Noble', url: 'https://barnesandnoble.com' },
      { platform: 'Waterstones UK', url: 'https://waterstones.com' },
    ],
    synopsis:
      'In The Quiet Summit, Anant Chaudhary offers a meditation on the inner discipline required to endure solitary effort. Moving beyond vulgar notions of hustle and external acclaim, this work articulates the quiet mastery of temperament, the virtue of deliberate restraint, and the unyielding relationship between rigorous inner contemplation and lasting creative achievement.',
    keyThemes: [
      'The Discipline of Solitary Contemplation',
      'Temperament as Destiny',
      'The Illusion of Premature Recognition',
      'The Construction of Inner Fortitude',
    ],
    praise: [
      {
        quote: 'An antidote to superficial modern ambition. Chaudhary’s prose leaves an indelible resonance on the intellect.',
        author: 'Marcus Croft',
        title: 'Author of The Stoic Crucible',
      },
    ],
    tableOfContents: [
      'I. The Anatomy of Restraint',
      'II. The Solitude of First Principles',
      'III. Enduring the Barren Plateau',
      'IV. The Quiet Summit',
    ],
    coverAccent: '#B08D57',
    coverSymbol: 'summit',
  },
];

export const UPCOMING_BOOKS: Book[] = [
  {
    id: 'book-3',
    slug: 'aporia',
    title: 'Aporia',
    status: 'upcoming',
    coverAccent: '#DC2626',
    coverSymbol: 'monolith',
  },
  {
    id: 'book-4',
    slug: 'the-sovereign-mind',
    title: 'The Sovereign Mind',
    status: 'upcoming',
    coverAccent: '#C0C0C0',
    coverSymbol: 'seal',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'the-discipline-of-measured-silence',
    title: 'The Discipline of Measured Silence',
    excerpt:
      'In an age that rewards instant opinion and perpetual broadcast, the intentional refusal to speak prematurely is the highest form of intellectual dignity.',
    publishedDate: 'October 14, 2026',
    readTime: '6 min read',
    category: 'Articles',
    content: [
      'Modern digital life operates upon a fundamental premise: that immediacy equals relevance. We are conditioned to treat every emergent circumstance not as an object of contemplation, but as an immediate summons to reaction.',
      'Yet history’s most formidable intellects operated upon the antithetical principle. Silence was not an absence of thought, but its prerequisite sanctuary. When we speak before we have digested the parameters of an event, we surrender our agency to impulse.',
      'The discipline of measured silence requires enduring the discomfort of not being seen. It demands that we hold our assessments until they have been rigorously interrogated against first principles. Silence preserves energy, prevents the calcification of erroneous dogma, and restores gravity to our eventual words.',
      'To practice silence in an era of compulsive noise is not passive retreat; it is an active reclamation of the sovereign mind.',
    ],
  },
  {
    id: 'art-2',
    slug: 'on-the-architecture-of-uncompromised-focus',
    title: 'On the Architecture of Uncompromised Focus',
    excerpt:
      'Deep work is not merely a tactical productivity tool; it is a moral posture that protects the intellect from fragmentation.',
    publishedDate: 'September 28, 2026',
    readTime: '8 min read',
    category: 'Articles',
    content: [
      'The modern workforce has conflated rapid response latency with professional competence. This error has exacted a catastrophic toll on original thought and meaningful creation.',
      'When attention is shattered into dozen-minute fragments, consciousness adapts to the surface. It can no longer dive into the dense, resistant depths where profound problems are resolved.',
      'Constructing an environment of uncompromised focus requires ruthless architectural boundaries: scheduling protracted blocks of absolute isolation, eradicating secondary notifications, and respecting the sacred latency of deep rumination.',
      'The works that outlive their generations are never forged in frantic multitasking. They are chiseled in the uninterrupted silence of deliberate focus.',
    ],
  },
  {
    id: 'art-3',
    slug: 'the-fallacy-of-effortless-mastery',
    title: 'The Fallacy of Effortless Mastery',
    excerpt:
      'Why contemporary culture glamorizes intuitive genius at the expense of grueling, repetitive structural discipline.',
    publishedDate: 'August 19, 2026',
    readTime: '7 min read',
    category: 'Articles',
    content: [
      'There is a persistent cultural myth that extraordinary mastery arrives through spontaneous epiphany. We idolize the Mozartian archetype: the effortless prodigy who sits down and transcribes celestial symphonies without friction.',
      'This romantic narrative conceals the grueling, unglamorous reality of craftsmanship. Mastery is the accumulation of thousands of hours spent wrestling with friction, correcting minute deviations, and cultivating tolerance for cognitive fatigue.',
      'When we celebrate effortless genius, we poison the apprentice’s resolve. The moment difficulty arises, they assume a deficiency of natural talent, rather than recognizing that friction is the literal furnace in which true capability is tempered.',
      'Enduring the repetitive plateau without surrender is the singular trait that separates the dilettante from the master.',
    ],
  },
];

export const PHILOSOPHY_POSTS: PhilosophyPost[] = [
  {
    id: 'phil-1',
    slug: 'temperament-over-circumstance',
    title: 'On Temperament Over Circumstance',
    shortThought:
      'Circumstance dictates only the terrain of the battle; it is your internal temperament that dictates the outcome. The sovereign individual never negotiates their composure with the volatility of the external world.',
    publishedDate: 'October 2026',
    corePrinciple: 'Inner Sovereignty & Emotional Equanimity',
    extendedReflection: [
      'The world is inherently chaotic, unpredictable, and indifferent to human desires. Those who tether their equanimity to favorable external conditions will forever remain hostages of circumstance.',
      'To build a philosophical core means constructing an internal fortress. When storms arise, the untrained mind blames the wind; the disciplined mind trims the sails and anchors the rudder.',
      'Meaningful outcomes in life are rarely born of smooth seas. They are the direct consequence of maintaining unyielding composure when external certainty dissolves.',
    ],
  },
  {
    id: 'phil-2',
    slug: 'the-necessity-of-rigorous-self-examination',
    title: 'The Necessity of Rigorous Self-Examination',
    shortThought:
      'We often demand honesty from the world while practicing diplomatic deceit upon ourselves. True philosophical growth begins when you cross-examine your own cherished rationalizations with cold, unyielding scrutiny.',
    publishedDate: 'September 2026',
    corePrinciple: 'Epistemic Honesty & Intellectual Integrity',
    extendedReflection: [
      'The human mind is an engine of self-justification. We readily invent elegant intellectual narratives to defend habits born of fear, indolence, or wounded pride.',
      'Philosophy is not an academic parlor game of abstract definitions; it is a mirror held against one’s own motives. If you cannot dismantle your own excuses, you cannot hope to understand truth in others.',
      'Daily self-examination is not masochism; it is the fundamental hygiene of a conscious intellect.',
    ],
  },
  {
    id: 'phil-3',
    slug: 'achievement-as-an-incidental-byproduct-of-conduct',
    title: 'Achievement as an Incidental Byproduct of Conduct',
    shortThought:
      'When achievement is pursued as an end in itself, it breeds anxiety and deceit. When it is treated as the incidental byproduct of impeccable personal standards, it arrives with effortless inevitability.',
    publishedDate: 'August 2026',
    corePrinciple: 'Teleology & The Morality of Action',
    extendedReflection: [
      'Obsession with outcomes corrupts the purity of execution. When an author writes solely to be applauded, their prose turns sentimental. When a leader acts solely for prestige, their decisions become cowardly.',
      'The ancient masters understood that our domain of control begins and ends with our deliberate action. Perfect the standard of the deed, and the outcome will take care of itself.',
    ],
  },
  {
    id: 'phil-4',
    slug: 'the-dignity-of-unseen-preparation',
    title: 'The Dignity of Unseen Preparation',
    shortThought:
      'The foundation of every enduring edifice lies buried in the earth, invisible to the spectator. Honor the subterranean work; the visible superstructure will withstand the tempest only if the unseen masonry is flawless.',
    publishedDate: 'July 2026',
    corePrinciple: 'Foundational Rigor & Patience',
    extendedReflection: [
      'Modern spectacle demands that everything be broadcast in real-time. Yet all true depth requires incubation in darkness.',
      'The ideas that reshape minds are not drafted in the spotlight. They are wrestled with across years of solitary reading, discarded drafts, and silent contemplation.',
      'Never begrudge the season of unseen preparation. It is the only season where authentic strength is forged.',
    ],
  },
];

export const PHILOSOPHY_THOUGHTS = PHILOSOPHY_POSTS;

export const INITIAL_SUBSCRIBERS: Subscriber[] = [
  { id: 'sub-1', email: 'patron.philosophy@literaryreview.org', subscribedAt: '2026-10-15T09:30:00Z' },
  { id: 'sub-2', email: 'scholar.croft@oxfordhumanities.edu', subscribedAt: '2026-10-22T14:15:00Z' },
];

export const INITIAL_CONTACT_MESSAGES: ContactSubmission[] = [
  {
    id: 'msg-1',
    name: 'Eleanor Sterling',
    email: 'e.sterling@oxfordliterarytrust.org',
    message: 'Dear Mr. Chaudhary, our committee would be honored to invite you for the 2027 Keynote Lecture on Epistemic Clarity in London.',
    createdAt: '2026-10-24T11:20:00Z',
    read: false,
  },
];

export const INITIAL_ASK_QUESTIONS: AskSubmission[] = [
  {
    id: 'ask-1',
    name: 'Julian Mercer',
    email: 'j.mercer@continentalpress.com',
    question: 'In chapter 3 of Shadows of Reason, you distinguish between deliberate solitude and nihilistic isolation. How does an aspiring thinker maintain the former without slipping into the latter?',
    createdAt: '2026-10-26T16:45:00Z',
    status: 'pending_review',
  },
  {
    id: 'ask-2',
    name: 'Siddharth Rao',
    email: 'siddharth@delhiforum.org',
    question: 'How do you structure your daily writing and contemplation routine to prevent digital distractions from eroding deep philosophical focus?',
    createdAt: '2026-10-27T10:15:00Z',
    status: 'pending_review',
  },
];
