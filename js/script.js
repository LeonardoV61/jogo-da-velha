const areas = document.querySelectorAll('[quadrado]');
const situacao = document.getElementById('situacao');
const limpar = document.getElementById('limpar');
let jogadorAtual = 'X';
let turno = 1;
let resultado = [];
resultado.length = 10;
for(j = 0; j<10; j++) {
   resultado[j] = 0;
}
situacao.textContent = `Vez do Jogador ${jogadorAtual}`;
areas.forEach(area => area.addEventListener('click', jogada));
limpar.addEventListener('click', (e) => {
   jogadorAtual = 'X';
   turno = 1;
   situacao.textContent = `Vez do Jogador ${jogadorAtual}`;
   for(i = 0; i<9; i++) {
      resultado[i] = 0;
      areas[i].textContent = '';
      areas[i].classList.remove('vencedor');
   }
   resultado[9] =0;
});
function jogada(e) {
   const area = e.target;
   const i = Array.from(areas).indexOf(area);
   if (area.textContent !== '' || turno > 9) return;
   area.textContent = jogadorAtual;
   if(jogadorAtual === 'X') {
      if (i < 3) resultado[0]++;
      else if (i < 6) resultado[1]++;
      else if (i < 9) resultado[2]++;
      if (i%3 === 0) resultado[3]++;
      else if (i%3 === 1) resultado[4]++;
      else if (i%3 === 2) resultado[5]++;
      if (i === 0 || i === 4 || i === 8) resultado[6]++;
      if (i === 2 || i === 4 || i === 6) resultado[7]++;
   }
   else if(jogadorAtual === 'O') {
      if (i < 3) resultado[0]--;
      else if (i < 6) resultado[1]--;
      else if (i < 9) resultado[2]--;
      if (i%3 === 0) resultado[3]--;
      else if (i%3 === 1) resultado[4]--;
      else if (i%3 === 2) resultado[5]--;
      if (i === 0 || i === 4 || i === 8) resultado[6]--;
      if (i === 2 || i === 4 || i === 6) resultado[7]--;
   }
   for (j=0; j<8; j++) {
      if(resultado[j] === 3) {
         if(resultado[8] === 0) {resultado[8] = j+1;}
         else {resultado[9] = j+1;}
         turno = 10;
      }
      else if(resultado[j] === -3) {
         resultado[8] = j+1;
         turno = 10;
         j = 9
      }
   }
   if (resultado[8] > 0) {
      for(j=8; j<10; j++) {
         if(resultado[j] === 1) {
            areas[0].classList.add('vencedor');
            areas[1].classList.add('vencedor');
            areas[2].classList.add('vencedor');
         }
         else if(resultado[j] === 2) {
            areas[3].classList.add('vencedor');
            areas[4].classList.add('vencedor');
            areas[5].classList.add('vencedor');
         }
         else if(resultado[j] === 3) {
            areas[6].classList.add('vencedor');
            areas[7].classList.add('vencedor');
            areas[8].classList.add('vencedor');
         }
         else if(resultado[j] === 4) {
            areas[0].classList.add('vencedor');
            areas[3].classList.add('vencedor');
            areas[6].classList.add('vencedor');
         }
         else if(resultado[j] === 5) {
            areas[1].classList.add('vencedor');
            areas[4].classList.add('vencedor');
            areas[7].classList.add('vencedor');
         }
         else if(resultado[j] === 6) {
            areas[2].classList.add('vencedor');
            areas[5].classList.add('vencedor');
            areas[8].classList.add('vencedor');
         }
         else if(resultado[j] === 7) {
            areas[0].classList.add('vencedor');
            areas[4].classList.add('vencedor');
            areas[8].classList.add('vencedor');
         }
         else if(resultado[j] === 8) {
            areas[2].classList.add('vencedor');
            areas[4].classList.add('vencedor');
            areas[6].classList.add('vencedor');
         }
      }
      situacao.textContent = `Jogador ${jogadorAtual} Venceu!`;
   } else if (turno === 9) {
      situacao.textContent = 'Deu velha!';
      turno = 10;
   } else {
      if(jogadorAtual === 'X') {
         jogadorAtual = 'O';
      }
      else {
         jogadorAtual = 'X';
      }
      situacao.textContent = `Vez do Jogador ${jogadorAtual}`;
   }
   turno++;
}