class MovieObj {
	title: string;
	director: string;
	producer: string;
    releaseDate: string;
    description: string;
    isFav:boolean;
    constructor(title:string,director:string,producer:string,releaseDate:string,description:string,isFav:boolean){
        this.title = title;
        this.director = director;
        this.producer= producer;
        this.releaseDate = releaseDate
        this.description = description;
        this.isFav= isFav;
    }
}

export default MovieObj;
