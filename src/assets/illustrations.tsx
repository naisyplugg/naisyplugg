import React from 'react'

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 280"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 20px rgba(107, 63, 160, 0.3))' }}
  >
    {/* Body */}
    <ellipse cx="100" cy="140" rx="45" ry="55" fill="#C9B89B" />

    {/* Head */}
    <circle cx="100" cy="70" r="35" fill="#D4C5B9" />

    {/* Hair */}
    <path
      d="M 65 50 Q 60 25 100 20 Q 140 25 135 50"
      fill="#4A3728"
      stroke="#3D2E1F"
      strokeWidth="1"
    />

    {/* Eyes */}
    <circle cx="90" cy="65" r="4" fill="#3D2E1F" />
    <circle cx="110" cy="65" r="4" fill="#3D2E1F" />

    {/* Mouth */}
    <path d="M 95 80 Q 100 85 105 80" stroke="#8B6F47" strokeWidth="2" fill="none" />

    {/* Armor */}
    <rect x="70" y="115" width="60" height="40" rx="8" fill="#9D4EDD" stroke="#6B3FA0" strokeWidth="2" />
    <circle cx="85" cy="135" r="6" fill="#FFD700" />
    <circle cx="115" cy="135" r="6" fill="#FFD700" />

    {/* Cape */}
    <path
      d="M 120 120 Q 140 130 135 180 Q 132 190 128 185"
      fill="#D4A574"
      stroke="#B8915C"
      strokeWidth="1"
    />
    <path
      d="M 80 120 Q 60 130 65 180 Q 68 190 72 185"
      fill="#D4A574"
      stroke="#B8915C"
      strokeWidth="1"
    />

    {/* Sword */}
    <rect x="135" y="80" width="8" height="80" fill="#C0C0C0" stroke="#808080" strokeWidth="1" />
    <polygon points="143,75 150,80 143,85" fill="#FFD700" />
    <rect x="133" y="158" width="12" height="8" fill="#8B4513" stroke="#654321" strokeWidth="1" />

    {/* Shield */}
    <ellipse cx="55" cy="130" rx="18" ry="24" fill="#6B3FA0" stroke="#FFD700" strokeWidth="2" />
    <path d="M 55 110 L 60 120 L 55 130 L 50 120 Z" fill="#FFD700" />

    {/* Legs */}
    <rect x="85" y="170" width="12" height="40" fill="#4A3728" />
    <rect x="103" y="170" width="12" height="40" fill="#4A3728" />

    {/* Boots */}
    <ellipse cx="91" cy="215" rx="10" ry="8" fill="#2D1810" />
    <ellipse cx="109" cy="215" rx="10" ry="8" fill="#2D1810" />

    {/* Glow effect */}
    <circle cx="100" cy="140" r="55" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.3" />
  </svg>
)

export const ForestSlime: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 150 150"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 15px rgba(107, 63, 160, 0.2))' }}
  >
    {/* Main body */}
    <ellipse cx="75" cy="90" rx="50" ry="45" fill="#7CB342" opacity="0.9" />
    <ellipse cx="75" cy="85" rx="50" ry="40" fill="#9CCC65" opacity="0.7" />

    {/* Eyes */}
    <circle cx="60" cy="75" r="8" fill="#333" />
    <circle cx="90" cy="75" r="8" fill="#333" />
    <circle cx="62" cy="73" r="3" fill="#FFF" />
    <circle cx="92" cy="73" r="3" fill="#FFF" />

    {/* Smile */}
    <path d="M 65 90 Q 75 98 85 90" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Wobble effect circles */}
    <circle cx="50" cy="95" r="8" fill="#9CCC65" opacity="0.6" />
    <circle cx="100" cy="100" r="7" fill="#9CCC65" opacity="0.6" />
    <circle cx="65" cy="125" r="6" fill="#8BC34A" opacity="0.5" />
    <circle cx="85" cy="128" r="6" fill="#8BC34A" opacity="0.5" />
  </svg>
)

export const StoneGolem: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 150 180"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 15px rgba(107, 63, 160, 0.2))' }}
  >
    {/* Head */}
    <rect x="50" y="20" width="50" height="50" fill="#757575" stroke="#424242" strokeWidth="2" />

    {/* Eyes */}
    <rect x="62" y="35" width="10" height="10" fill="#FFF" />
    <rect x="78" y="35" width="10" height="10" fill="#FFF" />
    <rect x="64" y="37" width="6" height="6" fill="#333" />
    <rect x="80" y="37" width="6" height="6" fill="#333" />

    {/* Mouth */}
    <rect x="65" y="50" width="20" height="3" fill="#424242" />

    {/* Body */}
    <rect x="40" y="70" width="70" height="60" fill="#9E9E9E" stroke="#757575" strokeWidth="2" />

    {/* Chest plate */}
    <rect x="55" y="80" width="40" height="35" fill="#616161" stroke="#424242" strokeWidth="1" />

    {/* Arms */}
    <rect x="20" y="85" width="20" height="50" fill="#757575" stroke="#424242" strokeWidth="1" />
    <rect x="110" y="85" width="20" height="50" fill="#757575" stroke="#424242" strokeWidth="1" />

    {/* Legs */}
    <rect x="55" y="130" width="15" height="45" fill="#616161" />
    <rect x="80" y="130" width="15" height="45" fill="#616161" />

    {/* Cracks */}
    <line x1="70" y1="90" x2="75" y2="110" stroke="#424242" strokeWidth="1" opacity="0.5" />
    <line x1="80" y1="85" x2="82" y2="105" stroke="#424242" strokeWidth="1" opacity="0.5" />
  </svg>
)

export const SleepyDragon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 200 150"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 15px rgba(107, 63, 160, 0.2))' }}
  >
    {/* Body */}
    <ellipse cx="100" cy="80" rx="60" ry="35" fill="#FF6B35" />

    {/* Head */}
    <circle cx="45" cy="75" r="25" fill="#FF8C42" />

    {/* Horn */}
    <polygon points="45,45 50,15 40,45" fill="#FFD700" />

    {/* Eyes (closed) */}
    <path d="M 35 70 Q 40 75 45 70" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M 55 70 Q 60 75 65 70" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Snout */}
    <ellipse cx="25" cy="80" rx="15" ry="12" fill="#FF8C42" />

    {/* Nostrils */}
    <circle cx="18" cy="78" r="2" fill="#333" />
    <circle cx="18" cy="85" r="2" fill="#333" />

    {/* Tail */}
    <path d="M 155 75 Q 180 65 185 85 Q 180 95 160 90" fill="#FF6B35" stroke="#FF8C42" strokeWidth="1" />

    {/* Wings */}
    <path d="M 100 50 Q 75 30 65 45" fill="#FF8C42" stroke="#FF6B35" strokeWidth="1" />
    <path d="M 100 50 Q 125 30 135 45" fill="#FF8C42" stroke="#FF6B35" strokeWidth="1" />

    {/* Spots */}
    <circle cx="80" cy="75" r="4" fill="#FFD700" opacity="0.6" />
    <circle cx="120" cy="80" r="4" fill="#FFD700" opacity="0.6" />
    <circle cx="100" cy="60" r="3" fill="#FFD700" opacity="0.6" />

    {/* Zzz */}
    <text x="160" y="30" fontSize="20" fill="#FFD700" opacity="0.7">
      Z
    </text>
  </svg>
)
