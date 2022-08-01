/** This function uses the Maths.floor and Maths.random 
 * to generate a number between 1-10 and then assign the items variable's 
 * value to it based of the results the result is then returned */
 let inventory = [];
 let items =[];
 let room; 
 function generateItem() {
     let randomItem = Math.floor(Math.random()*10) +1;
     if (randomItem === 1){
         items = 'potion';
     } else if (randomItem === 2){
         items = 'sword';
     } else if (randomItem === 3){
         items = 'axe';
     } else if (randomItem === 4){
         items = 'key';
     } else {
         items= '';
     }
     return items;
 }
 /**This function takes the generated items return value which 
  * has been set to the items variable and adds it to the inventory.
  */
  function checkItemFound(){
        
        switch(items){
        case items='potion':
             console.log('potion');
             inventory.push(items);
         break;
        case items='axe':
             console.log('axe');
              inventory.push(items);
         break;
         case items='sword':
             console.log('sword');
              inventory.push(items);
         break;
         default:
             console.log('You found nothing')
         break;
     }
     return inventory;
 }

 /** This function is used to display the items in the users inventory */

 function getInventory(){
    for (i in inventory){
        console.log(inventory);
    }
 }

 /**
  * This function generates a random room in the same way as the random item is generated
  */
 function generateRoom() {
    let randomRoom = Math.floor(Math.random()*10) +1;
    if (randomRoom === 1){
        room = 'corridoor';
    } else if (randomRoom === 2){
        room = 'large room';
    } else if (randomRoom === 3){
        room = 'small room';
    } else if (randomRoom === 4){
        room = 'locked door';
    } else if (randomRoom === 5){
        room = 'bedroom';
    } else if (randomRoom === 6){
        room = 'well';
    } else if (randomRoom === 7){
        room = 'large room 2';
    } else if (randomRoom === 8){
        room = 'corridoor2';
    } else if (randomRoom === 9){
        room = 'small room2';
    } else {
        room = 'cave in';
    }
    return room;
}
         
     
     
 
 
 generateItem();
 checkItemFound();
 getInventory();
 generateItem();
 checkItemFound();
 getInventory();
 generateRoom();
 console.log(room);