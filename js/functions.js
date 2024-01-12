var dialogSIC;
document.addEventListener("DOMContentLoaded", function() {
    let date = new Date();
    let dayborn = new Date(1999, 2, 16);
    let dateGradt = new Date(2022,6,7);
    let yearsOld = parseInt((Math.abs(date-dayborn))/(1000 * 3600 * 24*365));//date.getTime() - dayborn.getTime();

    let diferencia = date-dateGradt;
    var yearsGrad = Math.floor(diferencia / (365.25 * 24 * 60 * 60 * 1000));
    var monthsGrad = Math.floor((diferencia % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var daysGrad = Math.floor((diferencia % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    document.getElementById("yearsOld").innerHTML = yearsOld;
    let timeGrad = "";
    if(yearsGrad == 1){
        timeGrad = timeGrad + yearsGrad + " año ";
    }else{
        timeGrad = timeGrad + yearsGrad + " años ";
    }
    if(monthsGrad == 1){
        timeGrad = timeGrad + monthsGrad + " mes ";
    }else{
        timeGrad = timeGrad + monthsGrad + " meses ";
    }
    if(daysGrad == 1){
        timeGrad = timeGrad + " y " + daysGrad + " día ";
    }else{
        timeGrad = timeGrad + " y " + daysGrad + " días ";
    }
    document.getElementById("timeGrad").innerHTML = timeGrad;

    dialogSIC = document.getElementById("dialogSIC");
    
    let buttonMenuMobil = document.getElementById("buttonMenuMobil");
    buttonMenuMobil.addEventListener("click", function(){
        let menuMobil = document.getElementsByClassName("menuMobil");
        if(menuMobil[0].style.display == "none")
            menuMobil[0].style.display = "block";
        else menuMobil[0].style.display = "none";
    });
})

function closeMenu(){
    document.getElementsByClassName("menuMobil")[0].style.display = "none";
}

function openDialog(id){
    
    switch(id)
    {
        case "dialogSIC":
            window.dialogSIC.showModal();
            break;
        case "dialogTorreHanoi":
            window.dialogTorreHanoi.showModal();
            break;
        case "dialogArcheryStatistics":
            window.dialogArcheryStatistics.showModal();
            break;
        case "dialogArrecifeMobil":
            window.dialogArrecifeMobil.showModal();
            break;
        case "dialogBiblioCode":
            window.dialogBiblioCode.showModal();
            break;    
        case "dialogGestorDeProductos":
            window.dialogGestorDeProductos.showModal();
            break;  
            
    }

}

function closeDialog(id){
    switch(id)
    {
        case "dialogSIC":
            window.dialogSIC.close();
            break;
        case "dialogTorreHanoi":
            window.dialogTorreHanoi.close();
            break;
        case "dialogArcheryStatistics":
            window.dialogArcheryStatistics.close();
            break;
        case "dialogArrecifeMobil":
            window.dialogArrecifeMobil.close();
            break;
        case "dialogBiblioCode":
            window.dialogBiblioCode.close();
            break;
        case "dialogGestorDeProductos":
            window.dialogGestorDeProductos.close();
            break;
            
    }
    //dialogSIC.close();
}


function changeViewProjects(tipeProjects){
    let buttons = document.getElementById("navProjects").querySelectorAll("button");
    let Todos = document.getElementById("containerProjects").querySelectorAll(".Todo");
    let Webs = document.getElementById("containerProjects").querySelectorAll(".Web");
    let BackEnds = document.getElementById("containerProjects").querySelectorAll(".BackEnd");
    let Mobils = document.getElementById("containerProjects").querySelectorAll(".Mobil");
    let Desktops = document.getElementById("containerProjects").querySelectorAll(".Desktop");
    console.log(buttons);
    buttons.forEach(button =>{
        button.classList.remove("active");
    })
    Todos.forEach(todo =>{
        todo.style.display = "none";
    })
    switch (tipeProjects){
        case "Todo":
            buttons[0].classList.add("active");
            Todos.forEach(todo =>{
                todo.style.display = "block";
            })
            break;
        case "Web":
            buttons[1].classList.add("active");
            Webs.forEach(web =>{
                web.style.display = "block";
            })
            break;
        case "BackEnd":
            buttons[2].classList.add("active");
            BackEnds.forEach(backEnd =>{
                backEnd.style.display = "block";
            })
            break;
        case "Mobil":
            buttons[3].classList.add("active");
            Mobils.forEach(mobil =>{
                mobil.style.display = "block";
            })
            break;
        case "Desktop":
            buttons[4].classList.add("active");
            Desktops.forEach(desktop =>{
                desktop.style.display = "block";
            })
            break;
    }
}

function showProjects(){
    let projects = document.getElementById("projects");
    let tools = document.getElementById("toolsAndUtilities");
    let buttonProjects = document.getElementById("buttonShowProjects");
    let buttonTools = document.getElementById("buttonShowTools")
    buttonProjects.classList.remove("unchecked");
    buttonProjects.classList.add("checked");
    buttonTools.classList.add("unchecked");
    buttonTools.classList.remove("checked");
    projects.classList.add("show");
    projects.classList.remove("hide");
    tools.classList.add("hide");
    tools.classList.remove("show");
}
function showTools(){
    let projects = document.getElementById("projects");
    let tools = document.getElementById("toolsAndUtilities");
    let buttonProjects = document.getElementById("buttonShowProjects");
    let buttonTools = document.getElementById("buttonShowTools")
    buttonTools.classList.remove("unchecked");
    buttonTools.classList.add("checked");
    buttonProjects.classList.add("unchecked");
    buttonProjects.classList.remove("checked");
    projects.classList.add("hide");
    projects.classList.remove("show");
    tools.classList.add("show");
    tools.classList.remove("hide");
}

