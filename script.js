
function createMonsters(){
 const battle=document.getElementById('battle');
 battle.innerHTML='';
 const tasks=document.getElementById('tasks').value.split('\n').filter(Boolean);

 tasks.forEach(task=>{
   const hp=100;
   const div=document.createElement('div');
   div.className='monster';
   div.innerHTML=`<h3>👾 ${task}</h3>
   <div class="hp"><div class="fill" style="width:100%"></div></div>
   <p>HP: <span>100</span>/100</p>
   <button>Выполнено</button>`;

   div.querySelector('button').onclick=()=>{
      div.querySelector('.fill').style.width='0%';
      div.querySelector('span').textContent='0';
      div.querySelector('button').disabled=true;
      localStorage.xp=(+localStorage.xp||0)+10;
      alert('Монстр побежден! XP: '+localStorage.xp);
   };
   battle.appendChild(div);
 });
}
