import { Clips } from "./clips";
import { Games } from "./games";
import { Streamers } from "./streamers";

export interface Personne {
    id?: number ;
    userName?: string ;
    email?: string ;
    password?: string ;
    friends?: Array<number> ;
    friendsOnline?: Array<number> ;
    liveStreams?: Array<number> ;
    clips?: Array<Clips> ;
    photo?: string ;
    Followed?: Array<Streamers>;
    library?: Array<Games>;
    downloaded?: Array<Games>;
}
