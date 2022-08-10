import React from "react";
import { NavLink } from "react-router-dom";
import "./articledetailes.css";

export const ArticleDetailes = ({ singleNewsData }) => {
  const splitDate = singleNewsData?.date_gmt?.replace("T", "  / ");

  return (
    <div>
      {singleNewsData?.title?.rendered ? (
        <>
          <div className="singleArticle-container">
            <div>
              <img
                src={singleNewsData.parsely.meta.publisher.logo.url}
                alt="logo"
              />
            </div>
            <h1
              className="titleSingelArticle"
              dangerouslySetInnerHTML={{
                __html: singleNewsData.title.rendered,
              }}
            />
            <div className="contentContainer">
              <p className="SingleauthorName">
                <strong>By: </strong>
                {singleNewsData.parsely.meta.author.map(
                  (authorName) => authorName.name
                )}
              </p>
              <p className="singleArticleDateTime">Date: {splitDate}</p>
              <p
                className="content"
                dangerouslySetInnerHTML={{
                  __html: singleNewsData.content?.rendered,
                }}
              />

              <a
                href={singleNewsData.link}
                target="_blank"
                rel="noreferrer"
                className="articleLink"
              >
                Read More About this News
              </a>
            </div>
          </div>
        </>
      ) : (
        <NavLink to="/">
          <h1 className="articlePageLink">Go to Articles list</h1>
        </NavLink>
      )}
    </div>
  );
};
