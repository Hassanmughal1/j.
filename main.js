function currencydropdownopen(){
    const dropdowncontent = document.getElementById ('currency-options');
    const arrow = document.querySelector ('.dropdown-arrow');

    if(dropdowncontent.style.display == 'block'){
        dropdowncontent.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }else{
        dropdowncontent.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
}

function openCountryModal() {
    const modal = document.querySelector('.select-country');
    const closemodal = document.querySelector('.close-select-country');

    modal.style.display = 'block';
    closemodal.style.display = 'flex';
    
}

function closeCountryModal() {
    const modal = document.querySelector('.select-country');
    const closemodal = document.querySelector('.close-select-country');

    modal.style.display = 'none';
    closemodal.style.display = 'none';
}

function opensidebar() {
    const sidebar = document.getElementById ('sidebar');

        sidebar.style.marginLeft = '0';
}

function closesidebar() {
    const sidebar = document.getElementById ('sidebar');


        sidebar.style.marginLeft = '-100%';
}