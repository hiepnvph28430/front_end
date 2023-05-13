import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/common/product';
import { IUser } from 'src/common/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: IUser = {
    id: "1",
    name: "Hiep",
    age: 20,
    address: "VietNam",
    phone: "09876453222",

  }

  product: IProduct[] = [
    { id: "1", name: "San Pham 1", price: 9898, desc: "ABC", imageUrl: "https://picsum.photos/125/50" },
    { id: "2", name: "San Pham 2", price: 988, desc: "ABC", imageUrl: "https://picsum.photos/125/50" },
    { id: "3", name: "San Pham 3", price: 2898, desc: "ABC", imageUrl: "https://picsum.photos/125/50" },
    { id: "4", name: "San Pham 4", price: 5898, desc: "ABC", imageUrl: "https://picsum.photos/125/50" },
    { id: "5", name: "San Pham 5", price: 923498, desc: "ABC", imageUrl: "https://picsum.photos/125/50" },
    { id: "6", name: "San Pham 6", price: 1298, desc: "ABCD", imageUrl: "https://picsum.photos/125/50" }
  ]


}
