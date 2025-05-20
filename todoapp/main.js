function fitTextToContainer(element, minFontSize = 10) {
    let fontSize = parseInt(window.getComputedStyle(element).fontSize);

    while (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
        if (fontSize <= minFontSize) break; // don’t go below this size
        fontSize -= 1;
        element.style.fontSize = fontSize + "px";
    }
}

let added_new_profile = true;
let added_new_important_task = true;
let added_new_task_list = true;

if (localStorage.getItem("username") == null) {
    //let username = prompt('Welcome!\nEnter your username:');
    //localStorage.setItem("username", username);
    ///*
    let dialog = document.createElement('dialog');
    let fieldset = document.createElement('fieldset');
    let textField = document.createElement('input');
    let legend = document.createElement('legend');
    let submitButton = document.createElement('button');

    legend.innerText = 'Welcome! Enter your username:';
    submitButton.innerText = 'OK';

    textField.setAttribute('type', 'text');

    dialog.appendChild(fieldset);
    dialog.appendChild(submitButton);
    fieldset.appendChild(legend);
    fieldset.appendChild(textField);

    dialog.style.height = '400px';
    dialog.style.width = '500px';
    dialog.style.display = 'flex';
    dialog.style.justifyContent = 'center';
    dialog.style.alignItems = 'center';
    dialog.style.borderRadius = '20px';
    dialog.style.backgroundColor = '#0a091a';
    dialog.style.color = 'white';
    dialog.style.boxShadow = '5px 5px 15px #FFFFFF, 5px 5px 15px #FFFFFF, -5px -5px 15px #FFFFFF, -5px -5px 15px #FFFFFF ';
    dialog.style.flexDirection = 'column';

    fieldset.style.scale = '1.5';

    textField.style.backgroundColor = 'transparent';
    textField.style.color = 'white';
    textField.style.border = 'none';
    textField.style.fontSize = '18px';
    document.body.appendChild(dialog);

    submitButton.style.marginTop = '60px';
    submitButton.style.scale = '2';
    submitButton.style.border = '3px solid white';
    submitButton.style.borderRadius = '5px';

    dialog.showModal();

    submitButton.addEventListener('click', () => {
        localStorage.setItem("username", textField.value);
        window.location.reload();
    })
    //*/
}

let userdata = {
    'Important': [['Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.', 1], ['Hamdan', 0]],
    'Work': {
        'Remove range slider': [['Hello', 1], ['Hamdan', 1]],
        'Add dropdown': [['Hello', 1], ['Hamdan', 1]],
    },
    'Health': {
        'Remove range slider': [['Hello', 1], ['Hamdan', 1]],
        'Add dropdown': [['Hello', 1], ['Hamdan', 1]],
    },
    'Wealth': {
        'Remove range slider': [['Hello', 1], ['Hamdan', 1]],
        'Add dropdown': [['Hello', 1], ['Hamdan', 1]],
        'Hello': [['Hello', 1], ['Hamdan', 1]],
        'Hamdan': [['Hello', 1], ['Hamdan', 1]],
    },
    'Play': {
        'Remove range slider': [['Hello', 1], ['Hamdan', 1]],
        'Add dropdown': [['Hello', 1], ['Hamdan', 1]],
    }
}

localStorage.setItem('profiles', JSON.stringify(userdata));
console.log(localStorage.getItem('username'));
console.log(localStorage.getItem('profiles'));

document.querySelector('html').style.background = "#101524";
document.querySelector('body').style.display = `flex`;
document.querySelector('body').style.verticalAlign = `center`;
document.querySelector('body').style.overflow = 'hidden';
document.querySelector('body').style.overflowY = 'hidden';
document.querySelector('body').style.margin = `0px`;

let sidebar = document.createElement('div');
sidebar.style.marginTop = '20px';
sidebar.style.margin = '20px';
sidebar.style.height = `890px`;
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
title.style.maxHeight = '60px';
window.addEventListener('resize', () => fitTextToContainer(title));

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
important_list.style.border = '3px solid #FFFFFF';
important_list.style.marginLeft = '3px';
important_list.style.height = `500px`
important_list.style.width = `340px`;
important_list.style.borderRadius = `20px`;
important_list.style.overflow = 'scroll';
important_list.style.overflowX = 'hidden';
sidebar.appendChild(important_list);

let profiles_title = document.createElement('div');
profiles_title.innerText = 'Profiles';
profiles_title.style.color = '#FFFFFF';
profiles_title.style.padding = '20px';
profiles_title.style.fontSize = '20px';
profiles_title.style.letterSpacing = '1px';
profiles_title.style.display = 'flex';
profiles_title.style.justifyContent = 'space-between';
sidebar.appendChild(profiles_title);

let profiles_control_add = document.createElement('div');
let profiles_control_add_icon = document.createElement('i');
profiles_control_add_icon.classList.add('fa');
profiles_control_add_icon.classList.add('fa-plus');
profiles_control_add_icon.style.marginRight = '5px';
let profiles_control_add_button = document.createElement('button');
profiles_control_add_button.append(profiles_control_add_icon);
profiles_control_add_button.append('Add profile');
profiles_control_add_button.classList.add('control_add');
profiles_control_add.appendChild(profiles_control_add_button);
profiles_title.appendChild(profiles_control_add);
profiles_control_add.style.justifyContent = 'flex-end';

profiles_control_add_button.addEventListener('click', () => {
    let dialog = document.createElement('dialog');
    profiles_control_add.appendChild(dialog);
    dialog.classList.add('dialog');

    let fieldset = document.createElement('fieldset');

    let legend = document.createElement('legend');
    legend.innerText = 'Name of new profile:\n';
    fieldset.appendChild(legend);

    let submitButton = document.createElement('button');
    submitButton.innerText = 'Add';

    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';

    let new_profile_field = document.createElement('input');
    new_profile_field.setAttribute('type', 'text');
    new_profile_field.setAttribute('placeholder', 'Eg: Work');
    new_profile_field.style.fontSize = '32px';
    new_profile_field.style.width = '300px';
    new_profile_field.style.height = '50px';
    new_profile_field.style.color = '#FFFFFF';
    new_profile_field.style.border = 'none';
    new_profile_field.style.backgroundColor = 'transparent';
    fieldset.appendChild(new_profile_field);

    submitButton.style.scale = '2';
    submitButton.style.marginTop = '70px';
    submitButton.style.border = '3px solid #FFFFFF';
    submitButton.style.borderRadius = '5px';

    cancelButton.style.scale = '2';
    cancelButton.style.marginTop = '70px';
    cancelButton.style.border = '3px solid #FFFFFF';
    cancelButton.style.borderRadius = '5px';

    let buttons = document.createElement('div');
    buttons.style.display = 'flex';
    buttons.style.width = '500px';
    buttons.style.justifyContent = 'space-evenly';

    dialog.appendChild(fieldset);
    buttons.appendChild(cancelButton);
    buttons.appendChild(submitButton);
    dialog.appendChild(buttons);
    dialog.showModal();

    submitButton.addEventListener('click', () => {
        if (new_profile_field.value !== '' && !Object.keys(JSON.parse(localStorage.getItem('profiles'))).includes(new_profile_field.value, 0)) {
            console.log(localStorage['profiles']);
            let profiles = JSON.parse(localStorage.getItem('profiles'));
            profiles[new_profile_field.value] = {};
            console.log(profiles);
            localStorage['profiles'] = JSON.stringify(profiles);
            console.log(localStorage['profiles']);
            added_new_profile = true;
            dialog.close();
        } else {
            alert('The profile is already present or the name you entered is invalid.');
        }
    });

    cancelButton.addEventListener('click', () => {
        dialog.close();
    })
});

let profiles_list = document.createElement('div');
profiles_list.style.border = '3px solid #FFFFFF';
profiles_list.style.marginLeft = '3px';
profiles_list.style.height = `max-content`
profiles_list.style.maxHeight = `170px`;
profiles_list.style.width = `340px`;
profiles_list.style.borderRadius = `20px`;
profiles_list.style.overflowY = 'auto';
profiles_list.style.overflowX = 'hidden';
profiles_list.style.display = 'grid';
profiles_list.style.gridTemplateColumns = 'auto auto';
sidebar.appendChild(profiles_list);

let main_bar = document.createElement('div');
main_bar.style.display = 'flex';
main_bar.style.width = '1270px';
main_bar.style.height = '50px';
main_bar.style.border = '1px solid #FFFFFF';
main_bar.style.backgroundColor = '#0a091a';
main_bar.style.color = '#FFFFFF';
main_bar.style.marginLeft = '10px';
main_bar.style.marginBottom = '30px';
main_bar.style.borderRadius = `15px`;
main_bar.style.boxShadow = `5px 5px 15px white, -5px -5px 15px white`;
main_bar.style.alignItems = 'center';
main_bar.style.fontSize = '24px';
main_bar.style.paddingLeft = '20px';
main.appendChild(main_bar);

let main_content = document.createElement('div');
main_content.setAttribute('id', 'main-content');
main_content.style.display = 'grid';
main_content.style.textAlign = 'center';
main_content.style.margin = '13px';
main_content.style.width = '1285px';
main_content.style.height = '860px';
main_content.style.borderRadius = `15px`;
main_content.style.overflowY = 'scroll';
main_content.style.gridTemplateColumns = '1fr 1fr 1fr';
main.appendChild(main_content);

function update() {
    if (added_new_profile) {
        profiles_list.innerHTML = '';
        for (let i = 1; i < Object.keys(JSON.parse(localStorage.getItem('profiles'))).length; i++) {
            let profile_name = Object.keys(JSON.parse(localStorage.getItem('profiles')))[i];

            let profiles_control = document.createElement('div');
            let profiles_control_icon = document.createElement('i');
            profiles_control_icon.classList.add('fa');
            profiles_control_icon.classList.add('fa-ellipsis');
            profiles_control_icon.style.marginRight = '20px';
            let profiles_control_button = document.createElement('button');
            profiles_control_button.style.backgroundColor = 'transparent';
            profiles_control_button.style.boxShadow = 'none';
            profiles_control_button.style.border = 'none';
            profiles_control_button.append(profiles_control_icon);
            profiles_control.appendChild(profiles_control_button);

            profiles_control_button.addEventListener('click', () => {
                let profiles_controls_dialog = document.createElement('dialog');
                let profiles_controls_edit_button = document.createElement('button');
                let profiles_controls_edit_icon = document.createElement('i');
                profiles_controls_edit_icon.classList.add('fa-light');
                profiles_controls_edit_icon.classList.add('fa-pen-to-square');
                profiles_controls_edit_icon.style.marginRight = '20px';
                profiles_controls_edit_button.appendChild(profiles_controls_edit_icon);
            });

            let profile_button = document.createElement('button');
            profile_button.style.display = 'flex';
            profile_button.style.justifyContent = 'space-between';
            profile_button.style.height = '40px';
            profile_button.style.width = '285px';
            profile_button.style.border = '1px solid #FFFFFF';
            profile_button.style.margin = '10px';
            profile_button.style.paddingLeft = '15px';
            profile_button.style.borderRadius = `10px`;
            profile_button.style.fontSize = '24px';
            profile_button.style.alignItems = 'center';
            profile_button.style.justifyContent = 'space-between';
            profile_button.style.verticalAlign = `center`;
            profile_button.style.transition = '0.1s ease-in-out';
            profile_button.innerText += `${profile_name}`;
            profile_button.classList.add('profile_button');
            profile_button.addEventListener('click', () => {
                main_content.innerText = '';
                main_bar.innerText = profile_name;

                let profiles = JSON.parse(localStorage.getItem('profiles'));

                console.log(profiles);

                console.log(profile_name);
                Object.keys(profiles[profile_name]).forEach((element) => {
                    let tasklist = document.createElement('div');
                    tasklist.style.margin = '10px';
                    tasklist.style.height = '400px';
                    tasklist.style.width = '400px';
                    tasklist.style.display = 'inline-block';
                    tasklist.style.border = '1px solid #FFFFFF';
                    tasklist.style.borderRadius = `15px`;
                    tasklist.style.boxShadow = `2px 2px 10px white, -2px -2px 10px white`;
                    tasklist.style.backgroundColor = '#0a091a';

                    let task_list_title = document.createElement('div');
                    task_list_title.innerText = element;
                    task_list_title.style.color = '#FFFFFF';
                    task_list_title.style.textAlign = 'center';
                    task_list_title.style.fontSize = '20px';
                    task_list_title.style.width = '380px';
                    task_list_title.style.height = '20px';
                    task_list_title.style.padding = '10px';
                    task_list_title.style.borderBottom = '3px solid #FFFFFF';
                    task_list_title.style.borderBottomLeftRadius = '-15px';
                    task_list_title.style.borderBottomRightRadius = '-15px';
                    tasklist.appendChild(task_list_title);

                    let task_box =  document.createElement('div');
                    task_box.style.display = 'block';
                    task_box.style.height = '356px';
                    task_box.style.overflowY = 'scroll';
                    tasklist.appendChild(task_box);

                    main_content.appendChild(tasklist);
                    profiles[profile_name][element].forEach((task_name) => {
                        console.log(`Task: ${task_name}`);
                        let task_container = document.createElement('div');

                        let checkbox =  document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.style.marginRight = '10px';

                        let task = document.createElement('span');
                        task.style.textDecoration = 'line-through 3px';

                        checkbox.addEventListener('change', (event) => {
                            if (event.target.checked) {
                                task.style.textDecorationColor = '#FFFFFF';
                                task_name[1] = 1;
                            } else {
                                task.style.textDecorationColor = 'transparent';
                                task_name[1] = 0;
                            }
                        });

                        if (task_name[1]) {
                            task.style.textDecorationColor = '#FFFFFF';
                        } else {
                            task.style.textDecorationColor = 'transparent';
                        }

                        if (task_name[1]) {
                            checkbox.checked = true;
                        }

                        task.style.transition = 'all 0.3s ease-in-out';

                        task_container.appendChild(checkbox);

                        task.innerText = task_name[0];
                        task_container.style.color = '#FFFFFF';
                        task_container.style.display = 'flex';
                        task_container.style.margin = '10px';
                        task_container.style.padding = '10px';
                        task_container.style.border = '1px solid #FFFFFF';
                        task_container.style.height = 'max-content';
                        task_container.style.borderRadius = `7.5px`;

                        task_container.appendChild(task);

                        task_box.appendChild(task_container);

                    });
                });

            });
            profiles_list.appendChild(profile_button);
            profiles_list.appendChild(profiles_control_button);

            console.log(JSON.parse(localStorage.getItem('profiles'))[main_bar.innerText]);
        }

        added_new_profile = false;
    }

    if (added_new_important_task) {
        let profiles = JSON.parse(localStorage.getItem('profiles'));
        important_list.innerText = '';
        profiles['Important'].forEach(element => {
            let important_task = document.createElement('div');
            important_task.innerText = '';

            console.log(important_task);

            let checkbox =  document.createElement('input');
            checkbox.type = 'checkbox';
            important_task.appendChild(checkbox);

            console.log(checkbox);
            console.log(checkbox.checked);

            let task_text = document.createElement('span');
            task_text.style.textDecoration = 'line-through 3px';

            checkbox.addEventListener('change', (event) => {
                if (event.target.checked) {
                    task_text.style.textDecorationColor = '#FFFFFF';
                } else {
                    task_text.style.textDecorationColor = 'transparent';
                }
            });

            if (element[1]) {
                checkbox.checked = true;
            }

            if (checkbox.checked) {
                task_text.style.textDecorationColor = '#FFFFFF';
                element[1] = 1;
            } else {
                task_text.style.textDecorationColor = 'transparent';
                element[1] = 0;
            }

            task_text.style.transition = 'text-decoration-color 0.6s ease-in-out';

            checkbox.style.marginRight = '10px';

            task_text.classList.add('task');

            task_text.innerText = element[0];
            important_task.style.display = 'flex';
            important_task.style.alignItems = 'center';
            important_task.style.fontSize = '18px';
            important_task.style.height = 'max-content';
            important_task.style.minHeight = '40px';
            important_task.style.width = '280px';
            important_task.style.borderRadius = `10px`;
            important_task.style.border = '1px solid #FFFFFF';
            important_task.style.margin = '10px';
            important_task.style.padding = '10px';
            important_task.style.paddingLeft = '20px';
            important_task.style.paddingRight = '20px';
            important_task.style.whiteSpace = 'normal';
            important_task.style.wordBreak = 'keep-all';
            important_task.style.transition = 'text-decoration 0.3s ease-in';

            important_task.appendChild(task_text);
            important_list.appendChild(important_task);
        });

        added_new_important_task = false;
    }


}

setInterval(update, 1);