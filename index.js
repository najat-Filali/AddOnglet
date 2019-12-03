
//code metier
const formAddTab = document.forms.addTab; 
const mainMenu = document.querySelector('.main-menu'); 

createMenuHTML(tabsMainMenu); 

formAddTab.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = formAddTab.tab.value; 
    if(userInput.length > 3 ){
        tabsMainMenu.push(new Tab(userInput)); 
        createMenuHTML(tabsMainMenu); 
        formAddTab.reset(); 
    }
}); 

