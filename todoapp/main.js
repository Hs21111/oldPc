let active_profile = '';
let added_new_profile = false;

if (localStorage.getItem("username") == null) {
    let username = prompt('Welcome!\nEnter your username:');
    localStorage.setItem("username", username);
}

let userdata = {
    'Important': {
        'Remove range slider': ['Hello', 'Hamdan'],
        'Add dropdown': ['Hello', 'Hamdan'],
    },
    'Work': {
        'Remove range slider': ['Hello', 'Hamdan'],
        'Add dropdown': ['Hello', 'Hamdan'],
    },
    'Health': {
        'Remove range slider': ['Hello', 'Hamdan'],
        'Add dropdown': ['Hello', 'Hamdan'],
    },
    'Wealth': {
        'Remove range slider': ['Hello', 'Hamdan'],
        'Add dropdown': ['Hello', 'Hamdan'],
    },
    'Play': {
        'Remove range slider': ['Hello', 'Hamdan'],
        'Add dropdown': ['Hello', 'Hamdan'],
    }
}

localStorage.setItem('profiles', JSON.stringify(userdata));
console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('profiles'));

document.querySelector('html').style.background = "#101524";
document.querySelector('body').style.display = `flex`;
document.querySelector('body').style.verticalAlign = `center`;
document.querySelector('body').style.overflow = 'scroll';
document.querySelector('body').style.margin = `0px`;

let sidebar = document.createElement('div');
sidebar.style.marginTop = '20px';
sidebar.style.margin = '20px';
sidebar.style.height = `900px`;
sidebar.style.width = `350px`;
sidebar.style.background = `#0a091a`;
sidebar.style.borderRadius = `20px`;
document.body.appendChild(sidebar);
sidebar.style.color = `#FFFFFF`;
sidebar.style.padding = `20px`;
sidebar.style.textAlign = `center`;
sidebar.style.boxShadow = `5px 5px 15px white, -5px -5px 15px white`;

let title = document.createElement('div')
sidebar.appendChild(title);
title.innerText = `Hello, ${localStorage.getItem('username')}`;
title.style.color = '#FFFFFF';
title.style.padding = '20px';
title.style.margin = '20px';
title.style.fontSize = '48px';
title.style.height = 'fit-content';
title.style.padding = '0px';

let main = document.createElement('div');
main.style.height = `943px`;
main.style.width = `1314px`;
main.style.margin = '20px';
main.style.marginLeft = `0px`;
main.style.padding = '0px';
document.body.appendChild(main);

let important_title = document.createElement('div');
important_title.innerText = 'Important';
important_title.style.color = '#FFFFFF';
important_title.style.padding = '20px';
important_title.style.fontSize = '20px';
important_title.style.letterSpacing = '1px';
sidebar.appendChild(important_title);

let important_list = document.createElement('div');
important_list.style.border = '1px solid #FFFFFF';
important_list.style.marginLeft = '3px';
important_list.style.height = `500px`
important_list.style.width = `340px`;
important_list.style.borderRadius = `20px`;
sidebar.appendChild(important_list);

let profiles_title = document.createElement('div');
profiles_title.innerText = 'Profiles';
profiles_title.style.color = '#FFFFFF';
profiles_title.style.padding = '20px';
profiles_title.style.fontSize = '20px';
profiles_title.style.letterSpacing = '1px';
sidebar.appendChild(profiles_title);

let profiles_list = document.createElement('div');
profiles_list.style.border = '1px solid #FFFFFF';
profiles_list.style.marginLeft = '3px';
profiles_list.style.height = `max-content`
profiles_list.style.maxHeight = `170px`;
profiles_list.style.width = `340px`;
profiles_list.style.borderRadius = `20px`;
profiles_list.style.overflow = 'scroll';
sidebar.appendChild(profiles_list);

let main_bar = document.createElement('div');
main_bar.style.display = 'flex';
main_bar.style.width = '1270px';
main_bar.style.height = '50px';
main_bar.style.border = '1px solid #FFFFFF';
main_bar.style.backgroundColor = '#0a091a';
main_bar.style.color = '#FFFFFF';
main_bar.style.marginLeft = '10px';
main_bar.style.borderRadius = `15px`;
main_bar.style.boxShadow = `5px 5px 15px white, -5px -5px 15px white`;
main_bar.style.alignItems = 'center';
main_bar.style.fontSize = '24px';
main_bar.style.paddingLeft = '20px';
main.appendChild(main_bar);


function update() {
    profiles_list.innerText = '';
    for (let i = 1; i < Object.keys(JSON.parse(localStorage.getItem('profiles'))).length; i++) {
        let profile_name = Object.keys(JSON.parse(localStorage.getItem('profiles')))[i];

        let profile_button = document.createElement('button');
        profile_button.style.display = 'flex';
        profile_button.style.height = '40px';
        profile_button.style.width = '320px';
        profile_button.style.border = '1px solid #FFFFFF';
        profile_button.style.margin = '10px';
        profile_button.style.borderRadius = `10px`;
        profile_button.style.fontSize = '24px';
        profile_button.style.alignItems = 'center';
        profile_button.style.justifyContent = 'center';
        profile_button.style.verticalAlign = `center`;
        profile_button.innerText = `${profile_name}`;
        profile_button.setAttribute('onclick', `active_profile = '${profile_name}';`);
        profiles_list.appendChild(profile_button);
        
        main_bar.innerText = `${active_profile}`;
        
        for (let i = 0; i < Object.keys(JSON.parse(localStorage.getItem('profiles'))).length; i++) {
            let profiles = JSON.parse(localStorage.getItem('profiles'))
        }
    }

}

setInterval(update, 500);