import { ImageResponse } from 'next/og'

export const alt = 'Shubh Radia - Product Manager in India building enterprise products'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(160deg, #f8f4ec 0%, #f5f1e8 40%, #f0e8dd 100%)',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
         }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#de5b38' }} />
          <div style={{ fontSize: 26, letterSpacing: 6, color: '#1a1d21', fontWeight: 700 }}>
            SHUBH RADIA
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 24, letterSpacing: 4, color: '#de5b38', marginBottom: 20 }}>
            PRODUCT MANAGER / BUILDER
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.15, color: '#1a1d21', fontWeight: 700 }}>
            Connecting the dots between
          </div>
          <div style={{ fontSize: 66, lineHeight: 1.15, color: '#b64728', fontStyle: 'italic' }}>
            complexity and clarity.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 48, fontSize: 24, color: '#4a4f55' }}>
          <div style={{ display: 'flex' }}>Enterprise SaaS</div>
          <div style={{ display: 'flex' }}>0 to 1 products</div>
          <div style={{ display: 'flex' }}>India</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
