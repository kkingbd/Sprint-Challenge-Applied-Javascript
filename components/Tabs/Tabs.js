class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement = tabElement;
    
    this.tabData = this.tabElement.dataset.tab;


    if(this.tabData === "all") {

      this.cards = document.querySelectorAll(".card");

    } else {

      this.cards = document.querySelectorAll(`.card[data-tab = ${this.tabData}]`);
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));


// Add a click event that invokes this.selectTab

    this.tabElement.addEventListener("click", () => this.selectTab());

    // Add a click event that invokes this.selectTab
    // this.tabElement.addEventListener();
}
  selectTab(){
    // Select all elements with the .tab class on them
    // const tabs = document.querySelectorAll();
    const tabs = document.querySelectorAll(".tab");

    // Iterate through the NodeList removing the .active-tab class from each element
    // tabs.forEach()
    tabs.forEach(tab => tab.classList.remove(".active-tab"));

    // Select all of the elements with the .card class on them
    // const cards = ;
    const cards = document.querySelectorAll(".card");

    // Iterate through the NodeList setting the display style each one to 'none'
    // cards.forEach()
    cards.forEach(card => card.style.display = "none");

    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
    this.tabElement.classList.add(".active-tab");

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    // this.cards.forEach(card => card.selectCard());
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. 
    //Just un-comment the code and study what is happening here.
    this.cards.forEach(card => card.selectCard());

  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
    // this.cardElement;
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
    this.cardElement.style.display = "flex";
  }
}
/* START HERE: 
- Select all classes named ".tab" and assign that value to the tabs variable
- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter
*/
let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));