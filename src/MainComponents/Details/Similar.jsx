import React from "react";

import HomeMoviecard from "../../SmallComponents/HomeMoviecard/HomeMoviecard";
import UsedFetch from "../../ExtraBox/ApiCall/UsedFetch";

const Similar = ({ pagetype, id }) => {
    const { data, loading, error } = UsedFetch(`/${pagetype}/${id}/similar`);

    const title = pagetype === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <HomeMoviecard
            title={title}
            data={data?.results}
            loading={loading}
            pagetype={pagetype}
        />
    );
};

export default Similar;