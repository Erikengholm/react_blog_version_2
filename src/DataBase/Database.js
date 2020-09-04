import React from "react";
import f from 'C:/Users/Erik Engholm/Documents/webpro/react-blog/src/DataBase/Firebase.js'     // <------  import firebase

const carList = document.querySelector('#Main-Content');
const sort = document.querySelector('#rightblogMenyBox');

class Information{
    head = "";
    src = "";
    flavor = "";
    score = "";
    likeText = 0; 
}

const db = f.firestore();

var Cardb = db.collection('Car-base').get();

var sortering = 'Name'
var cars =[];
var count=0;

var bit= 0

db.collection('Car-base').orderBy(sortering).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
               cars.push(doc);
    }      
  );      getdatabase();
});

  function fetchmoredata(){
    db.collection('Car-base').orderBy(sortering).get().then((snapshot) => {
        let count=0;
        snapshot.docs.forEach(doc => {
            if(count <3){
            ph(doc);
            count++;
        }
        else{
            }
    
    
      })});
  }
  function getdatabase(){
      let maxpost=count+3;
      for(count;count!=maxpost;count++){ 
        if(count>=cars.length){
         bit=1;
        }
        else{
          ph(cars[count]);}
      }
  }
  
  function ph(doc){
    doc = doc.data();
       Information.head = doc.Name; 
};

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-20) { 
        if(bit==0){
        setTimeout(() => { getdatabase(); 
; }, 2000);

}
            else{
                console.log("end");
            }

        }
 
};

function updateLike(updates,num){
console.log(updates.id);
    db.collection("Car-base").doc(updates.id).update({
        likes: num
      }).then(function() {
        console.log(" likes updated");
      });}

export default Information;