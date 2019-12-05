/**
 * cette fonction sert a générer une structure HTML pour un menu. 
 * @param {string[]} tabs Liste des onglets de menu
 */
function createMenuHTML(tabs){
    if (Array.isArray(tabs)){
        mainMenu.innerHTML =`
        <ul>
             ${tabs.map(tab => ( 
                 `<li>${tab.label} </li>`
             )).join('')}
        </ul>
        `;
    }
}