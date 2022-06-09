import { sortBy } from 'cypress/types/lodash';
import { Post } from 'src/app/wall/interfaces/post.interface';


export class Sorter {
    static sortBy<T>(collection:T[],mapTo: (value:T)=> unknown):T[] {
        return [...collection].sort((a,b)=>{
           const val1 = mapTo(a) as number;
           const val2 = mapTo(b) as number;
            return val2-val1;
        });
    }
}
