const Home = () => {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="mb-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            PartyKasa
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hlavní rozcestník
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Minimalistická aplikace pro vypočítávání cen produktů na zábavě.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
