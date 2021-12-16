import ico from '../temp.png';
import '../styles/styles.css';
import '../styles/elections.css';
import '../styles/election_poll.css';
import * as util from './util.js'
import { getCandidates } from './api.js'

// Set drawer tab to active;
const tab = document.getElementById('navElection');
tab.classList.add('active');

let electionId = "none";
function changeElection(id){
    electionId = id;
}

function addCandidateForm(){
    const modal = util.create('div', 'add-candidate-container', 'addCandidateForm');
    const form = util.create('form', 'add-candidate-form', 'addCandidate');
    const name = util.createInput('add-candidate', "Name: ", 'text', "addCandidateName", {placeholder:"Enter candidate's name..."});
    name.addEventListener('input', function(e){
        name.value =  e.srcElement.value;
    })
    const position = util.createInput('add-candidate', "Position: ", 'text','candidatePosition', {placeholder:"Enter candidate's position", list: 'candidacyPosition'});
    position.id = 'candidatePosition';
    position.addEventListener('input', function(e){
        position.value =  e.srcElement.value;
    })
    const submit = util.createInput('btn add-candidate', null, "submit", 'addCandidateBtn', {value: "ADD Candidate"})
    
    form.addEventListener('submit', (e) => {
        const data = { 
            name: name.value,
            position: position.value,
            election_id: electionId
        };    
        fetch('http://localhost:3000/candidates', {
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
        e.preventDefault();
    })
    util.insertChildren(form, [name, position, submit]);
    util.insertChildren(modal, [form]);
    return modal;
}

function renderCandidates(candidates, id){
    const candidacy_list = document.getElementById('candidacyPosition');

    //create container for main content
    const container = util.create('form', 'container', 'content');
    const candidateContainer = util.create('div', 'candidate-poll-container', 'candidatePoll');

    // set form submit action
    container.addEventListener('submit', (e) => {
        const candidacy = candidateContainer.childNodes;
        candidacy.forEach(position => {
            const selected = position.querySelector('input:checked').value;
            const data = {
                voter : "admin",
                name : selected,
                election_id: electionId
            }
            fetch('https://localhost:3000/poll', {
                method: 'post',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type' : 'application/json'
                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        })
        e.preventDefault();
    })

    // insert children to parents accordingly
    document.getElementById('content').appendChild(candidateContainer);

    // render candidates 
    candidates.forEach((candidate) => {
        const poll = document.getElementById(util.camelCase(candidate.position));
        if(poll) createPoll(candidate, poll);
        else {
            // Create new container for every new position candidacy
            candidateContainer.appendChild(createPoll(candidate));

            // Add candidate position to data list
            const newOption = document.createElement('option');
            newOption.value = candidate.position;
            candidacy_list.appendChild(newOption);
        }
    });

    // set new options list for add candidate position form
    const position = document.getElementById('candidatePosition');
    position.setAttribute('list', 'candidacyPosition');
}

function createPoll(candidate, container){
    const input = util.create('input', 'poll-card');
    const label = util.create('label', 'poll-label');
    const name = util.create('span', 'poll-name');
    const ava = document.createElement('img');
    ava.src = ico;
    input.type = "radio";
    input.name = candidate.position;
    input.value = candidate.name;
    name.textContent = candidate.name;
    util.insertChildren(label, [input, ava]);

    if(container){
        const newPoll = util.create('div', 'poll-card');
        const title = util.create('h1', 'poll-title');
        title.textContent = candidate.position;
        util.insertChildren(newPoll, [label, name]);
        container.appendChild(newPoll)
    }else{
        const container = util.create('div', 'poll-container', util.camelCase(candidate.position));
        const newPoll = util.create('div', 'poll-card');
        const title = util.create('h1', 'poll-title');
        title.textContent = candidate.position;
        document.getElementById('candidatePoll').appendChild(title);
        util.insertChildren(newPoll, [label, name]);
        container.appendChild(newPoll);
        return container;
    }
}

(async () => {
    document.body.prepend(addCandidateForm());
    document.getElementById('addCandidateBtn').addEventListener('click', (e) => {
        document.getElementById('addCandidateForm').classList.add('visible');
        e.preventDefault();
    })
    const paramsString = window.location.href;
    const selected_poll = new URLSearchParams(paramsString).get('id');
    changeElection(selected_poll);
    console.log(selected_poll)
    // Wait for WEB to get candidates
    const candidates = async () => {
        const results = await getCandidates(selected_poll);
        return results;
    }
    // Render candidates
    candidates().then(res => renderCandidates(res, selected_poll));
})();

