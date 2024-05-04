import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookModel } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private mockBooks: BookModel[] = [
    {
      id: 1,
      name: 'The Hunger Games',
      author: 'Suzanne Collins',
      imageUrl: '../assets/images/book1.jpeg',
      description: 'In a dystopian future, a young girl named Katniss Everdeen is forced to compete in a brutal televised event known as the Hunger Games, where she must fight for her life against other young tributes. The story explores themes of survival, sacrifice, and resistance against a tyrannical government.',
      buyUrl: 'https://www.amazon.in/Hunger-Games-Suzanne-Collins/dp/0439023483',
      price:'Price: $100'
    },
    {
      id: 2,
      name: 'Harry Potter',
      author: 'J.K. Rowling',
      imageUrl: '../assets/images/book2.jpeg',
      description: 'Follow the adventures of a young wizard named Harry Potter as he attends Hogwarts School of Witchcraft and Wizardry. Along with his friends Ron and Hermione, Harry uncovers the mysteries of his past and faces the dark wizard Voldemort in a magical world filled with spells, creatures, and adventures.',
      buyUrl: 'https://amzn.eu/d/cdme6YE',
      price:'Price: $100'
    },
    {
      id: 3,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      imageUrl: '../assets/images/book3.jpeg',
      description: 'Set in the American South during the 1930s, "To Kill a Mockingbird" tells the story of Scout Finch and her brother Jem as they witness the racial injustice and moral growth of their community. Their father, Atticus Finch, is a lawyer defending an innocent African American man accused of rape.',
      buyUrl: 'https://www.amazon.in/Kill-Mockingbird-Harper-Lee/dp/0061120081',
      price:'Price: $100'
    },
    {
      id: 4,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: '../assets/images/book4.jpeg',
      description: 'Set in early 19th-century England, "Pride and Prejudice" is a classic novel that explores the complexities of social class, marriage, and love. Follow the witty and independent Elizabeth Bennet as she navigates the challenges of societal expectations and falls in love with the enigmatic Mr. Darcy.',
      buyUrl: 'https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/0141439513',
      price:'Price: $100'
    },
    {
      id: 5,
      name: 'Twilight',
      author: 'Stephenie Meyer',
      imageUrl: '../assets/images/book5.jpeg',
      description: 'Bella Swan moves to the small town of Forks and falls in love with the mysterious Edward Cullen, who happens to be a vampire. "Twilight" is a modern fantasy romance novel that explores the complexities of forbidden love and the challenges it poses to both Bella and Edward.',
      buyUrl: 'https://www.amazon.in/Twilight-Saga-Stephenie-Meyer/dp/0316015849',
      price:'Price: $100'
    },
    {
      id: 6,
      name: 'The Book Thief',
      author: 'Markus Zusak',
      imageUrl: '../assets/images/book6.jpeg',
      description: 'Set in Nazi Germany, "The Book Thief" is narrated by Death and follows the story of Liesel Meminger, a young girl who steals books to share them with others. The novel explores themes of love, friendship, and the power of words during a time of great adversity.',
      buyUrl: 'https://www.amazon.in/Book-Thief-Markus-Zusak/dp/0375842209',
      price:'Price: $100'
    },
    {
      id: 7,
      name: 'Narnia',
      author: 'C.S. Lewis',
      imageUrl: '../assets/images/book7.jpeg',
      description: 'Step into the magical world of Narnia, a place filled with talking animals, mythical creatures, and epic adventures. Follow the Pevensie siblings as they discover a hidden realm, embark on quests, and face the White Witch in "The Chronicles of Narnia."',
      buyUrl: 'https://www.amazon.in/Chronicles-Narnia-Box-Set-Lewis/dp/0064471195',
      price:'Price: $100'
    },
    {
      id: 8,
      name: 'Animal Farm',
      author: 'George Orwell',
      imageUrl: '../assets/images/book8.jpeg',
      description: 'George Orwell\'s allegorical novella "Animal Farm" tells the story of farm animals who rebel against their oppressive human farmer. As they establish their own government, the animals\' utopian dreams are challenged, leading to a thought-provoking exploration of power and corruption.',
      buyUrl: 'https://www.amazon.in/Animal-Farm-George-Orwell/dp/0451526341',
      price:'Price: $100'
    },
    {
      id: 9,
      name: 'Les Misérables',
      author: 'Victor Hugo',
      imageUrl: '../assets/images/book9.jpeg',
      description: 'Experience the epic tale of "Les Misérables," a novel set in 19th-century France. The story follows the lives of several characters, including the ex-convict Jean Valjean and the relentless Inspector Javert. Themes of justice, redemption, and love are intricately woven throughout the narrative.',
      buyUrl: 'https://www.amazon.in/Les-Miserables-Victor-Hugo/dp/0451525264',
      price:'Price: $100'
    },
    {
      id: 10,
      name: 'The Alchemist',
      author: 'Paulo Coelho',
      imageUrl: '../assets/images/book10.jpeg',
      description: 'Join Santiago, a shepherd, on a philosophical journey to find his personal legend in "The Alchemist." This international bestseller explores the pursuit of dreams, the language of the universe, and the importance of following one’s heart.',
      buyUrl: 'https://www.amazon.in/Alchemist-Paulo-Coelho/dp/0062315005',
      price:'Price: $100'
    },
    {
      id: 11,
      name: 'The Help',
      author: 'Kathryn Stockett',
      imageUrl: '../assets/images/book11.jpeg',
      description: 'Set in Jackson, Mississippi, during the early 1960s, "The Help" tells the story of African American maids who work in white households and their relationships with the families they serve. The novel sheds light on the racial tensions and social changes of the era.',
      buyUrl: 'https://www.amazon.in/Help-Kathryn-Stockett/dp/0425232204',
      price:'Price: $100'
    },
    {
      id: 12,
      name: "Charlotte's Web",
      author: 'E.B. White',
      imageUrl: '../assets/images/book12.jpeg',
      description: 'Experience the heartwarming friendship between a pig named Wilbur and a clever spider named Charlotte in "Charlotte\'s Web." This timeless children’s novel explores themes of compassion, friendship, and the cycle of life.',
      buyUrl: 'https://www.amazon.in/Charlottes-Web-E-B-White/dp/0061124958',
      price:'Price: $100'
    },
    {
      id: 13,
      name: 'Dracula',
      author: 'Bram Stoker',
      imageUrl: '../assets/images/book13.jpeg',
      description: 'Dive into the classic vampire novel "Dracula" and follow the menacing Count Dracula as he attempts to move from Transylvania to England. The novel is known for introducing the iconic vampire character and has had a significant influence on the horror genre.',
      buyUrl: 'https://www.amazon.in/Dracula-Bram-Stoker/dp/0486411095',
      price:'Price: $100'
    },
    // Continue to add descriptions and Amazon links for the remaining books
  ];

  constructor() {}

  getBooks(): Observable<BookModel[]> {
    return of(this.mockBooks);
  }
}
