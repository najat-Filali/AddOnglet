//code metier
const formAddTab = document.forms.addTab; 
const mainMenu = document.querySelector('.main-menu'); 

const tabsStored = localStorage.getItem('tabs'); 

if (tabsStored){
    tabsMainMenu = JSON.parse(tabsStored); 
}

createMenuHTML(tabsMainMenu); 

formAddTab.addEventListener('submit', function(e) {
    e.preventDefault();         //supprime action form par defaut(évite recharge le form à zero)

    const userInput = formAddTab.tab.value; 

    if(userInput.length > 3 ){
        tabsMainMenu.push(new Tab(userInput)); 
        localStorage.setItem('tabs',JSON.stringify(tabsMainMenu));
        createMenuHTML(tabsMainMenu); 
        formAddTab.reset();     //reinitialise les champs du formulaire
    }
    
}); 


