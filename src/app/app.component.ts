import { Component } from '@angular/core';
import { IUser } from 'src/common/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wd17309';
  name = 'Nguyen Van Hiep'
  masv = 'PH28430'
  age = 20
  gender = 'man'

  user: IUser = {
    id: "1",
    name: "Hiep",
    age: 20,
    address: "VietNam",
    phone: "09876453222"
  }

}
