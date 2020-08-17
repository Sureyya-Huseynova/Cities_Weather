// searc result
var searchInput = document.getElementById('search_input');
var searchButton = document.getElementById('search_icon');
searchButton.addEventListener('click', App);

// take city api and show suitable icon for city weather (sunny, cloudly or sun cloud)
function App() {
    var searchInputValue = searchInput.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchInputValue + '&appid=3aa2b4867233e082f44c3be45ec7b4c6&units=metric')
        .then(res => res.json())
        .then(data => {
            var ui =new UIsearchResult();
            ui.Ui(data);
            var temp_Icon = document.querySelector('.temp_icon');
            var Temperature_City = data.main.temp; // seherin temperatoru

            if(Temperature_City >= 25){  
                temp_Icon.innerHTML=`<i class="fas fa-sun  city_icon" style="margin-left:40%; color:orange; font-size:3rem"></i>`
            }
            else if(Temperature_City > 18 && Temperature_City <25){
                temp_Icon.innerHTML=`<i class="fas fa-cloud  city_icon" style="margin-left:40%; font-size:3rem"></i>
                <i class="fas fa-sun sun city_icon" style="margin-left:46%; color:orange; font-size:3rem"></i>`;      
            }
            else if(Temperature_City <= 18){
                temp_Icon.innerHTML=`<i class="fas fa-cloud-showers-heavy city_icon" style="margin-left:40%; font-size:3rem"></i>`;
            }
        });     
};

// container  Baku Sumqayit Ankara kardlari api
function baku(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Baku&appid=3aa2b4867233e082f44c3be45ec7b4c6&units=metric')
    .then(res => res.json())
    .then(data => {
       var ui =new UIContainer();
       ui.Baku(data);
    });
}
baku();

function Ankara(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Ankara&appid=3aa2b4867233e082f44c3be45ec7b4c6&units=metric')
    .then(res => res.json())
    .then(data => {  
       var ui =new UIContainer();
       ui.Ankara(data);
    });
}
Ankara();

function Sumqayit(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Sumqayit&appid=3aa2b4867233e082f44c3be45ec7b4c6&units=metric')
    .then(res => res.json())
    .then(data => {
       var ui =new UIContainer();
       ui.Sumqayit(data);
    });
}
Sumqayit();



// footer registration send message chekup

var inputName = document.getElementById('name');
var inputEmail = document.getElementById('email');
var inputMessage= document.getElementById('message');
var sendbtn = document.getElementById('send');

sendbtn.addEventListener('click', send);
function send(e){
    e.preventDefault();

    inputName.style.borderBottom='1px solid white';
    inputEmail.style.borderBottom='1px solid white';
    inputMessage.style.borderBottom='1px solid white';

    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(inputEmail.value) == false) {
        inputEmail.style.borderBottom='1px solid red'
    }
    if(inputName.value == ''){
        inputName.style.borderBottom='1px solid red'
    }
    else if(inputEmail.value == ''){
        inputEmail.style.borderBottom='1px solid red'
    }else if(inputMessage.value == ''){
        inputMessage.style.borderBottom='1px solid red'
    }
    else{
        sendbtn.style.background='green';
    }
};
  



