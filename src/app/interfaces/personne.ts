export interface Personne {
    id?: number ;
    userName?: string ;
    email?: string ;
    password?: string ;
    gamesDownloaded?: Array<number>;
    friends?: Array<number> ;
    friendsOnline?: Array<number> ;
    liveStreams?: Array<number> ;
    clips?: Array<number> ;
    photo?: string ;
   
}
