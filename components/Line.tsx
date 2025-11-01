export default function Line() {
  return (
    <div className="w-full container mx-auto py-8 px-4 sm:px-6 lg:px-12">
      <div className="flex items-center justify-center gap-3 md:gap-4">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="h-3 md:h-4 bg-gray-400 rounded-full"
            style={{
              width: index % 3 === 0 ? '2rem' : index % 2 === 0 ? '3rem' : '2.5rem',
            }}
          />
        ))}
      </div>
    </div>
  );
}
