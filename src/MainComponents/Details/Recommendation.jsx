import React from "react";

import HomeMoviecard from "../../SmallComponents/HomeMoviecard/HomeMoviecard";
import UsedFetch from "../../ExtraBox/ApiCall/UsedFetch";

const Recommendation = ({ pagetype, id }) => {
    const { data, loading, error } = UsedFetch(
        `/${pagetype}/${id}/recommendations`
    );

    return (
        <HomeMoviecard
            title="Recommendations"
            data={data?.results}
            loading={loading}
            pagetype={pagetype}
        />
    );
};

export default Recommendation;