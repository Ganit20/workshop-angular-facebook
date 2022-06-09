import { sortBy } from 'cypress/types/lodash';
import { Post } from 'src/app/wall/interfaces/post.interface';
export class Sorter {
    static sortBy(collection:Post[]) {
        return [...collection].sort((a,b)=>{
            if(a.createdTime > b.createdTime) {
                return 1;
            }else if(a.createdTime<b.createdTime) {
                return -1;
            }else {
                return 0;
            }
        });
    }
}
