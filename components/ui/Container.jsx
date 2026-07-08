export default function Container({ children, className = "" }) {
  return (
    <div
      className={`w-full px-4 sm:px-6 flex flex-col items-center justify-center text-center ${className}`}
    >
      {children}
    </div>
  );
}
