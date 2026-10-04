import React from 'react';

const diagrams = {
  neurowave: {
    label: 'NeuroWave climate recommendation system',
    metric: '92% recommendation accuracy',
    nodes: [
      ['LIVE INPUTS', 'Weather +', 'sensor data'],
      ['FUSION', 'Multimodal', 'features'],
      ['PREDICTION', 'Ensemble', 'recommendation'],
      ['OUTPUT', 'Climate-aware', 'radio guide'],
    ],
  },
  sustainai: {
    label: 'Sustain AI waste analysis system',
    metric: '30% fewer classification errors',
    nodes: [
      ['WASTE DATA', 'Photo +', 'environment'],
      ['VISION', 'Custom CNN', 'classification'],
      ['AGENT LAYER', 'LLM agents', 'REST workflow'],
      ['RESULT', 'Analysis +', 'dashboard'],
    ],
  },
  retraceai: {
    label: 'Retrace AI age-invariant face recognition system',
    metric: '12% better cross-age matching',
    nodes: [
      ['FACE INPUT', 'Face image', '+ age range'],
      ['AUGMENT', 'GAN-based', 'data variants'],
      ['FEATURES', 'Identity', 'representation'],
      ['MATCH', 'Cross-age', 'similarity'],
    ],
  },
  talkhub: {
    label: 'TalkHub real-time messaging system',
    metric: '100+ active users · under 50 ms',
    nodes: [
      ['CLIENTS', 'React', 'web apps'],
      ['REAL TIME', 'Node.js', 'WebSockets'],
      ['SESSION', 'Secure auth', 'connection flow'],
      ['SYNC', 'Firebase', 'message data'],
    ],
  },
  epanchayat: {
    label: 'ePanchayat 360 service request system',
    metric: '40% shorter resolution time',
    nodes: [
      ['CITIZEN', 'Service', 'request'],
      ['APPLICATION', 'Django', 'role access'],
      ['TASK FLOW', 'Automatic', 'assignment'],
      ['DATA + PORTAL', 'PostgreSQL', '+ SQLite'],
    ],
  },
};

export default function ProjectArchitectureDiagram({ projectId }) {
  const diagram = diagrams[projectId];
  if (!diagram) return null;

  const arrowId = `flow-arrow-${projectId}`;
  const nodeX = [8, 150, 292, 434];

  return (
    <svg
      className="my-4 block h-[132px] w-full rounded-lg border border-white/10 bg-[#0b0d12]/80"
      viewBox="0 0 558 154"
      role="img"
      aria-label={diagram.label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`flow-bg-${projectId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d4af37" stopOpacity=".08" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity=".06" />
        </linearGradient>
        <marker id={arrowId} markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
          <path d="M0 0L5 3L0 6" fill="none" stroke="#d4af37" strokeWidth="1" />
        </marker>
      </defs>

      <rect x="0.5" y="0.5" width="557" height="153" rx="10" fill={`url(#flow-bg-${projectId})`} />
      <text x="12" y="22" fill="#d4af37" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.6">SYSTEM FLOW</text>

      {nodeX.slice(0, 3).map((x, index) => (
        <line
          key={`flow-${index}`}
          x1={x + 119}
          y1="78"
          x2={x + 139}
          y2="78"
          stroke="#d4af37"
          strokeOpacity=".75"
          strokeWidth="1.2"
          markerEnd={`url(#${arrowId})`}
        />
      ))}

      {diagram.nodes.map(([label, lineOne, lineTwo], index) => {
        const x = nodeX[index];
        const accent = index === 1 ? '#06b6d4' : index === 2 ? '#10b981' : '#d4af37';

        return (
          <g key={label}>
            <rect x={x} y="43" width="116" height="70" rx="8" fill="#11131a" stroke={accent} strokeOpacity=".45" />
            <rect x={x + 1} y="44" width="2" height="68" rx="1" fill={accent} fillOpacity=".8" />
            <text x={x + 11} y="60" fill={accent} fontSize="7.5" fontFamily="ui-monospace, monospace" letterSpacing=".7">{label}</text>
            <text x={x + 11} y="81" fill="#f5f0eb" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">{lineOne}</text>
            <text x={x + 11} y="97" fill="#a9abb4" fontSize="10" fontFamily="system-ui, sans-serif">{lineTwo}</text>
          </g>
        );
      })}

      <circle cx="14" cy="137" r="2.5" fill="#10b981" />
      <text x="22" y="140" fill="#a9abb4" fontSize="9" fontFamily="ui-monospace, monospace">{diagram.metric}</text>
      <text x="545" y="140" textAnchor="end" fill="#676a73" fontSize="8" fontFamily="ui-monospace, monospace">ARCHITECTURE</text>
    </svg>
  );
}
