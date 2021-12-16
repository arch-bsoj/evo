async function getCandidates(id){
    return id ? 
        await fetch(`https://localhost:3000/candidates/${id}`)
            .then(res => res.json())
            .then(data =>  {
                 return data.candidates;
            }) 
        :
        await fetch(`https://localhost:3000/candidates`)
            .then(res => res.json())
            .then(data =>  {
                return data.candidates;
            })
    }

export {
    getCandidates,
}