import { ImageResponse } from 'next/og';

// Next.js config for the image generator
export const runtime = 'edge';
export const alt = 'Vaulltcore | Sovereign Digital Infrastructure';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#050B14', // Deep terminal space
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* --- Background Radar Rings --- */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            border: '2px solid rgba(245, 158, 11, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              border: '2px dashed rgba(245, 158, 11, 0.2)',
            }}
          />
        </div>

        {/* --- Subliminal Gold Glow --- */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(5,11,20,0) 70%)',
          }}
        />

        {/* --- The Content Matrix --- */}
        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
          
          {/* Status Indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '100px',
              marginBottom: '40px',
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b', marginRight: '12px' }} />
            <span style={{ color: '#f59e0b', fontSize: '24px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              System Status: Optimal
            </span>
          </div>

          {/* Main Brand Hook */}
          <h1
            style={{
              fontSize: '110px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1,
              letterSpacing: '-0.05em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '20px',
            }}
          >
            VAULLTCORE
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '42px',
              fontWeight: 600,
              color: '#94a3b8',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '60px',
            }}
          >
            Sovereign DFY Infrastructure
          </p>

          {/* Proof Strip */}
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', color: '#f8fafc', fontSize: '28px', fontWeight: 'bold' }}>
              <span style={{ color: '#10b981', marginRight: '12px' }}>✓</span> 100% Ownership
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#f8fafc', fontSize: '28px', fontWeight: 'bold' }}>
              <span style={{ color: '#10b981', marginRight: '12px' }}>✓</span> Sub-50ms Global Edge
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: '#f8fafc', fontSize: '28px', fontWeight: 'bold' }}>
              <span style={{ color: '#10b981', marginRight: '12px' }}>✓</span> Zero SaaS Lock-in
            </div>
          </div>

        </div>

        {/* Footer Origin Stamp */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '80px',
            fontSize: '20px',
            color: '#64748b',
            letterSpacing: '0.1em',
            fontFamily: 'monospace',
            textTransform: 'uppercase',
          }}
        >
          // DIRECTIVE: HARARE, ZIMBABWE — GLOBAL UPLINK ESTABLISHED
        </div>

      </div>
    ),
    {
      ...size,
    }
  );
}
