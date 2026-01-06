// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const noiVersion = '0.4.0';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
      wrapperClassName="bg-amber-200/30 dark:bg-slate-700/50"
    >
      <main className="p-10 text-center max-w-[960px] m-auto">
        <h1 className="font-bold">Noi</h1>
        <p className="text-md font-bold mb-10">{siteConfig.tagline}</p>
        <div className="flex gap-10 justify-center items-end flex-row max-w-[560px] m-auto">
          <div className="flex flex-col items-center gap-1 basis-1/3">
            <img src="/os/apple-logo.svg" className="w-[40px] sm:w-[60px]" />
            <div className="font-bold">macOS</div>
            <div className="flex flex-col gap-1 justify-center">
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/Noi-1.0.0-arm64.dmg`}>Apple Silicon (arm64)</a>
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/Noi-1.0.0-x64.dmg`}>Intel (x64)</a>
              <span className="text-transparent">-</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 basis-1/3">
            <img src="/os/windows-logo.png" className="w-[40px] sm:w-[60px]" />
            <div className="font-bold">Windows</div>
            <div className="flex flex-col gap-1 justify-center">
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/Noi-1.0.0.Setup.exe`}>x64</a>
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/Noi.msi`}>.msi</a>
              <span className="text-transparent">-</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 basis-1/3">
            <img src="/os/linux-logo.png" className="w-[40px] sm:w-[60px]" />
            <div className="font-bold">Linux</div>
            <div className="flex flex-col gap-1 justify-center">
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/Noi-1.0.0-x64.AppImage`}>AppImage</a>
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/noi-1.0.0-1.x86_64.rpm`}>x86_64.rpm</a>
              <a href={`https://github.com/lencx/Noi/releases/download/v1.0.0/noi_1.0.0_amd64.deb`}>amd64.deb</a>
            </div>
          </div>
        </div>

        <h2 className="mt-5">Features</h2>
        <ul className="text-left">
          <li>Interaction-first workflow refresh for a more focused browsing experience</li>
          <li>Multi-window management to run parallel workspaces side by side</li>
          <li>Session isolation to keep browsing contexts clean and separate</li>
          <li>Local-first data: history, prompts, and settings stay on-device</li>
          <li>AI chat prompt management to organize, reuse, and iterate on workflows</li>
          <li>Built-in terminal to run local commands and scripts faster</li>
          <li>Multiple themes & visual styles to match different moods and setups</li>
        </ul>
        <h2 className="mt-5">Preview</h2>
        <div className="grid">
          <img className="rounded-lg shadow-lg" src="/readme/preview.png" />
        </div>
        {/* <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 max-w-[960px] m-auto">
          <img className="rounded-lg shadow-lg" src="/readme/preview.png" />
        </div> */}
      </main>
    </Layout>
  );
}
