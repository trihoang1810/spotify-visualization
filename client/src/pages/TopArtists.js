import {useState,useEffect} from 'react';
import { ArtistsGrid, SectionWrapper, TimeRangeButtons,Loader } from '../components';
import {getTopArtists} from '../spotify';
const TopArtists = () => {
  const [artists, setArtists] = useState(null);
  const [activeRange, setActiveRange] = useState('short');
  useEffect(() => {
      const fetchData = async () => {
          try{
              const userTopArtists = await getTopArtists(`${activeRange}_term`);
              setArtists(userTopArtists.data);
            }
            catch (e){
                console.error(e);
            }
        }
        fetchData();
  },[activeRange]);
    return (
        <> 
            {
                artists ? (
                    <main>
                        <SectionWrapper title ="Top Artists" breadcrumb="true">
                            <TimeRangeButtons activeRange= {activeRange} setActiveRange={setActiveRange}/>
                            <ArtistsGrid artists={artists.items.slice(0,10)}/>
                        </SectionWrapper>
                    </main>
                ): (
                        <Loader/>
                )
            }
        </>
    )
}
export default TopArtists;