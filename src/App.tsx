import { YoutubeLogoIcon } from "@phosphor-icons/react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

export default function App() {
  return (
    <main>
      <header>
        <img src="https://i.pinimg.com/474x/9f/f4/e2/9ff4e2cde58145983cc045a8b2cae62a.jpg" className="thumb"></img>
        <h2 className="user-id">@user</h2>
        <p className="user-description">Descricao do usuario</p>
      </header>
      <nav className="buttons-nav">
        <ButtonComponent logo={<YoutubeLogoIcon size={40} />} name="Youtube"></ButtonComponent>
        <ButtonComponent logo={<LinkedinLogoIcon size={40} />} name="LinkedIn"></ButtonComponent>
        <ButtonComponent logo={<GithubLogoIcon size={40} />} name="GitHub"></ButtonComponent>
      </nav>
    </main >
  )
}
