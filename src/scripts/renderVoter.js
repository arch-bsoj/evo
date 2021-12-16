import '../styles/styles.css';
import '../styles/candidates.css';
import '../styles/user.css';
import * as util from './util.js';
import * as api from './api.js';

// Set drawer tab to active;
const tab = document.getElementById('navVoter');
tab.classList.add('active');



const container = document.getElementById('content');
const addBtn = document.getElementById('addVoterBtn');

function addUser(userId, name, image){
    const findUser = async () => {
        const user = await api.checkId(userId);
        return user;
    };
    findUser().then(data => {
        if(data)
            addUser((Math.random() * 200000).toString(), name, image);
    })
    const data = { 
        userId,
        name,
        image,
    };    
    fetch('https://evo-poll.herokuapp.com/add/user', {
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type' : 'application/json'
        })
    }).
    then(res => res.json()).
    then(data => {
        console.log(data);
        location.reload();
    }).
    catch(err => console.log(err));
}

function addVoterForm(){
    const modal = util.create('div', 'modal', 'addVoterForm');
    const form = util.create('form', 'add-voter-form', 'addVoter');
    const name = util.createInput('add-candidate', "Name: ", 'text', "voterName", {placeholder:"Enter Voter's name..."});
    name.addEventListener('input', function(e){
        name.value =  e.srcElement.value;
    })
    const image = util.createInput('add-candidate', "Choose an image:", 'file', 'voterImage', {placeholder:"Enter candidate's name..."});
    
    const submit = util.createInput('btn add-candidate', null, "submit", 'addUserBtn', {value: "ADD Voter"})
    
    form.addEventListener('submit', (e) => {
        const img = image.value ? image.value : "https://img.favpng.com/3/7/23/login-google-account-computer-icons-user-png-favpng-ZwgqcU6LVRjJucQ9udYpX00qa.jpg";
        addUser((Math.random() * 200000).toString(), name.value, img);
        e.preventDefault();
    })
    util.insertChildren(form, [name, image, submit]);
    util.insertChildren(modal, [form]);
    return modal;
}

document.body.prepend(addVoterForm())
addBtn.addEventListener('click', (e) => {
    const form = document.getElementById('addVoterForm');
    form.classList.add('visible');
    e.preventDefault();
})

function renderVoters(voters){
    voters.forEach(voter => {
        const label = util.create('label', 'voter-container', voter.userId);
        const image = util.create('img', 'voter-image');
        image.src = voter.image;
        const name = util.create('p', 'voter-name');
        name.textContent = voter.name;

        util.insertChildren(label, [image, name]);
        container.appendChild(label);
    });
}
(async () => {
    // Wait for WEB to get candidates
    const voters = async () => {
        const results = await api.getVoters();
        return results;
    }
    // Render candidates
    voters().then(res => renderVoters(res));
})()