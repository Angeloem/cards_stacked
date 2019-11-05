let topp = document.querySelector("#_2");
let land_rover = document.querySelector("#_1");
let deezer = document.querySelector('#_3');


topp.addEventListener('click', function () {
    if(topp.style.left === '0px') {
        topp.style.left = '90px';
        topp.style.zIndex = '1';
        land_rover.style.left = '0px';
        land_rover.style.zIndex = '3';
        deezer.style.zIndex = '2';
        deezer.style.left = '50px';
    }
});

land_rover.addEventListener('click', function () {
    if (land_rover.style.left === '0px') {
        topp.style.left = '50px';
        topp.style.zIndex = '2';
        land_rover.style.left = '90px';
        land_rover.style.zIndex = '1';
        deezer.style.left = '0px';
        deezer.style.zIndex = '3';
    }
});

deezer.addEventListener('click', function () {
    if(deezer.style.left === '0px') {
        topp.style.left = '0';
        topp.style.zIndex = '3';
        land_rover.style.left = '50px';
        land_rover.style.zIndex = '2';
        deezer.style.left = '90px';
        deezer.style.zIndex = '1';
    }
});
