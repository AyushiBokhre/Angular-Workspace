import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../http-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  form: any = {
    list: [],
    errorMessage: '',
    successMessage: '',
    searchParam: {},
    pageNo: 0
  }

  constructor(private httpService: HttpserviceService) { }
  ngOnInit() {
    this.search();
  }
  next() {
    this.form.pageNo++;
    this.search();
  }
  previous() {
    this.form.pageNo--;
    this.search();
  }
  search() {
    this.form.errorMessage = ''
    this.form.successMessage = ''
    this.form.inputerror = {}
    // console.log('form data:', this.form.data)
    this.httpService.post('http://localhost:8080/User/search/' + this.form.pageNo, this.form.searchParam, (response: any) => {
      if (response.success == true) {
        this.form.list = response.result.data;
        console.log('User list:', this.form.list);
      }

    });
  }


}
