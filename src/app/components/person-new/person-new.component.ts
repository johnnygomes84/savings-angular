import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-new',
  templateUrl: './person-new.component.html',
  styleUrls: ['./person-new.component.css']
})
export class PersonNewComponent implements OnInit {

 constructor(
  private personService: PersonService,
  private route: ActivatedRoute
 ){}

 person: Person = new Person();
 submited = false;
 message?:any;
 classCss?:any;

 ngOnInit() {
  let personUpdateId:string = this.route.snapshot.params['id']
  
  if(personUpdateId != undefined) {
    this.findById(personUpdateId);
  }
 }

 register(form: NgForm): void {
  this.personService.createOrUpdatePerson(this.person).subscribe({
    
    next: (response) => {
      console.log(response);
      this.submited = true;
      this.person = new Person();
      form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered successfully`
      });
    }
  })
 }

 findById(id:string) {
  this.personService.findById(id).subscribe((response:Person) => {
    this.person = response;
  })

 }

 private showMessage(message: {type: string, text: string}): void {
  this.message = message;
  this.buildClasses(message.type);
  setTimeout(() => {
    this.message = undefined;
  }, 5000);
}

private buildClasses(type: string): void {
  this.classCss = {
    'alert': true
  }
  this.classCss['alert-'+type] =  true;
}

}
