
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
const table = document.querySelector("table")
const thead =document.querySelector(".info");
const tbody = document.querySelector(".active");
fetch('./convert.json')
  .then(response => response.json())
  .then(async(data) => {
      for(const key in data.fee){
          thList.push(key);
          tdList.push(data.fee[key]);
        }})
    
  .catch(error => console.log(error));
  
  console.log(thList,tdList);
  setTimeout(() => {
    thList.map((index,data)=>{
        const th = createEl('th',' ',` `,['thone'],thead);
        createEl("p",'innerHTML',`${index}`,[],th);
    });
    tdList.map((index,data)=>{
        if(parseInt(index)==0){
            const td = createEl('td',' ',` `,['success'],tbody);
            createEl("p",'innerHTML',`${index}`,[],td);    
        }
        else if(parseInt(index)<=1000 &&parseInt(index)>0){
            const td = createEl('td',' ',` `,['warning'],tbody);
            createEl("p",'innerHTML',`${index}`,[],td); 
        }
        else if(parseInt(index)>=1000){
            const td = createEl('td',' ',` `,['danger'],tbody);
            createEl("p",'innerHTML',`${index}`,[],td); 
        }
        else{
            const td = createEl('td',' ',` `,['danger'],tbody);
            createEl("p",'innerHTML',`${index}`,[],td); 
        }

    })

    
  }, 500);


/*data.fee[key]*/
