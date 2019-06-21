import { User } from './user';

export class Remark {
    remarkId: number;
    remarkArtId: number;
    remarkAuthorId: User;
    remarkDescription: string;

    constructor(remarkId: number, remarkArtId: number, remarkAuthorId: User, remarkDescription: string) {
        this.remarkId = remarkId;
        this.remarkArtId = remarkArtId;
        this.remarkAuthorId = remarkAuthorId;
        this.remarkDescription = remarkDescription;
    }
}