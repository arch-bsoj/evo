import ico from '../temp.png';
import '../styles/styles.css';
import '../styles/elections.css';
import * as util from './util.js'
import { getCandidates } from './api.js'



let electionId = "none";

function addElectionForm(){
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

function createCard(id, title, total){
    const card = util.create('div','election-card');
    const cardImage = new Image();
    cardImage.src = ico;
    const cardTitle = util.create('p', 'card-title');
    cardTitle.textContent = title;
    const cardCount = util.create('h6', 'card-count');
    cardCount.textContent = `Total Votes: ${total}`

    util.insertChildren(card, [cardImage, cardTitle, cardCount]);

    card.addEventListener('click', (e) => {
        window.location.href = `/elections/&id=${id}`

        // Wait for WEB to get candidates
        // const candidates = async () => {
        //     const results = await getCandidates(selected_poll);
        //     return results;
        // }
        // // Render candidates
        // candidates().then(res => renderCandidates(res, selected_poll))
    });
    return card;
}

function renderElections(){
    const container = document.getElementById("cards");
    fetch('http://localhost:3000/elections')
        .then(res => res.json())
        .then(data => {
            const elections = data.elections;
            elections.map( election => {
                let total = 0;
                const card = createCard(election.election_id, election.title, total);
                container.appendChild(card);
            });
        });
}

renderElections();

