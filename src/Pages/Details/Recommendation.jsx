import React from "react";

import Movietypeboxes from "../../Components/Movietypeboxes/Movietypeboxes";
import usedFetch from "../../hook/usedFetch";

const Recommendation = ({ pagetype, id }) => {
    const { data, loading, error } = usedFetch(
        `/${pagetype}/${id}/recommendations`
    );

    return (
        <Movietypeboxes
            title="Recommendations"
            data={data?.results}
            loading={loading}
            pagetype={pagetype}
        />
    );
};

export default Recommendation;