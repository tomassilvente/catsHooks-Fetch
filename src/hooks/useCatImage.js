import { useEffect, useState } from "react"

export function useCatImage({phrase}){
    const [image, setImage] = useState('')

    useEffect( () =>{
      if(!phrase) return
      const threeFirstWords = phrase.split(' ', 3).join(' ')

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => {
          return res.json()
        })
        .then(response => {
          const {_id} = response
          setImage(`https://cataas.com/cat/${_id}/says/${threeFirstWords}`)
        })
    }, [phrase])

    return { image }
  }
