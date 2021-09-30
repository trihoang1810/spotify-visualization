import {StyledGrid} from '../styles';

const ArtistGrid = ({artists}) => {
    return (
        <>
            {artists && artists.length ? (
                <StyledGrid type = "artist">
                    {
                        artists.map((artist,index) => (
                            <li className="grid__item" key={index}>
                                <div className ="grid__item__inner">
                                    {artist.images && (
                                     <div className ="grid__item__img">
                                         <img src={artist.images[0].url} alt={artist.name}/>
                                     </div>   
                                    )}
                                    <h3 className="grid__item__name overflow-ellipsis">{artist.name}</h3>
                                    <p className="grid__item__label">Artist</p>
                                </div>
                            </li>
                        ))
                    }
                </StyledGrid>
            ) : (
                <p className="empty-notice">No artist available</p>
            )} 
        </>
    );
}

export default ArtistGrid;