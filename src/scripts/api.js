async function getCandidates(id){
    return id ? 
        await fetch(`http://localhost:3000/candidates/${id}`)
            .then(res => res.json())
            .then(data =>  {
                 return data.candidates;
            }) 
        :
        await fetch(`http://localhost:3000/candidates`)
            .then(res => res.json())
            .then(data =>  {
                return data.candidates;
            })
    }

export {
    getCandidates,
}