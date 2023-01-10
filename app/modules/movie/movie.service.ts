import { movieConstants } from "./movie.constants";
import movieRepo from "./movie.repo";
import { IMovie } from "./movie.types";

const addMovie = async(movie:IMovie)=>{
    try {
        await movieRepo.add(movie);
        return movieConstants.MOVIE_ADDED
    } catch (error) {
        throw movieConstants.FAILED
    }
}

const getAllMovies = async(limit?:any,page?:any,sortBy?:any,order?:any,searchValue?:any,field?:any)=>{
    try {
        return await movieRepo.getAll(limit,page,sortBy,order,searchValue,field);
    } catch (error) {
        throw error;
        throw movieConstants.FAILED
    }
}

const getReport = async(field:any,startDate:string,endDate:string)=>{
try {
    field = field || 'gener'
    return await movieRepo.getReport(field,startDate,endDate);
} catch (error) {
  throw movieConstants.FAILED  
}
}


export default {addMovie,getAllMovies,getReport}