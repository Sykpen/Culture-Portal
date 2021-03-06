import React from 'react';
import Timeline from '../TimeLine/TimeLine';
import WorksList from '../WorksList/WorksList';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import ActivityMap from '../ActivityMap/ActivityMap';
import AuthorIdentity from '../AuthorIdentity/AuthorIdentity';
import data from '../../data/testAuthors.js';
import { useParams } from "react-router-dom";

function AuthorDescription() {
  const { id } = useParams();
  const index = data.findIndex(item => item.id === Number(id));
  const { name, years, photo, timeline, works, gallery, video, activity } = data[index];
  const timelineElem = timeline ? <Timeline timeline={timeline}/> : null;
  const worksElem = works ? <WorksList works={works}/> : null;
  const galleryElem = gallery ? <PhotoGallery gallery={gallery}/> : null;
  const videoElem = video ? <YouTubeVideo video={video}/> : null;
  const mapElem = activity ? <ActivityMap activity={activity}/>  : null;
  return (
    <div>
      <AuthorIdentity 
        name = { name }
        years = { years }
        photo = { photo }
      />
      {timelineElem}
      {worksElem}
      {galleryElem}
      {videoElem}
      {mapElem}
    </div>
  );
}

export default AuthorDescription;