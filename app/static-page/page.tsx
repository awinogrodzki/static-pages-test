export default function StaticPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>I am static page, generated at {Date.now()}</p>
      </div>
    </main>
  )
}
