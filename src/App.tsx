import { InstagramLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";
import { LinkedinLogoIcon } from "@phosphor-icons/react";
import { GithubLogoIcon } from "@phosphor-icons/react";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";


export default function App() {
  return (
    <main>
      <header>
        <img src="/profile_picture.jpg" className="thumb" alt="Foto de perfil"></img>
        <h2 className="user-id">@tailsonandrade</h2>
        <p className="user-description"><strong>Desenvolvedor web </strong> - Codando hoje para transformar o amanhã.</p>
      </header>
      <nav className="buttons-nav">
        <ButtonComponent link="https://www.youtube.com/@codelife42" logo={<YoutubeLogoIcon size={40} />} name="Youtube"></ButtonComponent>
        <ButtonComponent link="https://www.linkedin.com/in/tailson-andrade-961784277" logo={<LinkedinLogoIcon size={40} />} name="LinkedIn"></ButtonComponent>
        <ButtonComponent link="https://github.com/codeLife42" logo={<GithubLogoIcon size={40} />} name="GitHub"></ButtonComponent>
        <ButtonComponent link="https://www.instagram.com/tailsonandrade/" logo={<InstagramLogoIcon size={40} />} name="Instagram"></ButtonComponent>
      </nav>
    </main >
  )
}
