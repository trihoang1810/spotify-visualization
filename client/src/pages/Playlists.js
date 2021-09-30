import {useState, useEffect} from 'react';
import { SectionWrapper } from "../components";
import {PlaylistGrid, Loader} from "../components";
import { getCurrentUserPlaylists } from '../spotify';
import axios from 'axios';
const Playlists = () => {

    const [playlistsData, setPlaylistsData] = useState(null);
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylistsData(userPlaylists.data);
        setPlaylists(playlists => ([
                ...playlists ? playlists : [],
                ...userPlaylists.data.items
                ]));
      } catch (e){
            console.error(e);
      }
    };
        fetchData();
    }, []);

    // When playlistsData updates, check if there are more playlists to fetch
  // then update the state variable
    useEffect(() => {
        if (!playlistsData) {
        return;
        }

        // Playlist endpoint only returns 20 playlists at a time, so we need to
        // make sure we get ALL playlists by fetching the next set of playlists
        const fetchMoreData = async () => {
        if (playlistsData.next) {
            try{
                const { data } = await axios.get(playlistsData.next);
                setPlaylistsData(data);
                // Use functional update to update playlists state variable
                // to avoid including playlists as a dependency for this hook
                // and creating an infinite loop
                 setPlaylists(playlists => ([
                ...playlists ? playlists : [],
                ...playlistsData.items
                ]));
            }catch (e){console.error(e)};
        }
        };

        // Fetch next set of playlists as needed
        fetchMoreData();

    }, [playlistsData]);

// console.log(playlistsData.items);

    return (
        <main>
        {playlists?(
            <SectionWrapper title= "Your playlists" breadcrumb="true">
            {playlists && (
                <PlaylistGrid playlists ={playlists}/>
            )}
            </SectionWrapper>
        ):(
                <Loader/>
        )}
        </main>
    )
}

export default Playlists;