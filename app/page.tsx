export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <h1 className="text-5xl font-bold tracking-tight text-black dark:text-zinc-50">
          Rently
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          a full-stack web app for shared household management with chore
          rotations and expense tracking.{" "}
        </p>
      </main>
    </div>
  );
}
