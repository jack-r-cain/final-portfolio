export const projects = [
  {
    id: 1,
    title: 'Freight AP Workflow',
    description:
      'Production-grade accounts-payable automation for freight invoicing. Claude vision extracts data from invoices, BOLs, and PODs; a LangGraph supervisor-worker pipeline assembles shipments by load number and runs full reconciliation — amount variance, carrier match, pickup date, delivery confirmation — with human-in-the-loop review on exceptions.',
    tags: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Claude API',
      'React',
      'PostgreSQL',
      'Redis',
    ],
    githubLink: 'https://github.com/jackcaindev/ap-workflow',
  },
  {
    id: 2,
    title: 'The Bourdain Brief',
    description:
      'Agentic travel research tool that builds authentic, non-touristy single-city itineraries. A LangGraph supervisor fans work out across research agents, scores candidates against a Bourdain-style rubric with corrective retrieval grading, and hands off to a human-in-the-loop selection step before deterministically assembling the final day-by-day plan.',
    tags: [
      'Python',
      'FastAPI',
      'LangGraph',
      'Claude API',
      'pgvector',
      'React',
      'TypeScript',
    ],
    githubLink: 'https://github.com/jackcaindev/bourdain',
  },
  {
    id: 3,
    title: 'Spin',
    description:
      'Mobile music rating/discover social platform. Find it in the apple app store.',
    tags: [
      'React Native',
      'Supabase',
      'StyleSheet API',
      'PostgreSQL',
      'Supabase Edge Functions',
      'Apple Music API',
    ],
    // No link, no demo -> update
  },
]
