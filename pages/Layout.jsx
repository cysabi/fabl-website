const Layout = ({ prose = false, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-fabl-indigo-dark">
        <div className="max-w-5xl mx-auto h-16 py-2 w-full flex flex-wrap items-center justify-between px-4 gap-4">
          <a href="/" className="h-full flex items-center shrink-0 gap-2">
            <img src="/FABL_IconLogo.svg" className="h-full aspect-square" />
            <img
              src="/FABL_TextLogo.svg"
              className="h-full py-1.5 hidden sm:block"
            />
          </a>
          <div className="flex flex-wrap items-center gap-8 text-lg sm:text-xl font-semibold uppercase tracking-wide">
            <a
              className="underline decoration-transparent decoration-2 transition-colors hover:decoration-fabl-indigo-300"
              href="/standings"
            >
              Standings
            </a>
            <a
              className="underline decoration-transparent decoration-2 transition-colors hover:decoration-fabl-indigo-300"
              href="/rules"
            >
              Rules
            </a>
            <a
              href="/#play"
              className="underline decoration-transparent decoration-2 transition-colors hover:decoration-fabl-indigo-300 font-black text-fabl-gold"
            >
              Play
            </a>
          </div>
        </div>
      </div>
      {prose ? (
        <main className="prose flex-1 p-4 prose-lg prose-slate prose-fabl mx-auto !prose-invert my-16">
          {children}
        </main>
      ) : (
        <main className="flex-1">{children}</main>
      )}
      <div className="bg-fabl-indigo-900">
        <div className="p-4 gap-4 max-w-5xl mx-auto flex text-fabl-indigo-400/50 items-center flex-wrap justify-between">
          <div>
            A collaboration between{" "}
            <a
              className="text-fabl-indigo-300/70 hover:underline"
              href="https://otd.ink"
            >
              Off the Dial
            </a>{" "}
            and{" "}
            <a
              className="text-fabl-indigo-300/70 hover:underline"
              href="https://discord.gg/p69RF6jRcg"
            >
              Mulloway Institute of Turfing
            </a>
            , website built by cyrulean.
          </div>
          <a className="hover:underline" href="https://otd.ink/legal">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};
export default Layout;
