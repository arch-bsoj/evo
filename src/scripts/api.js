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

export {
    getCandidates,
}