
const thList = [];
const tdList = [];

let prayList;
let penaltyList;
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
const prayer = document.querySelector(".prayer");

  function loadJSON1(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', `Json/pray.json`, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }

  loadJSON1(function(json) {
    const trap = json; // this will log out the json object
    const two =Object.entries(trap)
    prayList=Object.entries(two);
    varPray();
    
  });

  function loadJSON2(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', `Json/convert.json`, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        callback(JSON.parse(xobj.responseText));
      }
    };
    xobj.send(null);  
  }
  loadJSON2(function(json) {
    const trap = json; // this will log out the json object
    const two =Object.entries(trap)
    penaltyList=Object.entries(two[0][1]);
    varPk();
  });

 

  const varPk = (e) => {
    console.log(penaltyList);
    penaltyList.map((e)=>{
          const th = createEl('th',' ',` `,["thsexy"],thead);
           createEl("p",'innerHTML',`${e[0]}`,[],th);
           const td = createEl('th',' ',` `,["thsexy"],tbody);
           createEl("p",'innerHTML',`${e[1]}`,[],td);
      });

      
  }

  const varPray = () => {
    prayList.map(e=>{
        const ul = createEl("ul",' ','',["list-group"],prayer);
        createEl("li","innerHTML",`${e[1][0]}`,["list-group-item","active"],ul)
        Object.entries(e[1][1]).map((e,idx)=>
        { 
          console.log(idx)
          if(idx!=0 && e[1]!="Nan"){
            createEl("li","innerHTML",`${e[1]}`,["list-group-item"],ul)
          }
        }
        
        )
    })

  }

  
    






/*data.fee[key]*/
