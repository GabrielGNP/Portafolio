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


let scrollPosition = 0;
function openDialog(id){
    scrollPosition = window.scrollY;
    document.querySelector('body').classList.add('no-scroll');
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.top = `-${scrollPosition}px`;

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
        case "dialogCursos":
            window.dialogCursos.showModal();
            break;  
            
    }

}

function closeDialog(id){
    document.querySelector('body').classList.remove('no-scroll');
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
    requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      });
    
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
        case "dialogCursos":
            window.dialogCursos.close();
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

function openDataViews(viewID){
    switch (viewID) {
        case "proyectCSharpView":
            document.getElementById('proyectCSharpView').classList.add('open')
            document.getElementById('proyectFlutterView').classList.remove('open')
            document.getElementById('proyectWebView').classList.remove('open')
            document.getElementById('proyectNodeView').classList.remove('open')
            break;
        case "proyectFlutterView":
            document.getElementById('proyectCSharpView').classList.remove('open')
            document.getElementById('proyectFlutterView').classList.add('open')
            document.getElementById('proyectWebView').classList.remove('open')
            document.getElementById('proyectNodeView').classList.remove('open')
            break;
        case "proyectWebView":
            document.getElementById('proyectCSharpView').classList.remove('open')
            document.getElementById('proyectFlutterView').classList.remove('open')
            document.getElementById('proyectWebView').classList.add('open')
            document.getElementById('proyectNodeView').classList.remove('open')
            break;
        case "proyectNodeView":
            document.getElementById('proyectCSharpView').classList.remove('open')
            document.getElementById('proyectFlutterView').classList.remove('open')
            document.getElementById('proyectWebView').classList.remove('open')
            document.getElementById('proyectNodeView').classList.add('open')
            break;
        default:
            document.getElementById('proyectCSharpView').classList.remove('open')
            document.getElementById('proyectFlutterView').classList.remove('open')
            document.getElementById('proyectWebView').classList.remove('open')
            document.getElementById('proyectNodeView').classList.remove('open')
            break;
    }
}
function closeDataViews(){
    document.getElementById('proyectCSharpView').classList.remove('open')
    document.getElementById('proyectFlutterView').classList.remove('open')
    document.getElementById('proyectWebView').classList.remove('open')
    document.getElementById('proyectNodeView').classList.remove('open')
    
}

document.addEventListener('change', function(event){
    if(event.target.matches('input[type="radio"][name="cursos"]')){
        var dirCertificate = ""
        var urlCertificate = ""
        switch (event.target.value) {
            case "IoT_Cisco":
                dirCertificate = "Certificate_Introduction_to_IoT.avif"
                urlCertificate = "https://www.credly.com/badges/22a56eeb-57ef-47fa-bcb7-621a1f859cc0/public_url"
                break;
            case "Cybersecurity_Cisco":
                dirCertificate = "Certificate_Introduction_to_Cybersecurity.avif"
                urlCertificate = "https://www.credly.com/badges/58493a1c-38b2-4dd7-8d72-a7f2fe99c7c5/public_url"
                break;
            case "IA_IBM":
                dirCertificate = "Certifiicate_Artificial_Intelligence_Fundamentals.avif"
                urlCertificate = "https://www.credly.com/badges/fb632ff5-b64b-4ecc-8c15-97a22b3910cd/public_url"
                break;
            case "Curso_Java":
                dirCertificate = "diploma-java-basico.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1631-java-basico/diploma/detalle/"
                break;
            case "Curso_Java_POO":
                dirCertificate = "diploma-java-oop.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1629-java-oop/diploma/detalle/"
                break;
            case "Curso_Java_Persistencia_Datos":
                dirCertificate = "diploma-java-persistencia.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1760-java-persistencia/diploma/detalle/"
                break;
            case "Curso_Java_Testing":
                dirCertificate = "diploma-testing-java.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1503-testing-java/diploma/detalle/"
                break;
            case "Curso_Java_Spring":
                dirCertificate = "diploma-java-spring.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1996-java-spring/diploma/detalle/"
                break;
            case "Curso_Java_Funcional":
                dirCertificate = "diploma-java-funcional.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1826-java-funcional/diploma/detalle/"
                break;
            case "Curso_C++_Practico":
                dirCertificate = "diploma-c-plus-plus-practico.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1545-c-plus-plus-practico/diploma/detalle/"
                break;
            case "Curso_C++_POO":
                dirCertificate = "diploma-c-plus-plus-poo.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2373-c-plus-plus-poo/diploma/detalle/"
                break;
            case "Curso_C++":
                dirCertificate = "diploma-c-plus-plus.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2372-c-plus-plus/diploma/detalle/"
                break;
            case "Curso_POO":
                dirCertificate = "diploma-oop.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1474-oop/diploma/detalle/"
                break;
            case "Curso_Git_GitHub":
                dirCertificate = "diploma-git-github.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1557-git-github/diploma/detalle/"
                break;
            case "Curso_Dart":
                dirCertificate = "diploma-dart.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2651-dart-old/diploma/detalle/"
                break;
            case "Curso_Flutter":
                dirCertificate = "diploma-flutter.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1386-flutter-old/diploma/detalle/"
                break;
            case "Curso_Docker":
                dirCertificate = "diploma-docker.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2066-docker/diploma/detalle/"
                break;
            case "Curso_Historias_Usuario_Scrum":
                dirCertificate = "diploma-historias-usuario-scrum.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2616-historias-usuario-scrum/diploma/detalle/"
                break;
            case "Curso_Scrum":
                dirCertificate = "diploma-scrum.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1750-scrum/diploma/detalle/"
                break;
            case "Curso_Desarrollo_Backend":
                dirCertificate = "diploma-introduccion-backend.avif"
                urlCertificate = "https://platzi.com/p/Gacoro/curso/2508-backend-introduccion/diploma/detalle/"
                break;
            case "Curso_DevOps_platzi":
                dirCertificate = "diploma-devops.avif";
                urlCertificate = "https://platzi.com/p/Gacoro/curso/1431-devops/diploma/detalle/"
                break;
            case "Curso_NewRelic_platzi":
                dirCertificate = "diploma-new-relic.avif";
                urlCertificate = "https://platzi.com/p/Gacoro/curso/3215-new-relic/diploma/detalle/"
                break;
            case "Curso_Ciberseguridad_Microsoft":
                dirCertificate = "certificado_Descripción-de-los-conceptos-básicos-de-la-ciberseguridad.avif";
                urlCertificate = "https://learn.microsoft.com/es-es/training/achievements/learn.wwl.describe-basic-concepts-of-cybersecurity.trophy?username=gabrielnicolsperero-4214"
                break;
            default:
                dirCertificate = ""
                urlCertificate = ""
                break;
        }
        var innerHTML = ""
        if(dirCertificate == "")
            innerHTML = "<p>Seleccione un curso para ver el certificado</p>"
        else
            innerHTML = `<img class="image-certificate" src="certifications/${dirCertificate}" alt="">`

        if(urlCertificate != "")
            innerHTML = innerHTML + `<a class="linkProject" href="${urlCertificate}" target="_blank" rel="noopener noreferrer">ver certificado</a>`
        
            
        document.getElementById('certificationsContainer').innerHTML = innerHTML;
    }
})
