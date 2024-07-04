import { ImageResponse } from 'next/og'

// Image metedata
export const size = {
  width: 32,
  height: 32
}

export const contentType = '/public/favicon.ico'

// Image generation

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 23,
          background: '#A91717',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}
      >
        J
      </div>
    ),
    {
      ...size
    }
  )
}
