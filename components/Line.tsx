export default function Line() {
  return (
    <div className="w-full container mx-auto py-8">
      <svg width="100%" height="4" xmlns="http://www.w3.org/2000/svg">
        <line
          x1="0"
          y1="2"
          x2="100%"
          y2="2"
          stroke="#D1D5DB"
          strokeWidth="6"
          strokeDasharray="20 10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
