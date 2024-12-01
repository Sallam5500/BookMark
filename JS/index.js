
var siteNameInput =  document.getElementById("siteName");
var siteUrlInput  =  document.getElementById("siteUrl");
var myElement    =  document.getElementById("btn");
var tableContent = document.getElementById("tableContent");
// console.log(siteName,siteUrl , meElement);

var masge =document.getElementById("massge")
var closeBtn = document.getElementById("closeBtn")
var boxModal = document.querySelector(".box-info");

var siteList = [];
if(localStorage.getItem("sallam")){
    siteList=JSON.parse(localStorage.getItem("sallam"))
    displayData();
  }

myElement.addEventListener('click',function(){
    
  addUrl()
  
})


   function addUrl(){
    var hambozo = "" ;

     if(validationName(siteNameInput) && validationUrl(siteUrlInput) ){
      if (siteUrlInput.value.includes("https")) {
        hambozo = siteUrlInput.value;
    } else {
      hambozo = 'https:\\' + siteUrlInput.value;
    }

      var web ={
        siteName:siteNameInput.value,  
        siteUrl:hambozo,
     }
    
     siteList.push(web)
    
    localStorage.setItem("sallam",JSON.stringify(siteList))
     clearData()
     displayData()
     masge.classList.remove("d-block")
     masge.classList.add("d-none")
     
    }else{
      masge.classList.remove("d-none")
      masge.classList.add("d-block")

    }
     }


    //clear
    function clearData(){
        siteNameInput.value='';
        siteUrlInput.value='';
    }

    // Display Function
    function displayData(){
 
        var cartoona =``;
        for(var i = 0 ; i < siteList.length ; i++){
        
      cartoona +=
      `
          <tr >
                <td>${i + 1}</td>
                <td>${siteList[i].siteName}</td>            
                          
                <td>
                
                <button class="btn btn-outline-info px-1 py-2 rounded-2 ">
                 <a 
                 href="${siteList[i].siteUrl}" class="text-center text-white mx-2 d-flex align-items-center"
                 target="_blank"><i class="fa-solid fa-eye p-1 "></i> <span class="ms-1">Visit</span></a>
                </button>

                </td>
                <td>
                 <button onclick="deleteData(${i})" id="btnDelet" class="icon btn btn-outline-danger " > <i class="fa-solid fa-trash-can"></i><span class="ms-2">Delet</span></button>
                </td>
              </tr>
     `
    
    }
    tableContent.innerHTML=cartoona

}

// // Delete
function deleteData(deleteIndex){
    siteList.splice(deleteIndex,1)
    displayData()
}


//regex
function validationName(){
  var regex=/^[a-zA-Z][A-Za-z0-9]{3,15}$/;
var text = siteNameInput.value;

if( regex.test(text) ){
  siteNameInput.classList.add("is-valid")
  siteNameInput.classList.remove("is-invalid")
  return true
}
else{
  //  console.log("nomatch");
   siteNameInput.classList.add("is-invalid")
   siteNameInput.classList.remove("is-valid")
   return false
}
}


function validationUrl(){
 var hamada = /^(https?:\/\/)?(w{3}\.)?(\w+\.)+\w{2,}\/?(:\d{2,5})?(\/\w+-?\w+)?(\.\w{3,})?\??$/gm;
 var test = siteUrlInput.value;

if( hamada.test(test) ){
  siteUrlInput.classList.add("is-valid")
  siteUrlInput.classList.remove("is-invalid")
  return true
}
else{

   siteUrlInput.classList.add("is-invalid")
   siteUrlInput.classList.remove("is-valid")
   return false
}
}





//Close

function closeModal() {
  boxModal.classList.add("d-none");
}
closeBtn.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeModal();
  }
});
































