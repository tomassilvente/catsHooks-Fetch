export const getRandomFact = async () =>{
    const res = await fetch('https:/catfact.ninja/fact')
    const response = await res.json()
    const { fact } = response
    return fact
}