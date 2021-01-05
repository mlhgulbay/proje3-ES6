class Storage{

     static addFilmToStorage(newFilm){
        // console.log(newFilm);
        let films = this.getFilmsFromStorage();
      
        films.push(newFilm);//film arrayine objemizi attık
        /*[
          {title:"sadsasasd",director:"sadsadsad",url:"324323443342"}
          {title:"sadsasasd",director:"sadsadsad",url:"324323443342"}
        ] */
        //Arraylere obje atıyoruz
        localStorage.setItem("films",JSON.stringify(films))//arrayi tekrar local storage a yazıyoruz
         
      }
      
      static getFilmsFromStorage(){
          let films;
          if(localStorage.getItem("films")=== null){
              films = [];
      
          }
          else{
              films = JSON.parse(localStorage.getItem("films"));
      
          }
          return films;
      }
      static deleteFilmFromStorage(filmTitle){
          let films = this.getFilmsFromStorage();
      
          films.forEach(function(film,index){//objemizi ve hangi indekste olduğu bilgisini aldık
              if(film.title === filmTitle){
      //şu anki bulunduğumuz objenin title özelliği gönderdiğimiz film title a eşitse sil
                      films.splice(index,1);//array içinden objeyi sildik
              }
     
          });
          localStorage.setItem("films",JSON.stringify(films));
      
      }
      static clearAllFilmsFromStorage(){
          localStorage.removeItem("films");
      }
}



