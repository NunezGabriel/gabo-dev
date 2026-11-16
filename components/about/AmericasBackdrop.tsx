/** Decorative, locally stored dot map; the accent marks Arequipa, Peru. */
export default function AmericasBackdrop() {
  return (
    <div className="profile-americas" aria-hidden="true">
      <div className="profile-americas-dots" />
      <svg viewBox="0 0 640 720" fill="none" focusable="false">
        <circle className="profile-map-location-ring" cx="417.21" cy="532.58" r="9" />
        <circle className="profile-map-location" cx="417.21" cy="532.58" r="3.2" />
      </svg>
    </div>
  );
}
