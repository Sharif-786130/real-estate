// const Icon = ({ children, size = 22, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//   >
//     {children}
//   </svg>
// );

// export const IconSearch = (p) => (
//   <Icon {...p}>
//     <circle cx="10.5" cy="10.5" r="6.5" />
//     <path d="M20 20l-4.5-4.5" />
//   </Icon>
// );
// export const IconTour = (p) => (
//   <Icon {...p}>
//     <path d="M3 21h18" />
//     <path d="M5 21V9l7-5 7 5v12" />
//     <path d="M9 21v-6h6v6" />
//   </Icon>
// );
// export const IconHandshake = (p) => (
//   <Icon {...p}>
//     <path d="M3 12l4-4 3 2 3-3 3 2 5-3" />
//     <path d="M3 12v3l4 3 3-2 3 3 3-2 5-3v-3" />
//   </Icon>
// );
// export const IconBell = (p) => (
//   <Icon {...p}>
//     <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
//     <path d="M10 20a2 2 0 0 0 4 0" />
//   </Icon>
// );
// export const IconShield = (p) => (
//   <Icon {...p}>
//     <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
//     <path d="M9 12l2 2 4-4" />
//   </Icon>
// );
// export const IconChart = (p) => (
//   <Icon {...p}>
//     <path d="M4 20V10" />
//     <path d="M12 20V4" />
//     <path d="M20 20v-7" />
//   </Icon>
// );
// export const IconChat = (p) => (
//   <Icon {...p}>
//     <path d="M4 5h16v11H8l-4 4z" />
//   </Icon>
// );
// export const IconMenu = (p) => (
//   <Icon {...p}>
//     <path d="M4 7h16" />
//     <path d="M4 12h16" />
//     <path d="M4 17h16" />
//   </Icon>
// );
// export const IconClose = (p) => (
//   <Icon {...p}>
//     <path d="M6 6l12 12" />
//     <path d="M18 6L6 18" />
//   </Icon>
// );
// export const IconArrow = (p) => (
//   <Icon {...p}>
//     <path d="M5 12h14" />
//     <path d="M13 6l6 6-6 6" />
//   </Icon>
// );
// export const IconCheck = (p) => (
//   <Icon {...p}>
//     <path d="M20 6L9 17l-5-5" />
//   </Icon>
// );
// export const IconBed = (p) => (
//   <Icon {...p}>
//     <path d="M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
//     <path d="M3 13h18" />
//     <path d="M3 18v2" />
//     <path d="M21 18v2" />
//     <path d="M7 9V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2" />
//   </Icon>
// );
// export const IconBath = (p) => (
//   <Icon {...p}>
//     <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
//     <path d="M6 12V6a2 2 0 0 1 3-1.7" />
//     <path d="M4 19v2" />
//     <path d="M18 19v2" />
//   </Icon>
// );
// export const IconArea = (p) => (
//   <Icon {...p}>
//     <rect x="4" y="4" width="16" height="16" />
//     <path d="M4 9h3" />
//     <path d="M4 15h3" />
//     <path d="M20 9h-3" />
//     <path d="M20 15h-3" />
//   </Icon>
// );

// export const StatIcon = ({ name, size = 22 }) => {
//   const icons = {
//     home: (
//       <path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" />
//     ),
//     map: (
//       <path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3zM9 7v13M15 4v13" />
//     ),
//     users: (
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
//     ),
//     star: (
//       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
//     ),
//   };

//   return (
//     <svg
//       width={size}
//       height={size}
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       {icons[name]}
//     </svg>
//   );
// };

// export const HouseMark = ({ size = 28 }) => (
//   <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
//     <path
//       d="M5 16L16 6l11 10"
//       stroke="var(--ink)"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M8 14v11h16V14"
//       stroke="var(--ink)"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M13 25v-6h6v6"
//       stroke="var(--brass)"
//       strokeWidth="1.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export const IconMapPin = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//     <circle cx="12" cy="10" r="3" />
//   </svg>
// );

// export const IconPhone = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//   </svg>
// );

// export const IconMail = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M4 4h16v16H4z" />
//     <path d="M22 6l-10 7L2 6" />
//   </svg>
// );

// export const IconClock = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <circle cx="12" cy="12" r="10" />
//     <path d="M12 6v6l4 2" />
//   </svg>
// );

// export const IconUserPlus = ({ size = 24 }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//     <circle cx="8.5" cy="7" r="4" />
//     <line x1="20" y1="8" x2="20" y2="14" />
//     <line x1="17" y1="11" x2="23" y2="11" />
//   </svg>
// );


// components/Icons.jsx

/* =========================================================
   BRAND / LOGO
   ========================================================= */

export const HouseMark = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 10.5L12 3l9 7.5" />
    <path d="M5 9.5V21h14V9.5" />
    <path d="M9 21v-6h6v6" />
  </svg>
);


/* =========================================================
   NAVIGATION / UI
   ========================================================= */

export const IconMenu = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const IconClose = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const IconArrow = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const IconSearch = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const IconCheck = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);


/* =========================================================
   PROPERTY CARD ICONS
   ========================================================= */

export const IconBed = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6" />
    <path d="M2 18h20" />
    <path d="M6 10V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4" />
    <path d="M13 10V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4" />
    <path d="M2 22v-2" />
    <path d="M22 22v-2" />
  </svg>
);

export const IconBath = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 6L7 4a2 2 0 0 0-2 2v6" />
    <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3z" />
    <line x1="5" y1="19" x2="5" y2="21" />
    <line x1="19" y1="19" x2="19" y2="21" />
  </svg>
);

export const IconArea = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="1" />
    <path d="M9 3v4" />
    <path d="M15 3v4" />
    <path d="M9 21v-4" />
    <path d="M15 21v-4" />
    <path d="M3 9h4" />
    <path d="M3 15h4" />
    <path d="M21 9h-4" />
    <path d="M21 15h-4" />
  </svg>
);


/* =========================================================
   ABOUT / FEATURES ICONS
   ========================================================= */

export const IconShield = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconHandshake = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 17l-4-4-5 4 3 3 2-1" />
    <path d="M13 17l4-4 5 4-3 3-2-1" />
    <path d="M8 13l3-3 2 2 1-1 3 3" />
    <path d="M12 12l1.5-1.5a2 2 0 0 1 2.83 0L18 12" />
  </svg>
);

export const IconChat = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const IconTour = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);

export const IconBell = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

export const IconChart = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);


/* =========================================================
   CONTACT ICONS
   ========================================================= */

export const IconMapPin = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconPhone = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconMail = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);

export const IconClock = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);


/* =========================================================
   AUTH ICONS
   ========================================================= */

export const IconLock = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const IconUserPlus = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="17" y1="11" x2="23" y2="11" />
  </svg>
);


/* =========================================================
   STAT ICON (used by Home / About stat cards)
   ========================================================= */

export const StatIcon = ({ name, size = 22 }) => {
  const icons = {
    home: <path d="M3 10.5L12 3l9 7.5M5 9.5V21h14V9.5" />,
    map: <path d="M9 20l-6-3V4l6 3 6-3 6 3v13l-6-3-6 3zM9 7v13M15 4v13" />,
    users: (
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    ),
    star: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[name]}
    </svg>
  );
};
