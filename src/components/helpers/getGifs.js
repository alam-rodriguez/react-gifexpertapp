

const getGifs = async( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )  }&limit=10&api_key=90PL5Rs9f3IsV1XRVyw2tRasfLUPtMjb`;
    const reps = await fetch( url );
    const { data } = await reps.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    
    return gifs;
    
}

export default getGifs;