/* 
componentes / propriedades 
Abordando o conceito de react que é uma ferramenta que ajudar a implementar 
codigos javascript junto com HTML.
podemos criar tags personalizadas com a primeira letra Maiuscula e chamar como uma função


*/
import {MagnifyingGlassPlus} from 'phosphor-react'
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.png';
import mascoImg from './assets/mascothug.png';



function App() {
  return(
    <div className="max-w-[1344px] mx-auto flex flex-col items-center mt-20"  >
    <img src={logoImg} alt=""/>
    
    


    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="text-transparent bg-nlw-gradient bg-clip-text" > duo </span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/game-1.png" alt="" /> 

         <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block "> Valorant </strong>
            <span className='text-zinc-300 text-sm block'> 25 anúncios</span>
         </div>

        </a>
        <a href="" className="relative">
            <img src="/game-2.png" alt="" /> 

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Free Fire </strong>
            <span className='text-zinc-300 text-sm block'>34 anúncios</span>
         </div>

        </a>
        <a href="" className="relative">
            <img src="/game-3.png" alt="" /> 

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Minecraft </strong>
            <span className='text-zinc-300 text-sm block'>67 anúncios</span>
         </div>

        </a>
        <a href="" className="relative">
            <img src="/game-4.png" alt="" /> 

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Fifa 2023 </strong>
            <span className='text-zinc-300 text-sm block'>+100 anúncios</span>
         </div>

        </a>
        <a href="" className="relative">
            <img src="/game-5.png" alt="" /> 

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Hogwarts Legacy </strong>
            <span className='text-zinc-300 text-sm block'> 47 anúncios</span>
         </div>

        </a>
        <a href="" className="relative">
            <img src="/game-6.png" alt="" /> 

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block"> Counter Strike 1.6 </strong>
            <span className='text-zinc-300 text-sm block'>+100 anúncios</span>
         </div>

        </a>
        
      </div>
     
<div className="pt-1 bg-nlw-gradient self-stretch rounded-lg  overflow-hidden mt-8  ">
     <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
      <div>
     <strong className='text-2xl text-white font-black'>Não encontrou seu duo? </strong> <br></br>
     <span className='text-zinc-400'>Publique um anúncio para encontrar novos players!</span>   
     </div>
<button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
 <MagnifyingGlassPlus size={24}/>
  Publicar anúncio
</button>
    </div>
  </div>  

  <a href="https://github.com/arthurjunior/NLW_eSport" className="relative">
  <div className="max-w-[134px]  flex text-white items-center mt-20"  >
    <img src={mascoImg} alt=""/>
    @ Open Source
  </div>
  </a>

</div>
     
  )
}

export default App
