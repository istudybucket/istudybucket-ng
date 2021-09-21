export class Bucket {

  title: string;
  description: string;
  creatorName: string;
  size: number;
  groupImage: string;
  creationDate: string;

  constructor(title: string, description: string, creatorName: string, size: number, groupImage: string, creationDate: string) {
    this.title = title;
    this.description = description;
    this.creatorName = creatorName;
    this.size = size;
    this.groupImage = groupImage;
    this.creationDate = creationDate;
  }

}
