import ImageComponent from "@components/ImageComponent";
import RelatedMedia from "@components/MediaDetail/RelatedMedia";
import React from "react";

const PeoplePage = () => {
  return (
    <div>
    <div className="container">
      <div className="flex-1">
        <ImageComponent
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/zcwEuzsG2vEZkKyScc63wWZf8Yv.jpg`}
          width={600}
          height={900}
          className="mb-6"
        />
        <div className="mb-6 text-lg font-bold">
          <p>Personal Info</p>
        </div>
        <div className="space-y-4">
          <div>
            <p className="font-bold">Know For</p>
            <p>Acting</p>
          </div>
          <div>
            <p className="font-bold">Gender</p>
            <p>name</p>
          </div>
          <div>
            <p className="font-bold">Place of Brith</p>
            <p>US UK</p>
          </div>
          <div>
            <p className="font-bold">Brithday</p>
            <p>22/02</p>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <p className="mb-6 text-2xl font-bold">Ten dien vien</p>
        <div className="mb-6">
          <p className="mb-4 text-lg font-bold">Biography</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iste aliquid temporibus, molestias accusantium magni vel qui porro
            corporis quis fugit suscipit totam illum nulla modi culpa eveniet
            recusandae consectetur!
          </p>
        </div>
        <div>
          <RelatedMedia title="Know for" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default PeoplePage;
