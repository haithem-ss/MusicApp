import { useContext } from "react";
import TracksPlayerContext from "../Context/Track-player-context";

const usePlayer = () => {
    return useContext(TracksPlayerContext);
};

export default usePlayer;