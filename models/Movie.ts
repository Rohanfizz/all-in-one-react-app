class MovieObj {
	title: string;
	director: string;
	producer: string;
    releaseDate: string;
    description: string;
    isFav:boolean;
    id:string;
    constructor(id:string,title:string,director:string,producer:string,releaseDate:string,description:string,isFav:boolean){
        this.id = id;
        this.title = title;
        this.director = director;
        this.producer= producer;
        this.releaseDate = releaseDate
        this.description = description;
        this.isFav= isFav;
    }
}

export default MovieObj;
