import { useContext } from "react";
import TracksContext from "../Context/Load-tracks-context";

const useTracks = () => {
    return useContext(TracksContext);
};

export default useTracks;