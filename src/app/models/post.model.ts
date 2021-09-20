export class Post {
  postTitle: string;
  authorName: string;
  postContent: string;
  upVotes: number;
  downVotes: number;
  commentCount: number;


  constructor(title: string, authorName: string, content: string,
              upVotes: number, downVotes: number, comCount: number) {
    this.postTitle = title;
    this.authorName = authorName;
    this.postContent = content;
    this.upVotes = upVotes;
    this.downVotes  = downVotes;
    this.commentCount = comCount;
  }
}
