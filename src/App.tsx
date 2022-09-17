/* 
componentes / propriedades 
Abordando o conceito de react que é uma ferramenta que ajudar a implementar 
codigos javascript junto com HTML.
podemos criar tags personalizadas com a primeira letra Maiuscula e chamar como uma função
versao 1.0


*/
import {MagnifyingGlassPlus} from 'phosphor-react'
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.png';
import mascoImg from './assets/mascothug.png';
import { GameBanner } from './assets/components/GameBanner';
import { CreateAdBanner } from './assets/components/CreateAdBanner';
import { IconOpenSource } from './assets/components/IconOpenSource.';



function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20"  >
    <img src={logoImg} alt=""/>
    
    


    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" > duo </span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl="/game-1.png" title="Valorante" adsCount={56}/>
        <GameBanner bannerUrl="/game-2.png" title="Free Fire" adsCount={132}/>
        <GameBanner bannerUrl="/game-3.png" title="Minecraft" adsCount={40}/>
        <GameBanner bannerUrl="/game-4.png" title="Fifa 23" adsCount={62}/>
        <GameBanner bannerUrl="/game-5.png" title="VHogwarts Legacy" adsCount={65}/>
        <GameBanner bannerUrl="/game-6.png" title="Counter Strike" adsCount={55}/>
        
        
        
      </div>
      <CreateAdBanner/>
      
      <a href="//www.github.com/arthurjunior/NLW_eSport" className="relative">
       <div className="max-w-[90px]  flex text-white items-center mt-20"  >
        <img src={mascoImg} alt=""/>
        @ Open Source
       </div>
       </a>


  

</div>
     
  )
}

export default App
