import { Clips } from "./clips";
import { Games } from "./games";

export interface Personne {
    id?: number ;
    userName?: string ;
    email?: string ;
    password?: string ;
    gamesDownloaded?: Array<number>;
    friends?: Array<number> ;
    friendsOnline?: Array<number> ;
    liveStreams?: Array<number> ;
    clips?: Array<Clips> ;
    photo?: string ;
    Followed?: Array<string>;
    library?: Array<Games>;
    downloaded?: Array<Games>;
}
