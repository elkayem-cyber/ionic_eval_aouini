import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {

 
  constructor(private http: HttpClient, private router: Router) { }

  addCategory(form: NgForm) {

    this.http.post('http://localhost:8888/marmiton/marmiton/src/category.php?action=add', JSON.stringify(form.value)).toPromise().then((response: any) => { console.log(response) })
    this.ngOnInit(); //  sert à vider le formulaire au click 'enregistrer'
    this.router.navigate(['/'])

  }

  ngOnInit() {
  }

}
