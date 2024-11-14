function Home() {
  const name = "Web Developer";

  return (
    <div className="h-screen flex items-center justify-center russoOne mx-4 text-4xl tracking-wider">
      <div>
        <h1 className="mb-4">Hi, I&apos;m</h1>
        <h1>
          <span className="before:content-['S'] relative before:absolute before:top-0 before:left-0 before:text-pink-600 text-emerald-400 before:-translate-x-1">
            S
          </span>
          hajin Ahsa
          <span className="before:content-['n'] relative before:absolute before:top-0 before:left-0 before:text-pink-600 text-emerald-400 before:translate-x-1">
            n
          </span>
          &#44;
        </h1>
        <div>
          {name.split("").map((a, index) => {
            return (
              <span
                className="cursor-default font-bold transition-color duration-300 hover:text-emerald-400"
                key={index}
              >
                {a}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
