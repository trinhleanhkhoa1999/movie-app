import ImageComponent from "@components/ImageComponent";
import RelatedMedia from "@components/MediaDetail/RelatedMedia";
import React from "react";
import { useLoaderData } from "react-router-dom";

const GENDERS_MAPPING = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

const PeoplePage = () => {
  const peopleInfo = useLoaderData();

  return (
    <div className="bg-black text-[1.2vw] text-white">
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`}
            width={600}
            height={900}
            className="mb-6"
          />
          <div className="mb-6 text-[1.4vw] font-bold">
            <p>Personal Info</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Know For</p>
              <p>{peopleInfo.known_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{GENDERS_MAPPING[peopleInfo.gender]}</p>
            </div>
            <div>
              <p className="font-bold">Place of Brith</p>
              <p>{peopleInfo.place_of_birth}</p>
            </div>
            <div>
              <p className="font-bold">Brithday</p>
              <p>{peopleInfo.birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex-2">
          <p className="mb-6 text-[2vw] font-bold">{peopleInfo.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-[1.5vw] font-bold">Biography</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <div>
            <RelatedMedia
              title="Know for"
              mediaList={peopleInfo.combined_credits?.cast || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
