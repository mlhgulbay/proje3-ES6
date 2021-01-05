const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//Tüm eventleri yükleme
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardBody2.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){//input alanlarına girilen değerleri aldık
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" ||url ==="" ){
        //HATA
        UI.displayMessages("Tüm alanları doldurunuz..","info")
    }
    else{
        //Yeni film oluşturduk
        const newFilm = new Film(title,director,url);
        UI.addFilmToUI(newFilm);//Arayüze film ekleme
        Storage.addFilmToStorage(newFilm);//Storage'a film ekleme
        UI.displayMessages("Film başarıyla eklendi...","success")

    }
    UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deleteFilm(e){
    //console.log(e.target);
    //click eventi nerede oluştu bilgisi
    if (e.target.id === "delete-film"){ 
        UI.deleteFilmFromUI (e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı...","dark")
    }   

}
function clearAllFilms(){
    if(confirm("Emin misiniz?")){
            UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromStorage();
        }
    

}