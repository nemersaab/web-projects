const images = document.getElementsByClassName("image");
console.log(images.length);

let flag=false;
let lastClickedPlayer=images[0];
let lastClickedName=lastClickedPlayer.lastChild.textContent;
class Info{
    constructor(name,age,nationality,club){
        this.name = name;
        this.age=age;
        this.nationality=nationality;
        this.club=club;
    }

}
let infos = [
    new Info("Thuram", 26, "French", "Inter Milan"),
    new Info("Harry Kane", 30, "English", "Bayern Munich"),
    new Info("Martinelli", 22, "Brazilian", "Arsenal"),
    new Info("Alison", 31, "Brazilian", "Liverpool"),
    new Info("Jamal Musiala", 21, "German", "Bayern Munich"),
    new Info("Martin Ødegaard", 25, "Norwegian", "Arsenal"),
    new Info("Alphonso Davies", 23, "Canadian", "Bayern Munich"),
    new Info("Jordi Alba", 34, "Spanish", "Inter Miami"),
    new Info("Mohamed Salah", 31, "Egyptian", "Liverpool"),
    new Info("Álvaro Morata", 31, "Spanish", "AC Milan"),
    new Info("Kai Havertz", 24, "German", "Arsenal"),
    new Info("Neymar Jr", 32, "Brazilian", "Al-Hilal"),
    new Info("Araújo", 24, "Uruguayan", "Barcelona"),
    new Info("Karim Benzema", 35, "French", "Al-Ittihad"),
    new Info("Onana", 27, "Cameroonian", "Manchester United"),
    new Info("Bellingham", 20, "English", "Real Madrid"),
    new Info("Kevin De Bruyne", 32, "Belgian", "Manchester City"),
    new Info("Ousmane Dembélé", 26, "French", "Paris Saint-Germain"),
    new Info("Bruno Fernandes", 29, "Portuguese", "Manchester United"),
    new Info("Koundé", 25, "French", "Barcelona"),
    new Info("Phil Foden", 24, "English", "Manchester City"),
    new Info("Carvajal", 32, "Spanish", "Real Madrid"),
    new Info("Kylian Mbappé", 25, "French", "Paris Saint-Germain"),
    new Info("Rafa Leão", 24, "Portuguese", "AC Milan"),
    new Info("Cole Palmer", 21, "English", "Chelsea"),
    new Info("Lamine Yamal", 16, "Spanish", "Barcelona"),
    new Info("Raphinha", 27, "Brazilian", "Barcelona"),
    new Info("Courtois", 31, "Belgian", "Real Madrid"),
    new Info("Lautaro Martínez", 26, "Argentinian", "Inter Milan"),
    new Info("Robert Lewandowski", 35, "Polish", "Barcelona"),
    new Info("De Ligt", 24, "Dutch", "Manchester United"),
    new Info("Lionel Messi", 36, "Argentinian", "Inter Miami"),
    new Info("Rúben Dias", 26, "Portuguese", "Manchester City"),
    new Info("Emiliano Martínez", 31, "Argentinian", "Aston Villa"),
    new Info("Luis Suárez", 36, "Uruguayan", "Inter Miami"),
    new Info("Son", 31, "South Korean", "Tottenham Hotspur"),
    new Info("Erling Haaland", 23, "Norwegian", "Manchester City"),
    new Info("Luka Modrić", 38, "Croatian", "Real Madrid"),
    new Info("Theo Hernández", 26, "French", "AC Milan"),
    new Info("Garnacho", 19, "Argentinian", "Manchester United"),
    new Info("Mac Allister", 25, "Argentinian", "Liverpool"),
    new Info("Van Dijk", 32, "Dutch", "Liverpool"),
    new Info("Gavi", 19, "Spanish", "Barcelona"),
    new Info("Marco Asensio", 28, "Spanish", "Paris Saint-Germain"),
    new Info("Vini Jr", 23, "Brazilian", "Real Madrid"),
    new Info("Griezmann", 32, "French", "Atletico Madrid"),
    new Info("Marcus Rashford", 26, "English", "Manchester United"),
    new Info("Pogba", 30, "French", "Juventus"),
    new Info("Pulisic", 25, "American", "AC Milan"),
    new Info("Casemiro", 32, "Brazilian", "Manchester United"),
    new Info("Drogba", 45, "Ivorian", "Retired"),
    new Info("David Silva", 37, "Spanish", "Retired"),
    new Info("Mane", 32, "Senegalese", "Al-Nassr"),
    new Info("De Jong", 26, "Dutch", "Barcelona"),
    new Info("Sommer", 35, "Swiss", "Inter Milan"),
    new Info("Willian", 35, "Brazilian", "Fulham"),
    new Info("Thiago Silva", 39, "Brazilian", "Chelsea"),
    new Info("Ryan Giggs", 50, "Welsh", "Retired"),
    new Info("Pique", 36, "Spanish", "Retired"),
    new Info("Walker", 34, "English", "Manchester City"),
    new Info("Kaka", 41, "Brazilian", "Retired"),
    new Info("Busquets", 36, "Spanish", "Inter Miami"),
    new Info("Puyol", 46, "Spanish", "Retired"),
    new Info("Ramos", 38, "Spanish", "Sevilla"),
    new Info("Kroos", 34, "German", "Real Madrid"),
    new Info("Ibrahimovic", 42, "Swedish", "Retired"),
    new Info("Ronaldinho", 44, "Brazilian", "Retired"),
    new Info("Ronaldo", 47, "Brazilian", "Retired"),
    new Info("Xavi", 43, "Spanish", "Retired"),
    new Info("Iniesta", 39, "Spanish", "Emirates Club"),
    new Info("Zidane", 51, "French", "Retired"),
    new Info("Henry", 46, "French", "Retired"),
    new Info("Cristiano Ronaldo", 39, "Portuguese", "Al-Nassr"),
    new Info("Ozil", 35, "German", "Retired"),
    new Info("Marquinhos", 29, "Brazilian", "Paris Saint-Germain"),
    new Info("Thomas Muller", 34, "German", "Bayern Munich"),
    new Info("Kimmich", 28, "German", "Bayern Munich"),
    new Info("Iker Casillas", 43, "Spanish", "Retired"),
    new Info("Robben", 39, "Dutch", "Retired"),
    new Info("Kvaratskhelia", 23, "Georgian", "Napoli"),
    new Info("Riyad Mahrez", 33, "Algerian", "Al-Ahli"),
    new Info("Manuel Neuer", 38, "German", "Bayern Munich"),
    new Info("Pau Cubarsi", 17, "Spanish", "Barcelona")
];

function getInfoByPlayer(image){
    let i=0;
    while(i<infos.length){
        if(image==images[i]){
            return infos[i];
        }
        i++;
    }
    return false;
}
for(let image of images){
    const playerInfo=getInfoByPlayer(image);
    const value=`club:\n ${playerInfo.club}\nnationality: \n${playerInfo.nationality}\nage: \n${playerInfo.age}`;
    const cap=image.lastChild;
    image.addEventListener('click',()=>{
        image.classList.toggle('hidden');
        if(flag){
            console.log("ok",lastClickedName);
            lastClickedPlayer.lastChild.textContent = lastClickedName;}
        lastClickedName=cap.textContent;
        lastClickedPlayer=image;
        cap.textContent += value; 
        flag=true;
    })

}
