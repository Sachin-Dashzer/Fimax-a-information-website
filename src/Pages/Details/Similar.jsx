import React from "react";

import HomeMoviecard from "../../Components/HomeMoviecard/HomeMoviecard";
import usedFetch from "../../hook/usedFetch";

const Similar = ({ pagetype, id }) => {
    const { data, loading, error } = usedFetch(`/${pagetype}/${id}/similar`);

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