const vardi = ['Jana Krūmiņa','Jānis Bērziņš','pēteris koks','līga priede', 'maija liepa'];
const balvas = ['Ledusskapis','fotoaparāts','Kafijas automāts','gludeklis','Personālais dators','Tosteris','televizors']
const naudaKopa = 1000000;

let uzvaretajuSkaits = 3;

let rindas = document.querySelector('.rindas');
//rindas.innerHTML = 'hello';



function randFunc(maxCipars)
{
  let random1 = Math.floor( Math.random() * maxCipars );
  return random1;
}

function izlozet()
{
    rindas.innerHTML = '';
    
    for(let i=0; i < uzvaretajuSkaits; i++) 
    {
        let rand = randFunc(vardi.length);

        let uzvaretajs = vardi[rand];

        rindas.innerHTML += `
        <tr>
        <td>${i+1}</td>
        <td>${uzvaretajs}</td>
        </tr>
        `;
    }
}//beidzas izlozet()