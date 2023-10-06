import React from "react";

import HomeMoviecard from "../../Components/HomeMoviecard/HomeMoviecard";
import usedFetch from "../../hook/usedFetch";

const Recommendation = ({ pagetype, id }) => {
    const { data, loading, error } = usedFetch(
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