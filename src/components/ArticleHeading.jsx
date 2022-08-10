import React from "react";
import { NavLink } from "react-router-dom";
import "./articleheading.css";

export const ArticleHeading = ({ data, setSingleNewsData, loading }) => {
  const clickHandler = (newsArticele) => {
    setSingleNewsData(newsArticele);
  };
  return (
    <>
      <div>
        <h1 className="articleHeadline">Article Headlines</h1>
        {!loading ? (
          <div className="articleListContainer">
            {data.map((newsArticele) => {
              const splitDate = newsArticele.date_gmt.replace("T", "  / ");
              return (
                <div className="headongListContainer" key={newsArticele.id}>
                  <ul className="headingList">
                    <li>
                      <NavLink
                        to={
                          "/articledetail/" + newsArticele.parsely.meta.headline
                        }
                        className="navLink headingLink"
                        onClick={() => clickHandler(newsArticele)}
                        dangerouslySetInnerHTML={{
                          __html: newsArticele.parsely.meta.headline,
                        }}
                      ></NavLink>
                    </li>
                  </ul>
                  <div className="newsExcerpt-par">
                    <div className="newsExcerpt_image_container">
                      <div className="newsExcerpt-par">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: newsArticele.excerpt.rendered,
                          }}
                        />
                        <div className="authorContainer">
                          <p className="authorName">
                            Author:
                            {newsArticele.parsely.meta.author.map(
                              (authorName) => authorName.name
                            )}
                          </p>
                          <p className="dateTime">Date: {splitDate}</p>
                        </div>
                      </div>
                      <img
                        src={newsArticele.jetpack_featured_media_url}
                        alt="articleimage"
                        className="imageWidth"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="loading-page">loading.....</h1>
        )}
      </div>
    </>
  );
};
