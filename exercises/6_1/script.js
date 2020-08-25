window.onload = Init();

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS','MG','PA','PB','PR','PE','PI','RJ','RN','RO','RS','RR','SC' , 'SE', 'SP', 'TO'];

let value = 1;
function popularSelect() {
  const selectItem = document.getElementById('estado');
  for (let i = 0; i < states.length; i += 1) {
    const optionItem = document.createElement('option');
    optionItem.value = value;
    optionItem.innerHTML = states[i];
    selectItem.appendChild(optionItem);
    value += 1;
  }
}
popularSelect();

//função preventDefault para aceitar soment números no campo CPF
function Init () {
  let boxCpf = document.getElementById('cpf');
  boxCpf.addEventListener( 'keypress', checkName, false );
}

function checkName(event) {
  let charCode = event.charCode;
  if (charCode != 0) {
      if (charCode < 48 || charCode > 57) {
          event.preventDefault();
          alert("Por favor, use somente números." + "\n" + "charCode: " + charCode + "\n");
      }
  }
} 

