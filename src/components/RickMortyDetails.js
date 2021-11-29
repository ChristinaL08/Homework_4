const RickMortyDetails = ({character, loaded}) => {
    if(!loaded){
        return(
        <p> “What, so everyone's supposed to sleep every single night now?</p>
        );
    }
    return (
<>
<h3>Character Name: {character.name}</h3>
<h4> Status: {character.status}</h4>
<h4> Location: {character.location.name}</h4>
<h4>Gender: {character.gender}</h4>
<img src={character.image} alt="character" width="500" height="600"></img>



</>
    )
}
export default RickMortyDetails;
