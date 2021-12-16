
async function getCandidates(id){
    return id ? 
        await fetch(`https://evo-poll.herokuapp.com/candidates/${id}`)
            .then(res => res.json())
            .then(data =>  {
                 return data.candidates;
            }) 
        :
        await fetch(`https://evo-poll.herokuapp.com/candidates`)
            .then(res => res.json())
            .then(data =>  {
                return data.candidates;
            })
    }

async function getVoters(id){
    return id ? 
        await fetch(`https://evo-poll.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data =>  {
                    return data.user;
            }) 
        :
        await fetch(`https://evo-poll.herokuapp.com/users`)
            .then(res => res.json())
            .then(data =>  {
                return data.users;
            })
}

async function checkId(id){
    return await fetch(`https://evo-poll.herokuapp.com/users/${id}`)
        .then(res => res.json())
        .then(data =>  {
            return data.user ? data.user : null;
        }) 
}
export {
    getCandidates,
    getVoters,
    checkId
}