let categories= document.getElementById('categoriesCardsContainer');
let alaCartecategorie= document.getElementById('alacateCardsContainer');
let signatureCategory= document.getElementById('sinatureCardsContainer');
let sharingCategory= document.getElementById('sharingCardsContainer');
let snacksCategory= document.getElementById('snacksCardsContainer');
let midnightCategory= document.getElementById('midnightCardsContainer');



let button1= document.getElementById('button1');
let button2= document.getElementById('button2');
let button3= document.getElementById('button3');
let button4= document.getElementById('button4');
let button5= document.getElementById('button5');
let button6= document.getElementById('button6');

let bucket= document.getElementById('bucket');
let write= document.getElementById('write');
// let addBucket= document.getElementById('addBucket');
let addBucket = 0;
let browseCatergory= document.getElementById('browseCatergory');





function addbuck(){
    // write= bucket+addBucket;
    document.getElementById('write').innerHTML= addBucket++;
}









function showCategories()
{
    if(categories.style.display=='none' && button1.style.display=='none')
    {
        categories.style.display='block';
        browseCatergory.style.display='none';
        alaCartecategorie.style.display='none';
        snacksCategory.style.display='none';
        signatureCategory.style.display='none';
        midnightCategory.style.display='none';
        sharingCategory.style.display='none';
        button1.style.display='flex';
    }
    else{
        categories.style.display='none';
    }
}


function showalaCarteCategories()
{
    if(alaCartecategorie.style.display=='none' && button2.style.display=='none')
    {
        categories.style.display='none';
        signatureCategory.style.display='none';
        alaCartecategorie.style.display='block';
        browseCatergory.style.display='none';
        snacksCategory.style.display='none';
        sharingCategory.style.display='none';
        midnightCategory.style.display='none';
        button2.style.display='flex';
    }
    else{
        alaCartecategorie.style.display='none';
    }
}



function signatureCategories()
{
    if(signatureCategory.style.display=='none' && button3.style.display=='none')
    {
        categories.style.display='none';
        signatureCategory.style.display='block';
        alaCartecategorie.style.display='none';
        browseCatergory.style.display='none';
        sharingCategory.style.display='none';
        midnightCategory.style.display='none';
        snacksCategory.style.display='none';
        button3.style.display='flex';
    }
    else{
        signatureCategory.style.display='none';
    }
}



function sharingCategories()
{
    if(sharingCategory.style.display=='none' && button4.style.display=='none')
    {
        categories.style.display='none';
        signatureCategory.style.display='none';
        sharingCategory.style.display='block';
        alaCartecategorie.style.display='none';
        browseCatergory.style.display='none';
        midnightCategory.style.display='none';
        snacksCategory.style.display='none';

        button4.style.display='flex';
    }
    else{
        sharingCategory.style.display='none';
    }
}


function snacksCategories()
{
    if(snacksCategory.style.display=='none' && button5.style.display=='none')
    {
        categories.style.display='none';
        signatureCategory.style.display='none';
        snacksCategory.style.display='block';
        sharingCategory.style.display='none';
        alaCartecategorie.style.display='none';
        browseCatergory.style.display='none';
        midnightCategory.style.display='none';
        button5.style.display='flex';
    }
    else{
        snacksCategory.style.display='none';
    }
}



function midnightCategories()
{
    if(midnightCategory.style.display=='none' && button6.style.display=='none')
    {
        categories.style.display='none';
        signatureCategory.style.display='none';
        midnightCategory.style.display='block';
        snacksCategory.style.display='none';
        sharingCategory.style.display='none';
        alaCartecategorie.style.display='none';
        browseCatergory.style.display='none';
        button6.style.display='flex';
    }
    else{
        midnightCategory.style.display='none';
    }
}







var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}




