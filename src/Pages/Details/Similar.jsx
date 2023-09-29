import React from "react";

import Movietypeboxes from "../../Components/Movietypeboxes/Movietypeboxes";
import usedFetch from "../../hook/usedFetch";

const Similar = ({ pagetype, id }) => {
    const { data, loading, error } = usedFetch(`/${pagetype}/${id}/similar`);

    const title = pagetype === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Movietypeboxes
            title={title}
            data={data?.results}
            loading={loading}
            pagetype={pagetype}
        />
    );
};

export default Similar;