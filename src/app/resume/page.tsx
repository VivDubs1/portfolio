export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-50 py-10">
      <h1 className="text-4xl font-bold mb-6">My Resume</h1>
      <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-hidden bg-white">
        <iframe
          src="/Vivin_CV_0925.pdf"
          title="Vivin Dube Resume"
          width="100%"
          height="900px"
          className="border-0"
        />
      </div>
    </div>
  );
}
