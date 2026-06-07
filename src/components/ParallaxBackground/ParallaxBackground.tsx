import React from 'react'
import styles from './ParallaxBackground.module.css'

export const ParallaxBackground: React.FC = () => {
  return (
    <div className={styles.background}>
      {/* Sky */}
      <div className={styles.sky}></div>

      {/* Sun */}
      <div className={styles.sun}></div>

      {/* Clouds - slowest */}
      <svg className={styles.clouds} viewBox="0 0 1000 400" preserveAspectRatio="none">
        <defs>
          <radialGradient id="cloudGradient" cx="50%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </radialGradient>
        </defs>
        <ellipse cx="150" cy="80" rx="80" ry="40" fill="url(#cloudGradient)" />
        <ellipse cx="200" cy="85" rx="70" ry="35" fill="url(#cloudGradient)" />
        <ellipse cx="800" cy="120" rx="90" ry="45" fill="url(#cloudGradient)" />
        <ellipse cx="880" cy="125" rx="75" ry="38" fill="url(#cloudGradient)" />
      </svg>

      {/* Far Mountains */}
      <svg className={styles.mountains1} viewBox="0 0 1000 400" preserveAspectRatio="none">
        <polygon
          points="0,300 150,150 300,300 400,180 550,300 700,160 850,300 1000,200 1000,400 0,400"
          fill="#8B7D7D"
          opacity="0.4"
        />
        <polygon
          points="0,320 180,180 360,320 540,200 720,320 900,220 1000,300 1000,400 0,400"
          fill="#A09A9A"
          opacity="0.3"
        />
      </svg>

      {/* Mid Mountains */}
      <svg className={styles.mountains2} viewBox="0 0 1000 400" preserveAspectRatio="none">
        <polygon
          points="0,280 100,180 200,280 350,150 500,280 650,170 800,280 1000,200 1000,400 0,400"
          fill="#9B8E8E"
          opacity="0.6"
        />
      </svg>

      {/* Forest - fastest parallax */}
      <svg className={styles.forest} viewBox="0 0 1000 400" preserveAspectRatio="none">
        {/* Trees */}
        <g>
          <polygon points="50,320 30,200 70,320" fill="#2D5016" />
          <polygon points="45,320 45,240 65,320" fill="#367C2B" />

          <polygon points="150,340 120,180 180,340" fill="#2D5016" />
          <polygon points="145,340 145,240 175,340" fill="#367C2B" />

          <polygon points="300,330 270,200 330,330" fill="#2D5016" />
          <polygon points="295,330 295,260 325,330" fill="#367C2B" />

          <polygon points="500,340 460,150 540,340" fill="#2D5016" />
          <polygon points="495,340 495,240 535,340" fill="#367C2B" />

          <polygon points="700,330 660,190 740,330" fill="#2D5016" />
          <polygon points="695,330 695,250 735,330" fill="#367C2B" />

          <polygon points="900,340 860,180 940,340" fill="#2D5016" />
          <polygon points="895,340 895,250 935,340" fill="#367C2B" />
        </g>

        {/* Grass */}
        <rect x="0" y="340" width="1000" height="60" fill="#5CB376" opacity="0.7" />
        <path
          d="M0,340 Q10,335 20,340 T40,340 T60,340 T80,340 T100,340 T120,340 T140,340 T160,340 T180,340 T200,340 T220,340 T240,340 T260,340 T280,340 T300,340 T320,340 T340,340 T360,340 T380,340 T400,340 T420,340 T440,340 T460,340 T480,340 T500,340 T520,340 T540,340 T560,340 T580,340 T600,340 T620,340 T640,340 T660,340 T680,340 T700,340 T720,340 T740,340 T760,340 T780,340 T800,340 T820,340 T840,340 T860,340 T880,340 T900,340 T920,340 T940,340 T960,340 T980,340 T1000,340 L1000,360 L0,360 Z"
          fill="#6CBF7F"
          opacity="0.5"
        />
      </svg>

      {/* Decorative elements */}
      <svg className={styles.decorative} viewBox="0 0 1000 400" preserveAspectRatio="none">
        {/* Small flowers */}
        <g opacity="0.4">
          <circle cx="120" cy="330" r="3" fill="#FFB6C1" />
          <circle cx="122" cy="325" r="2" fill="#FFB6C1" />
          <circle cx="118" cy="325" r="2" fill="#FFB6C1" />

          <circle cx="450" cy="340" r="3" fill="#87CEEB" />
          <circle cx="452" cy="335" r="2" fill="#87CEEB" />
          <circle cx="448" cy="335" r="2" fill="#87CEEB" />

          <circle cx="800" cy="335" r="3" fill="#FFD700" />
          <circle cx="802" cy="330" r="2" fill="#FFD700" />
          <circle cx="798" cy="330" r="2" fill="#FFD700" />
        </g>

        {/* Butterflies */}
        <g opacity="0.3">
          <ellipse cx="200" cy="200" rx="3" ry="5" fill="#FF69B4" />
          <ellipse cx="210" cy="210" rx="3" ry="5" fill="#FF69B4" />

          <ellipse cx="700" cy="250" rx="3" ry="5" fill="#FFD700" />
          <ellipse cx="710" cy="260" rx="3" ry="5" fill="#FFD700" />
        </g>
      </svg>
    </div>
  )
}
