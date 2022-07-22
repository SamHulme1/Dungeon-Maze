/** This function uses the Maths.floor and Maths.random 
 * to generate a number between 1-10 and then assign the items variable's 
 * value to it based of the results the result is then returned */
 let inventory = [];
 let items =[];
 
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
         
     
     
 
 
 generateItem();
 checkItemFound();
 getInventory();
 generateItem();
 checkItemFound();
 getInventory();