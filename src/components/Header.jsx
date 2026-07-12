import githubLogo from "../assets/github.svg";

export function Header() {
  return (
    <header className="flex py-4 justify-center relative shadow-lg w-full mb-12">
      <h1 className="font-bold text-3xl">Currency Converter</h1>
      <a
        className="absolute right-4"
        href="https://github.com/sudoAdarsh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          alt="GitHub Repository"
          className="w-8 h-8 opacity-80 hover:opacity-100 transition"
        />
      </a>
    </header>
  );
}
