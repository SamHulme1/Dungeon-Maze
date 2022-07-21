/** This function uses the Maths.floor and Maths.random 
 * to generate a number between 1-10 and then assign the items variable's 
 * value to it based of the results */
let inventory = [];
let items = '';

function generateItem() {
    let randomItem = Math.floor(Math.random()*10) +1;
    if (randomItem === 1){
        items = 'potion';
        checkItemFound();
    } else if (randomItem === 2){
        items = 'sword';
        checkItemFound();
    } else if (randomItem === 3){
        items = 'axe';
        checkItemFound();
    } else if (randomItem === 4){
        items = 'key';
        checkItemFound();
    } else {
        items= '';
        checkItemFound();
    }
}
/**This function takes the items value from the generateItem function and then 
 * pushes the new item to the inventory.
 */

function checkItemFound(){
        
    if (items.includes('potion')){
         inventory.push('potion');
        
        
    } else if (items.includes('sword')){
        inventory.push('sword');

    } else if (items.includes('axe')){
        inventory.push('axe');
        
    } else if (items.includes('key')){
        inventory.push('key');

    } else {
        console.log("you didn't find anything!");
    }
    
}


generateItem();
console.log(inventory);
console.log(items)