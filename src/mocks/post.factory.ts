import { Post } from "src/app/wall/interfaces/post.interface";
import { userFactory } from "./user.factory";

export function postFactory():Post {
    return {
      id:'gf',
      createdTime:'fake-time',
      author: userFactory(),
      body:'body',
      images:['s']
    }
  }
 