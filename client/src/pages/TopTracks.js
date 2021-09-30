import { useState, useEffect } from 'react';
import { getTopTracks } from '../spotify';
import { TrackList, SectionWrapper, TimeRangeButtons, Loader } from '../components';

const TopTracks = () => {
const [tracks, setTracks] = useState(null);
const [activeRange, setActiveRange] = useState('short');
useEffect(() => {
    const fetchData = async () => {
        try{
            const userTopTracks = await getTopTracks(`${activeRange}_term`);
            setTracks(userTopTracks.data);
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
            tracks ? (
                <main>
                    <SectionWrapper title ="Top Artists" breadcrumb="true">
                        <TimeRangeButtons activeRange= {activeRange} setActiveRange={setActiveRange}/>
                        <TrackList tracks={tracks.items}/>
                    </SectionWrapper>
                </main>
            ):(
                    <Loader/>
            )
        }
    </>
)}

export default TopTracks;