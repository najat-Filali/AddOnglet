//creation d'une classe, bean

function Tab(label) {
    
    this.label =label; 
    this.active = false;  
    this.link = ''; 

}


/* exemple d'untilisation du bean
const tabHome = new Tab('Accueil'); 
tabHome.link = '/'; 
tabHome.active = true; 
console.log(tabHome.label); 
*/