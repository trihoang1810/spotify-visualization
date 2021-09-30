import { useState, useEffect, useMemo } from 'react';
import {useParams} from 'react-router-dom';
import {getPlaylistById, getAudioFeaturesForTracks} from '../spotify';
import {StyledHeader} from '../styles';
import axios from 'axios';
import {TrackList,SectionWrapper,Loader} from '../components';
const Playlist = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState(null);
    const [tracksData, setTracksData] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [audioFeatures, setAudioFeatures] = useState(null);
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const { data } = await getPlaylistById( id );
                setPlaylist(data);
                setTracksData(data.tracks);
            } catch (e){
                console.error(e);
            }
        }
        fetchData();
    },[id]);
    const tracksForTrackList = useMemo(() => {
        if (!tracks){
            return;
        }
        return tracks.map(({ track }) => track );
    },[tracks]);
    // When tracksData updates, compile arrays of tracks and audioFeatures
  useEffect(() => {
    if (!tracksData) {
      return;
    }
    try {
    // When tracksData updates, check if there are more tracks to fetch
    // then update the state variable
    const fetchMoreData = async () => {
        
      if (tracksData.next) {
        const { data } = await axios.get(tracksData.next);
        setTracksData(data);
      }
    };
    setTracks(tracks => ([
      ...tracks ? tracks : [],
      ...tracksData.items
    ]));
    fetchMoreData();
    }
    catch(e){
        console.error(e);
    }
    const fetchAudioFeatures = async () => {
        try{
            const ids = tracksData.items.map(({ track})=> track.id).join(',');
            const { data } = await getAudioFeaturesForTracks(ids);
            setAudioFeatures(audioFeatures => ([
                ...audioFeatures ? audioFeatures : [],
                ...data['audio_features']
            ]));
        } catch (e){
            console.error(e);
        }

    }
    fetchAudioFeatures();
  }, [tracksData]);


    console.log(audioFeatures);
    return (
        <>
            {playlist ? (
                <StyledHeader>
                <div className="header__inner">
                    {playlist.images.length && playlist.images[0].url &&(
                        <img className="header__img" src={playlist.images[0].url} alt="Playlist Artwork"/>
                    )}
                    <div>
                        <div className="header__overline">Playlist</div>
                        <h1 className="header__name">{playlist.name}</h1>
                        <p className="header__meta">
                            {playlist.followers.total !== 1? (
                                <span>{playlist.followers.total} {`follower${playlist.followers.total > 1 ? 's':''}`}</span>
                            ):null}
                            <span>{playlist.tracks.total} {`song${playlist.tracks.total > 1 ?'s':''}`}</span>
                        </p>
                    </div>
                </div>
            </StyledHeader>
            ):(
                    <Loader/>
            )
            }
            <main>
                <SectionWrapper title = "Playlist" breadcrumb = "true">
                    {tracksForTrackList && (
                        <TrackList tracks={tracksForTrackList}/>
                    )}
                </SectionWrapper>
            </main>
        </>
    )
}

export default Playlist;