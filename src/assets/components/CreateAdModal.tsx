import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, GameController  } from 'phosphor-react';
import { Input } from './Forms/input';
import { FormEvent, useEffect, useState } from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

interface Game{
    id: string;
    title: string;
    
    }


export function CreateAdModal() {

    const [games, setGames] = useState<Game[]>([])
    const [weekDays, setWeekDays]  = useState<string[]>([])
  
useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(Response => Response.json())
    .then(data => {
      setGames(data)
    })
}, [])

function handleCreateAd(event: FormEvent){
  event.preventDefault
  console.log('Sucesso carai vamo que vamo')

}

   
return (
    <Dialog.Portal>
    <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
        <Dialog.Content className="fixed bg-[#2A2634] py-10 px-10 text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg w-[620px] shadow-lg shadow-black/80">
           <Dialog.Title className="text-3xl  font-black">Publique um anuncio</Dialog.Title>
            
              <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
              <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                <select
                     defaultValue=""
                     className='bg-zinc-900 py-3 px-4 rounded placeholder:bg-slate-500 text-sm appearance-none ' 
                >
                  <option disabled value="" >Selecione o Game</option>
                  {games.map(game =>{
                      return <option key={game.id} value={game.id} > {game.title}</option>

                  })}

                </select>      
                        
                   
                  
                </div> 

                <div  className="flex flex-col gap-2">
                  <label  htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id="name" placeholder="Como te chamam dentro do game?"/>
                </div>
                  
            <div className="grid grid-cols-2 gap-6">
                      <div className='flex flex-col gap-2'>
                      <label htmlFor="yearsPlaying">Joga ha quantos anos?</label>
                      <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"/>
                      </div>
                      <div className='flex flex-col gap-2' >
                      <label htmlFor="discord">Qual seu Discord?</label> 
                      <Input id="discord" type="text" placeholder="Usuario#0000"/>
                     </div>
                    
                     <div className='flex gap-6'>
                    <div className='flex flex-col gap-2'>
                       <label htmlFor="weekDays">Quando costuma jogar? </label>
                       
                        <ToggleGroup.Root
                         type='multiple' 
                         className='flex gap-1' 
                         value={weekDays}
                         onValueChange={setWeekDays}
                         
                         >
                        <ToggleGroup.Item 
                           value='0'
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('0') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            D
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                          value='1'                       
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('1') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            S
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                           value='2'
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('2') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            T
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                          value='3'
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('3') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            Q
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                          value='4'
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('4') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            Q
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                          value='5'
                          title="Domingo"
                          className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500':' bg-zinc-900' } `}
                          >
                            S
                            </ToggleGroup.Item>
                        <ToggleGroup.Item 
                          value='6'
                          title="Domingo"
                          className={`w-8 h-8 rounded  ${weekDays.includes('') ? 'bg-violet-500':'bg-zinc-900' } `}
                          >
                            S
                            </ToggleGroup.Item>
                        </ToggleGroup.Root>   
                       
                    </div> 
                  </div> 
                   <div className='flex flex-col gap-4 flex-3'><label htmlFor="hourStart">Qual horario do dia?</label>
                       <div className=' grid-cols-2 gap-2'>
                        <Input id="hourStart" type="time" placeholder="De" className='appearance-none' />
                        <Input id="hourEnd" type="time" placeholder="Ate" className='appearance-none' />
                       </div>
                    </div>

                   <label className='mt-2 flex items-center gap-2 text-sm '>

                    <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
                      <Checkbox.Indicator>
                        <Check className='w-4 h-4 text-emerald-400 '/>
                      </Checkbox.Indicator>
                         
                    </Checkbox.Root>
                    Costumo me conectar ao chat de voz
                   </label>
                   <footer className='mt-2 flex justify-end gap-2'>
                    <Dialog.DialogClose
                    type='button'
                     className='bg-zinc-500 px-1 h-11 rounded-md font-semibold hover:bg-zinc-600'
                     >
                      Cancelar
                      </Dialog.DialogClose>
                    
                    <button 
                    type="submit"
                    className='bg-violet-500 px-1 h-11 rounded-md font-semibold flex items-center hover:bg-violet-600'
                    >
                       Encontrar DUO
                      <GameController size={24}/>
                    </button>

                   </footer>
                </div>
              </form>
            
              </Dialog.Content>
              </Dialog.Portal>

);

}