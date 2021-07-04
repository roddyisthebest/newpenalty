
const thList = [];
const tdList = [];
function createEl(tagType,property,value,classNames,where){
    const e =document.createElement(`${tagType}`); 
    if(property==='innerHTML'){
        e.innerHTML = value;
    }
    else if(property===" "){
        
    }
    else{
        e.setAttribute(property, value);
    }
    classNames.map((one)=>{
        e.classList.add(`${one}`);
    })
    where.appendChild(e);
    return e;
}
const sexygrid = document.querySelector(".sexygrid")
fetch('./convert.json')
  .then(response => response.json())
  .then(async(data) => {
      for(const key in data.fee){
          thList.push(key);
          tdList.push(data.fee[key]);
        }})
  .catch(error => console.log(error));
  
  setTimeout(() => {
    thList.map((index,data)=>{
        const one = createEl('div',' ',` `,["sexyone"],sexygrid);
        createEl("span",'innerHTML',`${index}`,['name'],one);
    });
    tdList.map((index,data)=>{
        const list = document.querySelectorAll(".sexyone")
        createEl("span",'innerHTML',`${index}`,['name'],list[data]);

    })

    
  }, 500);


/*data.fee[key]*/
