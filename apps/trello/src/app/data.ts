import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
      let cardDetails = [
        { id: 101, userStory: 'Angular' },
      ];
      return { articles: cardDetails};
    }
  } 

  export class UserStroy {
    id: number;
    userStory: string;
}


export class BoardData {
 // userStories: CardComponent[];
}