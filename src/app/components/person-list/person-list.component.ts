import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/person.model';
import { DialogService } from 'src/app/services/dialog.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personList: Array<Person> = [];
  message?:any;
  classCss?:any;

  constructor(
    private personService: PersonService,
    private dialogService: DialogService,
    private router: Router
  ){}

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.personService.findAll().subscribe((response: any) => {
      this.personList = response['content']
    })
  }

  editPerson(id: string) {
    this.router.navigate(['/person-new', id]);
  }

  deletePerson(id:string) {
    this.dialogService.confirm('do you want to delete user the user?')
      .then((canceled:boolean) => {
        if(canceled) {
          this.personService.deleteById(id).subscribe((response:any) => {
            console.log(response);
            this.showMessage({
              type: 'success',
              text: `Record deleted`
            });
            this.findAll();
          });
        }

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
