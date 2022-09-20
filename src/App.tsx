/* 
componentes / propriedades 
Abordando o conceito de react que é uma ferramenta que ajudar a implementar 
codigos javascript junto com HTML.
podemos criar tags personalizadas com a primeira letra Maiuscula e chamar como uma função
versao 1.0


*/

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.png';
import mascoImg from './assets/mascothug.png';
import { GameBanner } from './assets/components/GameBanner';
import { CreateAdBanner } from './assets/components/CreateAdBanner';


import { CreateAdModal } from './assets/components/CreateAdModal';



interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads:number;
  }
 
}


function App() {
const [games, setGames] = useState<Game[]>([])
  
useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(Response => Response.json())
    .then(data => {
      setGames(data)
    })
}, [])

  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20"  >
    <img src={logoImg} alt=""/>
    
    


    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" > duo </span> está aqui.
      </h1>
   

      <div className="grid grid-cols-6 gap-6 mt-16">
         {games.map(game =>{
          return(
            <GameBanner
             key={game.id}
            title={game.title}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
            />
          )
         })}

        
        
        
        
      </div>

    <Dialog.Root>
      <CreateAdBanner/>
      <CreateAdModal/>
     
    </Dialog.Root>


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
